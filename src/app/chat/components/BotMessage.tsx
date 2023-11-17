import React from 'react';
import Image from 'next/image'
import Markdown from 'markdown-to-jsx'
import { formatoPersonalizado } from '@/shared/helpers/FormatDate';
import { formatMarkdownImage } from '@/shared/helpers/FormtaMarkdownImage';
import './botMessage.css'

export const BotMessage = ({ message, datetime }: { message: string, datetime: string }) => {

  const fechaFormateada = formatoPersonalizado(new Date(datetime));

  return (
    <div className="flex w-full mt-2 space-x-3 max-w-[80%]">
      <div className='relative h-full w-8 flex-shrink-0'>

        <div className="absolute h-8 w-8 rounded-full bg-gray-100 overflow-hidden">
          <Image width={60} height={60} src="/julio-perfil-image.svg" alt="julio" />
        </div>
      </div>

      <div>
        <div className="bg-gray-100 w-full text-gray-600 p-3 rounded-r-2xl rounded-bl-2xl">
          <section className="markdown-container text-sm font-medium">
            <Markdown>
              {formatMarkdownImage(message)}
            </Markdown>
          </section>
        </div>
        <span className="text-xs text-gray-500 leading-none">{fechaFormateada}</span>
      </div>

    </div>
  );
};
