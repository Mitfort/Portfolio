import { useEffect, useRef } from "react";
// import BackgroundIMG from '/assets/background/background.png'
// import MiddleGroundIMG from '/assets/background/middleground.png'
import MountainIMG from '/assets/background/mountain-1.png'
import PlanetsIMG from '/assets/background/planets.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Background = () => {
  const layersRef = useRef<HTMLDivElement[]>([]);

   useGSAP(() => {
        gsap.fromTo('.background > *',
            {y:50, opacity:0},
            {y:0, opacity:1, stagger:0.5, duration:1, ease:"power2.inOut"}
        )
    })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      layersRef.current.forEach((layer, index) => {
        const speed = (index + 1) * 0.15;
        layer.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="absolute inset-0 w-full h-screen overflow-hidden -z-10 background">
      {/* <div
        ref={(el) => {
            if(el)
            {
                layersRef.current[0] = el!
            }
        }}
        className="absolute inset-0"
        style={{ backgroundImage: `url(${BackgroundIMG})`, backgroundSize: "cover" }}
      /> */}
      <div
        ref={(el) => {
            if(el)
            {
                layersRef.current[1] = el!
            }
        }}
        className="absolute inset-0"
        style={{ backgroundImage: `url(${PlanetsIMG})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom", backgroundSize: "cover" }}
      />
      <div
        ref={(el) => {
            if(el)
            {
                layersRef.current[2] = el!
            }
        }}
        className="absolute inset-0"
        style={{ backgroundImage: `url(${MountainIMG})`, backgroundRepeat: "no-repeat", backgroundPosition: "top", backgroundSize: "cover" }}
      />
    </section>
  );
};

export default Background;
