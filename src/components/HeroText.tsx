import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "../constants";

const HeroText = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text > *',
            {y:50, opacity:0},
            {y:0, opacity:1, stagger:0.5, duration:1, ease:"power2.inOut"}
        )
    })

  return (
    <header className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop */}
        <div className="flex-col hidden md:flex c-space hero-text">
            <h1 className="text-4xl font-medium">
                Hi, I’m Matthew a developer for...
            </h1>

            <span className="slide overflow-hidden">
                <span className="wrapper">
                    {words.map((word,idx) => (
                        <span key={idx.toString() + "word"}
                            className="flex items-center md:gap-3 gap-1 pb-2 font-medium text-4xl text-amber-300">
                            {word.text}
                        </span>
                    ))}
                </span>
            </span>

            <p className="text-4xl font-medium text-neutral-300">
                Let’s build smart systems and AI together.
            </p>
        </div>
        {/* Mobile */}
        <div className="flex flex-col space-y-6 md:hidden">
            <p className="text-4xl font-medium">
                Hi, I’m Matthew a developer for...
            </p>
            <span className="slide overflow-hidden">
                <span className="wrapper">
                    {words.map((word,idx) => (
                        <span key={idx.toString() + "word"}
                            className="flex justify-center items-center md:gap-3 gap-1 pb-2 font-medium text-4xl text-amber-300">
                            {word.text}
                        </span>
                    ))}
                </span>
            </span>
            <p className="text-4xl font-black text-neutral-300">
                Let’s build smart systems and game AI together.
            </p>

        </div>
    </header>
  )
}
export default HeroText