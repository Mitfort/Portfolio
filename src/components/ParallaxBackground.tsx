import { motion } from "framer-motion";

const ParallaxBackground = () => {
  return (
    <section className="absolute inset-0 overflow-hidden -z-50">
      {/* Gradient Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-[#030412] to-black"></div>

      {/* Floating stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-aqua rounded-lg"
          style={{
            width: `${Math.random() * 60 + 40}px`,
            height: `${Math.random() * 60 + 40}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            rotate: Math.random() * 360,
            opacity: 0.3,
          }}
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </section>
  );
};

export default ParallaxBackground;