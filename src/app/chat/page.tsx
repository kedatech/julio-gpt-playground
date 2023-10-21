"use client"
import React from "react";

export default function Chat() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 p-10">

      <div className="flex flex-col flex-grow w-full max-w-xl bg-white/10 border  border-gray-900 overflow-hidden shadow-xl rounded-lg">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-x-hidden">
          {/* Message */}
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-400">Tu</div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">Hola ipsum dolor sit amet, consectetur adipiscing eliseo.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          {/* Message */}
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 text-[18px] font-bold text-gray-700 grid place-content-center h-10 w-10 rounded-full bg-gray-300">Tu</div>
          </div>
          {/* Message */}
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          {/* Message */}
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          {/* Message */}
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          {/* Message */}
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          {/* Message */}
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          {/* Message */}
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          {/* Message */}
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="bg-gray-300/10 p-4">
          <input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…" />
        </div>
      </div>
    </main>

  );
};