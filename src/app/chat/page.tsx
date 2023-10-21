"use client"
import React from "react";
import { Back } from '@/shared/components'
import Image from 'next/image'

import { BotMessage, UserMessage } from './components'
export default function Chat() {
  return (
    <>

      <div className="flex flex-col flex-grow h-0 p-4 overflow-x-hidden">
        <Back />
        {/* Mensajes */}
        <BotMessage message="Hola soy Julio ¿en que puedo ayudarte?" />
        <UserMessage message="Hola ayudame con el servicio social" />
        <BotMessage message="Puedo brindarte información y guiarte en tu proceso de servicio social. Especificamente ¿Qué duda tienes?" />
      </div>

      <div className="flex bg-gray-300/10 p-4">
        <input className="flex items-center bg-transparent border-none outline-none text-white h-10 w-full rounded px-3 text-sm" type="text" placeholder="Escribe tu mensaje…" />
        <Image className="cursor-pointer" width={25} height={25} src="/icons/send.svg" alt="send icon"></Image>
      </div>
    </>

  );
};