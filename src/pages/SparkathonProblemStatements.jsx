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

const STORAGE_KEY = "sparkathon_community_ideas";

const SparkathonProblemStatements = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDesc, setIdeaDesc] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ideas, setIdeas] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ideaTitle.trim() || !ideaDesc.trim()) return;

    const newIdea = {
      id: Date.now(),
      title: ideaTitle.trim(),
      description: ideaDesc.trim(),
      timestamp: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    const updated = [newIdea, ...ideas];
    setIdeas(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setIdeaTitle("");
    setIdeaDesc("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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

      {/* Image Viewer */}
      <div className="ps-viewer">
        <motion.button
          className={`ps-arrow ps-arrow-left ${current === 0 ? "ps-arrow-disabled" : ""}`}
          onClick={goPrev}
          disabled={current === 0}
          whileHover={{ scale: current === 0 ? 1 : 1.1 }}
          whileTap={{ scale: current === 0 ? 1 : 0.95 }}
        >
          ‹
        </motion.button>

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

      {/* Divider */}
      <div className="ps-divider" />

      {/* Submit Your Idea */}
      <div className="ps-idea-section">
        <h2 className="ps-idea-heading">💡 Got a Smart Energy Idea?</h2>
        <p className="ps-idea-subtext">
          Have your own problem statement related to smart energy? Share it with the community!
        </p>

        <form className="ps-idea-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="ps-idea-input"
            placeholder="Idea title..."
            value={ideaTitle}
            onChange={(e) => setIdeaTitle(e.target.value)}
            maxLength={120}
          />
          <textarea
            className="ps-idea-input ps-idea-textarea"
            placeholder="Describe your idea briefly..."
            value={ideaDesc}
            onChange={(e) => setIdeaDesc(e.target.value)}
            maxLength={500}
            rows={4}
          />
          <motion.button
            type="submit"
            className="ps-idea-submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!ideaTitle.trim() || !ideaDesc.trim()}
          >
            Submit Idea
          </motion.button>
        </form>

        <AnimatePresence>
          {submitted && (
            <motion.p
              className="ps-success"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              ✅ Your idea has been shared!
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Community Ideas List */}
      {ideas.length > 0 && (
        <div className="ps-ideas-list">
          <h3 className="ps-ideas-list-title">🌐 Community Ideas</h3>
          <div className="ps-ideas-grid">
            <AnimatePresence>
              {ideas.map((idea) => (
                <motion.div
                  key={idea.id}
                  className="ps-idea-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="ps-idea-card-icon">⚡</span>
                  <div className="ps-idea-card-body">
                    <p className="ps-idea-card-title">{idea.title}</p>
                    <p className="ps-idea-card-desc">{idea.description}</p>
                    <p className="ps-idea-card-date">{idea.timestamp}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

    </div>
  );
};

export default SparkathonProblemStatements;