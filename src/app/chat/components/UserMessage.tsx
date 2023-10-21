import React from 'react'
import { formatoPersonalizado } from '@/shared/helpers/FormatDate';


export const UserMessage = ({ message }: { message: string}) => {
  const fechaFormateada = formatoPersonalizado(new Date());

  return (
    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
      <div>
        <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
          <p className="text-sm">{message}</p>
        </div>
        <span className="text-xs text-gray-500 leading-none">{fechaFormateada}</span>
      </div>
      <div className="flex-shrink-0 text-[18px] font-bold text-gray-700 grid place-content-center h-10 w-10 rounded-full bg-gray-300">Tu</div>
    </div>
  )
}
