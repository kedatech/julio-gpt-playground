import { Metadata } from 'next'
import React from 'react'
import { getSEO } from '@/shared/seoData'

export const metadata: Metadata = getSEO("CHAT")

function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <main className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 md:p-10">

      <div className="flex flex-col flex-grow w-full max-w-xl md:bg-white/10 border  border-gray-900 overflow-hidden shadow-xl rounded-lg">
        {children}
      </div>
    </main>

  )
}

export default layout