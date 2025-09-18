const words = [
  { text: "Machine Learning", imgPath: "/images/ideas.svg" },
  { text: "Deep Learning", imgPath: "/images/concepts.svg" },
  { text: "Reinforcement Learning", imgPath: "/images/designs.svg" },
  { text: "Automation", imgPath: "/images/code.svg" },
  { text: "Games", imgPath: "/images/ideas.svg" },
  { text: "Machine Learning", imgPath: "/images/ideas.svg" },
  { text: "Deep Learning", imgPath: "/images/concepts.svg" },
  { text: "Reinforcement Learning", imgPath: "/images/designs.svg" },
  { text: "Automation", imgPath: "/images/code.svg" },
  { text: "Games", imgPath: "/images/ideas.svg" },
];

const projects = [
  {
    name: "Machine Learning",
    color: "from-royal to-lavender",
    files: [
      {
        name: "Stock Predictor",
        desc: "Predicts stock prices using regression models.",
        image: "https://via.placeholder.com/600x300?text=Stock+Predictor",
        github: "https://github.com/yourusername/stock-predictor",
        live: "https://stock-predictor-demo.netlify.app",
      },
      {
        name: "Spam Classifier",
        desc: "Classifies emails as spam or not spam using Naive Bayes.",
        image: "https://via.placeholder.com/600x300?text=Spam+Classifier",
        github: "https://github.com/yourusername/spam-classifier",
        live: "https://spam-classifier-demo.netlify.app",
      },
      {
        name: "Recommender System",
        desc: "Recommends products using collaborative filtering.",
        image: "https://via.placeholder.com/600x300?text=Recommender+System",
        github: "https://github.com/yourusername/recommender-system",
        live: "https://recommender-demo.netlify.app",
      },
    ],
  },
  {
    name: "Deep Learning",
    color: "from-fuchsia to-coral",
    files: [
      {
        name: "Image Classifier",
        desc: "CNN-based model classifying 10 image categories.",
        image: "https://via.placeholder.com/600x300?text=Image+Classifier",
        github: "https://github.com/yourusername/image-classifier",
        live: "https://image-classifier-demo.netlify.app",
      },
      {
        name: "Object Detection",
        desc: "YOLO-based object detector with live webcam feed.",
        image: "https://via.placeholder.com/600x300?text=Object+Detection",
        github: "https://github.com/yourusername/object-detection",
        live: "https://object-detection-demo.netlify.app",
      },
      {
        name: "GAN Art Generator",
        desc: "Generates abstract art using Generative Adversarial Networks.",
        image: "https://via.placeholder.com/600x300?text=GAN+Art+Generator",
        github: "https://github.com/yourusername/gan-art-generator",
        live: "https://gan-art-demo.netlify.app",
      },
    ],
  },
  {
    name: "Games",
    color: "from-orange to-sand",
    files: [
      {
        name: "Pixel Platformer",
        desc: "2D platformer with retro pixel art and smooth physics.",
        image: "https://via.placeholder.com/600x300?text=Pixel+Platformer",
        github: "https://github.com/yourusername/pixel-platformer",
        live: "https://pixel-platformer-demo.netlify.app",
      },
      {
        name: "Multiplayer Shooter",
        desc: "Fast-paced online FPS game built in Unity.",
        image: "https://via.placeholder.com/600x300?text=Multiplayer+Shooter",
        github: "https://github.com/yourusername/multiplayer-shooter",
        live: "https://shooter-demo.netlify.app",
      },
      {
        name: "Puzzle Quest",
        desc: "Mobile puzzle game with hundreds of handcrafted levels.",
        image: "https://via.placeholder.com/600x300?text=Puzzle+Quest",
        github: "https://github.com/yourusername/puzzle-quest",
        live: "https://puzzle-quest-demo.netlify.app",
      },
    ],
  },
  {
    name: "Web Development",
    color: "from-emerald-600 to-lime-600",
    files: [
      {
        name: "Pixel Platformer",
        desc: "2D platformer with retro pixel art and smooth physics.",
        image: "https://via.placeholder.com/600x300?text=Pixel+Platformer",
        github: "https://github.com/yourusername/pixel-platformer",
        live: "https://pixel-platformer-demo.netlify.app",
      },
      {
        name: "Multiplayer Shooter",
        desc: "Fast-paced online FPS game built in Unity.",
        image: "https://via.placeholder.com/600x300?text=Multiplayer+Shooter",
        github: "https://github.com/yourusername/multiplayer-shooter",
        live: "https://shooter-demo.netlify.app",
      },
      {
        name: "Puzzle Quest",
        desc: "Mobile puzzle game with hundreds of handcrafted levels.",
        image: "https://via.placeholder.com/600x300?text=Puzzle+Quest",
        github: "https://github.com/yourusername/puzzle-quest",
        live: "https://puzzle-quest-demo.netlify.app",
      },
    ],
  },
];

export {
    words,
    projects
}