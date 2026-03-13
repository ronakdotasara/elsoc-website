import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProblemStatements.css";

const images = [
  "/img/ProbStatement/1.png",
  "/img/ProbStatement/2.png",
  "/img/ProbStatement/3.png",
  "/img/ProbStatement/4.png",
  "/img/ProbStatement/5.png",
  "/img/ProbStatement/6.png",
  "/img/ProbStatement/7.png",
  "/img/ProbStatement/8.png",
  "/img/ProbStatement/9.png",
  "/img/ProbStatement/10.png",
  "/img/ProbStatement/11.png",
  "/img/ProbStatement/12.png",
  "/img/ProbStatement/13.png",
  "/img/ProbStatement/14.png",
  "/img/ProbStatement/15.png",
  "/img/ProbStatement/16.png",
  "/img/ProbStatement/17.png",
  "/img/ProbStatement/18.png",
];

const SparkathonProblemStatements = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    if (current < images.length - 1) {
      setDirection(1);
      setCurrent((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((prev) => prev - 1);
    }
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, transition: { duration: 0.25 } }),
  };

  return (
    <div className="ps-page">
      {/* Header */}
      <div className="ps-header">
        <h1 className="ps-title">Sparkathon Problem Statements</h1>
        <p className="ps-counter">{current + 1} / {images.length}</p>
      </div>

      {/* Viewer */}
      <div className="ps-viewer">

        {/* Prev Button */}
        <motion.button
          className={`ps-arrow ps-arrow-left ${current === 0 ? "ps-arrow-disabled" : ""}`}
          onClick={goPrev}
          disabled={current === 0}
          whileHover={{ scale: current === 0 ? 1 : 1.1 }}
          whileTap={{ scale: current === 0 ? 1 : 0.95 }}
        >
          ‹
        </motion.button>

        {/* Image */}
        <div className="ps-image-wrapper">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={current}
              src={images[current]}
              alt={`Problem Statement ${current + 1}`}
              className="ps-image"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <motion.button
          className={`ps-arrow ps-arrow-right ${current === images.length - 1 ? "ps-arrow-disabled" : ""}`}
          onClick={goNext}
          disabled={current === images.length - 1}
          whileHover={{ scale: current === images.length - 1 ? 1 : 1.1 }}
          whileTap={{ scale: current === images.length - 1 ? 1 : 0.95 }}
        >
          ›
        </motion.button>
      </div>

      {/* Dot Indicators */}
      <div className="ps-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`ps-dot ${i === current ? "ps-dot-active" : ""}`}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SparkathonProblemStatements;