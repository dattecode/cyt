import { useState } from "react";
import phrases from "./db/phrase.json";
import { randomElement } from "./utils/randomElements";
import "./App.css";
import Article from "./components/Article";
import arrImgs from "./utils/imgs";
import Button from "./components/Button";
import { motion } from "framer-motion";

function App() {
  //UseState
  const [phrase, setPhrase] = useState(randomElement(phrases));
  const [img, setImg] = useState(randomElement(arrImgs));

  // logic
  const handleRandomClick = () => {
    setPhrase(randomElement(phrases));
    setImg(randomElement(arrImgs));
  };

  //animated
  const titleAnimated = {
    hover: {
      scale: 1.3,
    },
  };
  return (
    <main className="appMain">
      <motion.h1 className="title" whileHover="hover" variants={titleAnimated}>
        Ciencia y Tecnologia
      </motion.h1>
      <Article phrase={phrase} img={img} key={Math.random()} />
      <section className="btn container">
        <Button handleRandomClick={handleRandomClick} />
      </section>
    </main>
  );
}

export default App;
