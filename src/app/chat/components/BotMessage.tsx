import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import { formatoPersonalizado } from '@/shared/helpers/FormatDate';
import { formatMarkdownImage } from '@/shared/helpers/FormtaMarkdownImage';
import { limpiarMarkdown } from '@/shared/helpers/FormatMakdownToTxt';
import { getTTS, IgetTTSResponse } from '../services/tts.services';
import { AudioPlayer } from '@/shared/components'
import { Sound, Spiner } from '@/shared/icons'
import './botMessage.css';

interface IBotMessageParams {
  message: string;
  datetime: string;
  isNotMsg?: boolean;
}

export const BotMessage = ({ message, datetime, isNotMsg = false }: IBotMessageParams) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const fechaFormateada = formatoPersonalizado(new Date(datetime));

  const handleGetAudio = async () => {
    setIsLoading(true);
    try {
      const ttsResponse: IgetTTSResponse = await getTTS({ input: limpiarMarkdown(message) });
      console.log(ttsResponse);

      if (ttsResponse.success) {
        setAudioUrl(ttsResponse.audio);
        setAudioBlob(ttsResponse.blob);
      } else {
        alert('Ha ocurrido un error en la generación del audio.');
      }
    } catch (error) {
      console.error('Error al obtener audio TTS:', error);
      alert('Ha ocurrido un error en la generación del audio.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`flex w-full mt-2 ${isNotMsg ? "max-w-[200px] min-h-[240px]" : "max-w-[95%] md:max-w-[80%]" } space-x-3`}>

      <div className="relative h-full w-8 flex-shrink-0">
        <div className="absolute h-8 w-8 rounded-full bg-gray-100 overflow-hidden">
          <Image width={60} height={60} src="/julio-perfil-image.svg" alt="julio" />

        </div>
        {!isNotMsg && !audioBlob && (
          <div className='absolute h-8 w-8 top-[40px]'>
            {
              isLoading ? <Spiner stroke='#eee'/> : <button onClick={handleGetAudio}><Sound width={30} /></button>
            }

          </div>
        )}
      </div>

      <div>
        <div className="bg-gray-100 w-full text-gray-600 p-3 rounded-r-2xl rounded-bl-2xl">
          <section className="markdown-container text-sm font-medium">

            {isLoading && <p>Cargando audio...</p>}

            {audioUrl && audioBlob && (
              <>
                <AudioPlayer blobAudio={audioBlob} urlAudio={audioUrl} />
              </>
            )}
            <Markdown>{formatMarkdownImage(message)}</Markdown>

          </section>
        </div>
        <span className="text-xs text-gray-500 leading-none">{fechaFormateada}</span>
      </div>
    </div>
  );
};
