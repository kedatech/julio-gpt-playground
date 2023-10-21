"use client"
import React from "react";
import { Back } from '@/shared/components'

import { BotMessage, UserMessage } from './components'
export default function Chat() {
  return (
    <>

      <div className="flex flex-col flex-grow h-0 p-4 overflow-x-hidden">
        <Back />
        {/* Mensajes */}
        <BotMessage message="Te queiro bro" />
        <UserMessage message="Yo a ti Julio" />
      </div>

      <div className="bg-gray-300/10 p-4">
        <input className="flex items-center bg-transparent border-none outline-none text-white h-10 w-full rounded px-3 text-sm" type="text" placeholder="Escribe tu mensaje…" />
      </div>
    </>

  );
};