import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <div className="hero py-8 px-4 mx-auto flex flex-col items-center justify-center text-center lg:py-16">

        <Image src="/juliogpt-title.svg" width={200} height={40} className='w-full max-w-lg mx-auto' alt="julio gpt" />

        <p className="mb-8 text-lg mt-2 lg:text-xl sm:px-16 lg:px-48 text-gray-400"> Hola, hola, soy Julio tu amigo capybara. Puedo ayudarte con tus dudas sobre ESFE/AGAPE</p>
        <div className="flex justify-center space-y-0 space-x-4">
          <Link href="/chat" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#2F80ED] hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
            Chatear
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
            Descargar
          </a>
        </div>
      </div>
  )
}
