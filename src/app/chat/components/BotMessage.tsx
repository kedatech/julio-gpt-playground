import React from 'react';
import { formatoPersonalizado } from '@/shared/helpers/FormatDate';

export const BotMessage = ({ message }: { message: string}) => {

  const fechaFormateada = formatoPersonalizado(new Date('2023-10-21 07:35:00'));

  return (
    <div className="flex w-full mt-2 space-x-3 max-w-xs">
      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 overflow-hidden transform translate-y-8">
        <img src="/julio-perfil-image.svg" alt="julio" />
      </div>
      <div>
        <div className="bg-gray-100 p-3 rounded-r-2xl rounded-tl-2xl">
          <p className="text-sm">{message}</p>
        </div>
        <span className="text-xs text-gray-500 leading-none">{fechaFormateada}</span>
      </div>
    </div>
  );
};
