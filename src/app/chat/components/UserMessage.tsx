import React from 'react'
import { formatoPersonalizado } from '@/shared/helpers/FormatDate';


export const UserMessage = ({ message, datetime }: { message: string, datetime: string}) => {
  const fechaFormateada = formatoPersonalizado(new Date(datetime));

  return (
    <div className="flex w-full mt-2 space-x-3 ml-auto justify-end max-w-[95%] md:max-w-[80%]">
      <div className='flex flex-col'>
        <div className="bg-[#2F80ED] text-white p-3 rounded-l-2xl rounded-br-2xl overflow-x-hidden">
          <p className="text-sm">{message}</p>
        </div>
        <span className="text-xs text-gray-500 max-w-xs my-2 leading-none text-right">{fechaFormateada}</span>
      </div>
      {/* <div className="flex-shrink-0 text-[18px] font-bold text-gray-700 grid place-content-center h-10 w-10 rounded-full bg-gray-300">Tu</div> */}
    </div>
  )
}
