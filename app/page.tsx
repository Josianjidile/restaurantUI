import Image from 'next/image'
import Slider from './componets/Slider'
import Featured from './componets/Featured'
import Offer from './componets/Offer'

export default function Home() {
  return (
  <main>
   <Slider/>
   <Featured/>
   <Offer/>
  </main>
  )
}
