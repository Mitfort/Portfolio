import Badge from "../components/Badge";
import RandomQuote from "../components/RandomQuote";
import ProfileImg from "/assets/Profile.jpg"

const About = () => {
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        <div className="grid-default-color grid-1 relative group overflow-hidden flex items-end">
          <img
            src={ProfileImg}
            alt="profile"
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 transition"
          />
          <div className="relative z-10 p-4">
            <h3 className="text-xl font-bold">Hi, I'm Matthew</h3>
            <p className="text-3xl text-neutral-200">
              Developer passionate about creating new solutions
            </p>
          </div>
        </div>

        <div className="grid-default-color grid-2 flex flex-col justify-center p-6">
          <h3 className="font-semibold text-lg mb-2">Tech Stack</h3>
          <ul className="flex flex-wrap gap-2 text-sm text-neutral-300">
            <li className="px-2 py-1 bg-black/30 rounded-md">Pytorch</li>
            <li className="px-2 py-1 bg-black/30 rounded-md">Python</li>
            <li className="px-2 py-1 bg-black/30 rounded-md">TypeScript</li>
            <li className="px-2 py-1 bg-black/30 rounded-md">React</li>
          </ul>
        </div>

        <div className="grid-black-color grid-3 flex flex-col justify-center p-6">
          <h3 className="font-semibold text-lg mb-2">Experience</h3>
          <Badge name='IBM DATA SCIENCE' from="COURSERA" link="https://coursera.org/share/d0dcae8608b638f5f5f8481c65bcb8e5"/>
        </div>

        <div className="grid-special-color grid-4 flex flex-col justify-center p-6">
          <h3 className="font-semibold text-lg mb-2">Fun Facts</h3>
          <p className="text-sm text-neutral-300">
            🎮 I play video games <br /> 🏐 I love playing volleyball <br /> 🧠 Constantly
            learning new things
          </p>
        </div>

        <div className="grid-default-color grid-5 flex items-center justify-center text-center p-6">
          <blockquote className="italic text-neutral-300">
            <RandomQuote/>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
export default About;