import Img from 'next/image'
import { Device } from './components/Device'

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-[#101836] to- flex items-center justify-center h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        {/* <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl text-white tracking-wider">JulioGPT</h1> */}
        <Img src="/juliogpt-title.svg" width={200} height={40} className='w-full max-w-lg mx-auto' alt="julio gpt" />
        <p className="mb-8 text-lg font-normal mt-2 lg:text-xl sm:px-16 lg:px-48 text-gray-400">Hola, Soy Julio Asistente estudiantil de la Escuela Superior Franciscana Espe. Puedes chatear conmigo y preguntarme cualquier duda sobre tus procesos administrativos o de tu carrera</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#2F80ED] hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
            Chatear
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
            Descargar
          </a>
        </div>
      </div>
    </section>
  )
}
