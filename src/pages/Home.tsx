import HeroSection from '../components/home/HeroSection'
import WhoWeAre from '../components/home/WhoWeAre'
import ServicesSection from '../components/home/ServicesSection'
import RequestService from '../components/home/RequestService'
import HomeContact from '../components/home/HomeContact'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <ServicesSection />
      <RequestService />
      <HomeContact />
    </>
  )
}
