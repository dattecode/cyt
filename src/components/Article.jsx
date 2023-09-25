import React from "react";
import { motion } from "framer-motion";
import "../styles/articleCss.css";

const Article = ({ phrase, img }) => {
  //animated
  const textAnimate = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };
  
  return (
    <article className="containerArticle">
      <section className="imgText">
        <img src={img} className="imgGif" />
      </section>
      <motion.section
        className="containerText"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={textAnimate}
      >
        <div className="text">
          <p>{phrase.frase}</p>
        </div>
        <div className="author">
          <h4>Autor: {phrase.autor}</h4>
        </div>
      </motion.section>
    </article>
  );
};

export default Article;
