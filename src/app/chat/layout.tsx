import React from 'react'

function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <main className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 p-10">

      <div className="flex flex-col flex-grow w-full max-w-xl bg-white/10 border  border-gray-900 overflow-hidden shadow-xl rounded-lg">
        {children}
      </div>
    </main>

  )
}

export default layout