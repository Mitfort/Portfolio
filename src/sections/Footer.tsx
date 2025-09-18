
import { Github, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/90 border-t border-storm mt-20">
      <div className="c-space py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-xl font-bold text-neutral-400 hover:text-white cursor-pointer transition-colors">
          <a href="#home">Mateusz Poszelężny</a>
        </div>

        <div className="flex gap-6 text-neutral-400">
          <a href="https://github.com/Mitfort" target="_blank" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mateusz-poszelężny-b7a6812a9/" target="_blank" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-white transition-colors">
            <X size={20} />
          </a>
        </div>

        <div className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Mateusz Poszelężny. All rights reserved.
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-royal via-lavender to-fuchsia w-full"></div>
    </footer>
  );
};

export default Footer;