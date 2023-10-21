import React from 'react';
import { formatoPersonalizado } from '@/shared/helpers/FormatDate';

export const BotMessage = ({ message }: { message: string}) => {

  const fechaFormateada = formatoPersonalizado(new Date('2023-10-21 07:35:00'));

  return (
    <div className="flex w-full mt-2 space-x-3 max-w-xs">
      <div className="flex-shrink-0 h-10 w-10 rounded-full border-[2px] border-gray-300 bg-transparent overflow-hidden">
        <img src="/julio-perfil-image.svg" alt="julio" />
      </div>
      <div>
        <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
          <p className="text-sm">{message}</p>
        </div>
        <span className="text-xs text-gray-500 leading-none">{fechaFormateada}</span>
      </div>
    </div>
  );
};
