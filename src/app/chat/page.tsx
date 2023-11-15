"use client"
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Back } from '@/shared/components';
import { useLocalStorage } from '@/shared/hooks/useLocalStorage';
import { IMessage } from './interfaces/Message.interfaces';
import { sendMessage } from './services/chat.services';
import Image from 'next/image';

import { BotMessage, UserMessage } from './components';

type IStatus = "loading" | "ready" | "limit" | "error"
export default function Chat() {
  const [newMessage, setNewMessage] = useState<string>("");
  const [messages, setMessages] = useLocalStorage<IMessage[]>("messages-user", []);
  const [status, setStatus] = useState<IStatus>("ready");
  console.log(status)

  const scrollToBottom = () => {
    const chatDiv = document.getElementById("chatDiv");
    if (chatDiv) {
      chatDiv.scrollTop = chatDiv.scrollHeight;
    }
  };

  const handleSend = async () => {
    if (newMessage.trim() === "" || status == "loading") return; // Evitar mensajes vacíos o doble envío

    const userMessage = { text: newMessage, isBot: false, timeStamp: new Date().toISOString() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setNewMessage(""); // Limpiar el input después de enviar

    setStatus("loading"); // Indicar que Julio está escribiendo

    const result = await sendMessage({ history:[], question: newMessage});

    if (result && result.data.text) {
      const botMessage = { text: result.data.text, isBot: true, timeStamp: new Date().toISOString() };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    if (result.success === false) {
      console.log("false")
      setStatus("limit")
    }else{
      setStatus("ready"); // Julio ha terminado de escribir
    }
    scrollToBottom(); // Desplazar hacia abajo para ver la respuesta de Julio
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <div
        id="chatDiv"
        className="flex flex-col flex-grow h-0 p-4 overflow-x-hidden"
      >
        <Back />
        {messages.map((msg) => (
          <React.Fragment key={uuidv4()}>
            {msg.isBot ? (
              <BotMessage key={uuidv4()} message={msg.text} datetime={msg.timeStamp} />
            ) : (
              <UserMessage key={uuidv4()} message={msg.text} datetime={msg.timeStamp} />
            )}
          </React.Fragment>
        ))}
        {status === "loading" && (
          <p className="text-gray-300 font-medium">Julio está escribiendo...</p>
        )}

        {status === "limit" && (
          <p className="text-red-400 font-medium">Limite de mensajes diarios alcanzado</p>
        )}
      </div>

      <div className="flex bg-gray-300/10 p-4">
        <input
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
          disabled={status == "loading"} // Deshabilitar el input cuando loading sea true
          className="scroll-behavioritems-center bg-transparent border-none outline-none text-white h-10 w-full rounded px-3 text-sm"
          type="text"
          placeholder={status == "loading" ? "Espera a que Julio reponda" : "Escribe tu mensaje…"}
        />
        <Image
          className="cursor-pointer"
          width={25}
          height={25}
          src="/icons/send.svg"
          alt="send icon"
          onClick={handleSend}
          style={{ cursor: status == "loading" ? "not-allowed" : "pointer" }} // Cambiar el cursor cuando loading sea true
        />
      </div>
    </>
  );
}
