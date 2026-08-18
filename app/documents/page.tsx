'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function DocumentPage() {
  const data = [
    { label: 'full legal name', type: 'text' },
    { label: 'LTD name', type: 'text' },
    { label: 'email', type: 'email' },
    { label: 'contact no', type: 'number' },
    { label: 'residential address', type: 'text' },
    { label: 'business details', type: 'text' },
    { label: 'passport', type: 'file' },
    { label: 'bank statement', type: 'file' },
    { label: 'estimated time', type: 'number' }
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="border-t-4 border-cyan-400 bg-slate-950 px-4 py-5 text-white sm:px-6">
        <div className="mx-auto max-w-6xl flex justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white"><ArrowLeft size={16} />Back to home</Link>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white">All services<ArrowRight size={16} /></Link>
        </div>
      </div>

      {/* {main content} */}
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Provide information for LTD creation</p>
            </div>


            {/* Form */}
            <form className="space-y-6">

              {data.map((d, key) =>
                <div key={key} className='space-y-6'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{d.label}</label>
                  <input type={d.type} className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition" />
                </div>
              )
              }


              {/* submit button */}
              <button
                type="submit"
                className="w-full bg-cyan-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                submit
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-sm text-gray-500">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Additional help */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Need help?{' '}
                <a href="tel:+441234567890" className="text-cyan-600 hover:text-yellow-700 font-medium">
                  Contact Support
                </a>
              </p>
            </div>
          </div>

          {/* Footer link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-cyan-600 hover:text-yellow-700 font-bold">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

