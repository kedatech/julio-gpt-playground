import Link from 'next/link'
import Image from 'next/image'

export const Back = () => {
  return (
    <Link href="/" className="opacity-20 flex items-center mb- hover:opacity-50 cursor-pointer">
      <Image className="mr-2" width={25} height={25} src="/icons/back.svg" alt="nack icon" />
      <p className="text-white">Regresar</p>
    </Link>
  )
}
