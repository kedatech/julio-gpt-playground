"use client"
import React from "react";

import { BotMessage, UserMessage} from './components'
export default function Chat() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 p-10">

      <div className="flex flex-col flex-grow w-full max-w-xl bg-white/10 border  border-gray-900 overflow-hidden shadow-xl rounded-lg">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-x-hidden">
          
        {/* Mensaejs */}
          <BotMessage message="Te queiro bro"/>
          <UserMessage message="Yo a ti Julio"/>
        </div>
        <div className="bg-gray-300/10 p-4">
          <input className="flex items-center bg-transparent border-none outline-none text-white h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…" />
        </div>
      </div>
    </main>

  );
};