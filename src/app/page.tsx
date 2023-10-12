import Img from 'next/image'
import { Device } from './components/Device'
import { Hero } from './components/Hero'

export default function Home() {
  return (
    <section className="landing-container">
      <Hero />
      <Device />
    </section>
  )
}
