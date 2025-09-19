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
        name: "Cardiomegally classifier",
        desc: "Based on research, group project that reads expected data from the chest segmentated images and predicts if patient has cardiomegally or not",
        image: "https://via.placeholder.com/600x300?text=Stock+Predictor",
        github: "",
        live: "",
      },
      {
        name: "IBM Data Science Specialization",
        desc: "Course that was my beginning with machine-learning and data analysis, HIGHLY RECOMENDED :D",
        image: "https://via.placeholder.com/600x300?text=Stock+Predictor",
        github: "https://github.com/Mitfort/DataScience",
        live: "",
      },
    ],
  },
  {
    name: "Deep Learning",
    color: "from-fuchsia to-coral",
    files: [
      {
        name: "Flappy-Bird agent",
        desc: "DQN Agent trained to play flappybird gymnasium environment",
        image: "https://via.placeholder.com/600x300?text=Image+Classifier",
        github: "",
        live: "/assets/projects/video/FlappyBird.mp4",
      },
      {
        name: "Connect4 2 bots competitions",
        desc: "Firstly one bot was trained to know the rules of the game, then him and his copy played together.",
        image: "https://via.placeholder.com/600x300?text=Object+Detection",
        github: "",
        live: "/assets/projects/video/Connect4.mp4",
      },
    ],
  },
  {
    name: "Games",
    color: "from-orange to-sand",
    files: [
      {
        name: "City Runner",
        desc: "2D platformer",
        image: "https://via.placeholder.com/600x300?text=Pixel+Platformer",
        github: "",
        live: "/assets/projects/video/Runner.mp4",
      },
      {
        name: "Stash Crush",
        desc: "Candy crush based game",
        image: "https://via.placeholder.com/600x300?text=Multiplayer+Shooter",
        github: "",
        live: "/assets/projects/video/Beczka.mp4",
      },
    ],
  },
  {
    name: "Web Development",
    color: "from-emerald-600 to-lime-600",
    files: [
      {
        name: "Portfolio",
        desc: "This website is an example :D",
        image: "https://via.placeholder.com/600x300?text=Pixel+Platformer",
        github: "https://github.com/Mitfort/Portfolio",
        live: "",
      },
      {
        name: "AI-MED Website",
        desc: "Cooperation on creating a website for students science group",
        image: "https://via.placeholder.com/600x300?text=Multiplayer+Shooter",
        github: "",
        live: "https://aimed.agh.edu.pl/",
      },
    ],
  },
];

const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
];

export {
    words,
    projects,
    quotes
}