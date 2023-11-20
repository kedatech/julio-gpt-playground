"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Markdown from 'markdown-to-jsx'
import { formatoPersonalizado } from '@/shared/helpers/FormatDate';
import { formatMarkdownImage } from '@/shared/helpers/FormtaMarkdownImage';
import { limpiarMarkdown } from '@/shared/helpers/FormatMakdownToTxt';
import { getTTS } from '../services/tts.services'
import './botMessage.css'

interface IBotMessageParams { message: string, datetime: string, isNotMsg?: boolean }

export const BotMessage = ({ message, datetime, isNotMsg = false }: IBotMessageParams) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const fechaFormateada = formatoPersonalizado(new Date(datetime));

  const handdleGetAudio = async () => {
    setIsLoading(() => true)
    const result = await getTTS({ input: limpiarMarkdown(message) })
    console.log(result)
    if (!result.success) {
      alert("Ha ocurrido un error")
    }
    setAudioUrl(result.audio)
    setIsLoading(() => false)
  }

  return (
    <div className="flex w-full mt-2 space-x-3 max-w-[95%] md:max-w-[80%]">
      <div className='relative h-full w-8 flex-shrink-0'>

        <div className="absolute h-8 w-8 rounded-full bg-gray-100 overflow-hidden">
          <Image width={60} height={60} src="/julio-perfil-image.svg" alt="julio" />
        </div>
      </div>

      <div>
        <div className="bg-gray-100 w-full text-gray-600 p-3 rounded-r-2xl rounded-bl-2xl">
          <section className="markdown-container text-sm font-medium">
            {
              !isNotMsg && <>
                <button onClick={handdleGetAudio}>Cargar audio</button>
                <br />
              </>
            }
            <Markdown>
              {formatMarkdownImage(message)}
            </Markdown>
          </section>
        </div>
        <span className="text-xs text-gray-500 leading-none">{fechaFormateada}</span>

        {
          isLoading && <p>Cargando audio...</p>
        }

        {audioUrl && (
          <audio controls>
            <source id="audioSource" type="audio/flac" src={audioUrl!} />
          </audio>
        )}
      </div>

    </div>
  );
};
