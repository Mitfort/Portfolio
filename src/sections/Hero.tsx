import Background from "../components/Background"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"

const Hero = () => {
  return (
    <section id="home" className="flex items-start justify-center md:items-start md:justfiy-start min-h-screen overflow-hidden c-space">
        <HeroText/>
        <Background/>
        <ParallaxBackground/>
    </section>
  )
}
export default Hero