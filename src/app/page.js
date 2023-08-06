import Banner from '@/components/Banner'
import Consult from '@/components/Consult'
import Navbar from '@/components/Navbar'
import ShowGoals from '@/components/showGoals'
import Image from 'next/image'

export default function Home() {
  return (
    <div>

      <Banner></Banner>
      <ShowGoals></ShowGoals>
      <Consult></Consult>


    </div>
  )
}
