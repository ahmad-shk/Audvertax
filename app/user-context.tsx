'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export interface UserProfile {
  id: string
  name: string
  email: string
  company?: string
}

export interface PurchasedService {
  serviceId: string
  serviceName: string
  price: string
  datePurchased: string
  quantity: number
}

interface StoredAccount extends UserProfile {
  password: string
  purchasedServices: PurchasedService[]
}

interface UserContextValue {
  user: UserProfile | null
  purchasedServices: PurchasedService[]
  isLoggedIn: boolean
  signup: (data: { name: string; email: string; password: string; company?: string }) => void
  login: (email: string, password: string) => boolean
  logout: () => void
  addPurchasedServices: (services: PurchasedService[]) => void
}

const UserContext = createContext<UserContextValue | null>(null)
const ACCOUNTS_KEY = 'audvetax-accounts'
const SESSION_KEY = 'audvetax-session'
const DEMO_ACCOUNT: StoredAccount = {
  id: 'demo-audvetax-account',
  name: 'Demo Client',
  email: 'demo@audvetax.com',
  password: 'Demo@1234',
  company: 'Audvetax Demo Company',
  purchasedServices: [
    { serviceId: 'ltd-company-formation', serviceName: 'UK LTD Company Formation', price: '£99.00', datePurchased: '12 March 2026', quantity: 1 },
    { serviceId: 'virtual-offices', serviceName: 'Virtual Office Address', price: '£1.00', datePurchased: '14 March 2026', quantity: 1 },
  ],
}

function readAccounts(): StoredAccount[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = JSON.parse(window.localStorage.getItem(ACCOUNTS_KEY) || '[]') as StoredAccount[]
    const demoIndex = stored.findIndex((item) => item.email.toLowerCase() === DEMO_ACCOUNT.email)
    if (demoIndex === -1) return [DEMO_ACCOUNT, ...stored]
    if (stored[demoIndex].purchasedServices.length === 0) {
      const migrated = [...stored]
      migrated[demoIndex] = DEMO_ACCOUNT
      window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(migrated))
      return migrated
    }
    return stored
  } catch { return [DEMO_ACCOUNT] }
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<StoredAccount | null>(null)

  useEffect(() => {
    const sessionEmail = window.localStorage.getItem(SESSION_KEY)
    if (sessionEmail) setAccount(readAccounts().find((item) => item.email === sessionEmail) ?? null)
  }, [])

  const saveAccounts = (accounts: StoredAccount[]) => window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts))
  const signup = (data: { name: string; email: string; password: string; company?: string }) => {
    const accounts = readAccounts().filter((item) => item.email !== data.email)
    const next: StoredAccount = { id: crypto.randomUUID(), ...data, purchasedServices: [] }
    saveAccounts([...accounts, next])
    window.localStorage.setItem(SESSION_KEY, next.email)
    setAccount(next)
  }
  const login = (email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase()
    const isDemoLogin = normalizedEmail === DEMO_ACCOUNT.email && password === DEMO_ACCOUNT.password
    const next = isDemoLogin ? DEMO_ACCOUNT : readAccounts().find((item) => item.email.toLowerCase() === normalizedEmail && item.password === password)
    if (!next) return false
    const accounts = readAccounts()
    if (!accounts.some((item) => item.id === DEMO_ACCOUNT.id)) saveAccounts([DEMO_ACCOUNT, ...accounts])
    window.localStorage.setItem(SESSION_KEY, next.email)
    setAccount(next)
    return true
  }
  const logout = () => { window.localStorage.removeItem(SESSION_KEY); setAccount(null) }
  const addPurchasedServices = (services: PurchasedService[]) => {
    if (!account) return
    const next = { ...account, purchasedServices: [...account.purchasedServices, ...services] }
    saveAccounts(readAccounts().map((item) => item.id === account.id ? next : item))
    setAccount(next)
  }

  const value = useMemo(() => ({ user: account ? { id: account.id, name: account.name, email: account.email, company: account.company } : null, purchasedServices: account?.purchasedServices ?? [], isLoggedIn: Boolean(account), signup, login, logout, addPurchasedServices }), [account])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used inside UserProvider')
  return context
}

export function getAccountFromStorage(email: string) {
  return readAccounts().find((item) => item.email.toLowerCase() === email.toLowerCase())
}

export function getStoredAccount(email: string) {
  return getAccountFromStorage(email)
}

export function getAccountsKey() { return ACCOUNTS_KEY }
export function getSessionKey() { return SESSION_KEY }
export function updateStoredAccount(account: StoredAccount) {
  const accounts = readAccounts().map((item) => item.id === account.id ? account : item)
  saveAccounts(accounts)
}

export type { StoredAccount }
