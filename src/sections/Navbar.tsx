import { motion } from "motion/react";
import { useState } from "react"
function Navigation()
{
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <a href="#home" className="nav-link">
                    Home
                </a>
            </li>
            <li className="nav-li">
                <a href="#about" className="nav-link">
                    About
                </a>
            </li>
            <li className="nav-li">
                <a href="#projects" className="nav-link">
                    Projects
                </a>
            </li>
            <li className="nav-li">
                <a href="#contact" className="nav-link">
                    Contact
                </a>
            </li>
        </ul>
    )
}


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a 
                    href="/"
                    className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
                >
                    Mateusz Poszelężny
                </a>

                <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="menu" className="w=6 h-6"/>
                </button>

                <nav className="hidden sm:flex">
                    <Navigation/>
                </nav>

            </div>
        </div>

        {isOpen &&
            <div className="block overflow-hidden text-center sm:hidden">
                <motion.nav className="pb-5" 
                    initial={{opacity:0, y:-10}}
                    animate={{opacity:1, y:0}}
                    style={{maxHeight:"100vh"}}
                    transition={{duration: 0.5}}
                >
                    <Navigation/>
                </motion.nav>
            </div>
        }
    </div>
  )
}
export default Navbar