import React, { useState, useEffect } from "react";
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

const APPROVED_KEY = "sparkathon_approved_ideas";
const PENDING_KEY  = "sparkathon_pending_ideas";
const ADMIN_PASSWORD = "12345678";

const load = (key) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const SparkathonProblemStatements = () => {
  const [current, setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1);

  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDesc, setIdeaDesc]   = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [approvedIdeas, setApprovedIdeas] = useState(() => load(APPROVED_KEY));
  const [pendingIdeas,  setPendingIdeas]  = useState(() => load(PENDING_KEY));

  // Admin state
  const [adminPanelOpen,      setAdminPanelOpen]      = useState(false);
  const [adminAuthenticated,  setAdminAuthenticated]  = useState(false);
  const [passwordInput,       setPasswordInput]       = useState("");
  const [passwordError,       setPasswordError]       = useState(false);
  const [adminTab,            setAdminTab]            = useState("pending"); // "pending" | "approved"

  // Shift + A
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key === "A") {
        e.preventDefault();
        setAdminPanelOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Navigation
  const goNext = () => {
    if (current < images.length - 1) { setDirection(1); setCurrent((p) => p + 1); }
  };
  const goPrev = () => {
    if (current > 0) { setDirection(-1); setCurrent((p) => p - 1); }
  };

  // Submit idea → goes to pending
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ideaTitle.trim() || !ideaDesc.trim()) return;

    const newIdea = {
      id: Date.now(),
      title: ideaTitle.trim(),
      description: ideaDesc.trim(),
      timestamp: new Date().toLocaleDateString("en-IN", {
        day: "numeric", month: "short", year: "numeric",
      }),
    };

    const updated = [newIdea, ...pendingIdeas];
    setPendingIdeas(updated);
    save(PENDING_KEY, updated);
    setIdeaTitle("");
    setIdeaDesc("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Admin login
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setAdminAuthenticated(true);
      setPasswordError(false);
      setPasswordInput("");
    } else {
      setPasswordError(true);
      setPasswordInput("");
    }
  };

  const handleAdminLogout = () => {
    setAdminAuthenticated(false);
    setAdminPanelOpen(false);
    setPasswordInput("");
    setPasswordError(false);
  };

  // Approve
  const handleApprove = (idea) => {
    const newPending  = pendingIdeas.filter((i) => i.id !== idea.id);
    const newApproved = [idea, ...approvedIdeas];
    setPendingIdeas(newPending);
    setApprovedIdeas(newApproved);
    save(PENDING_KEY,  newPending);
    save(APPROVED_KEY, newApproved);
  };

  // Reject (just removes from pending)
  const handleReject = (id) => {
    const newPending = pendingIdeas.filter((i) => i.id !== id);
    setPendingIdeas(newPending);
    save(PENDING_KEY, newPending);
  };

  // Delete approved
  const handleDeleteApproved = (id) => {
    const newApproved = approvedIdeas.filter((i) => i.id !== id);
    setApprovedIdeas(newApproved);
    save(APPROVED_KEY, newApproved);
  };

  const variants = {
    enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
    exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, transition: { duration: 0.25 } }),
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
          onClick={goPrev} disabled={current === 0}
          whileHover={{ scale: current === 0 ? 1 : 1.1 }}
          whileTap={{ scale: current === 0 ? 1 : 0.95 }}
        >‹</motion.button>

        <div className="ps-image-wrapper">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={current}
              src={images[current]}
              alt={`Problem Statement ${current + 1}`}
              className="ps-image"
              custom={direction}
              variants={variants}
              initial="enter" animate="center" exit="exit"
            />
          </AnimatePresence>
        </div>

        <motion.button
          className={`ps-arrow ps-arrow-right ${current === images.length - 1 ? "ps-arrow-disabled" : ""}`}
          onClick={goNext} disabled={current === images.length - 1}
          whileHover={{ scale: current === images.length - 1 ? 1 : 1.1 }}
          whileTap={{ scale: current === images.length - 1 ? 1 : 0.95 }}
        >›</motion.button>
      </div>

      {/* Dots */}
      <div className="ps-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`ps-dot ${i === current ? "ps-dot-active" : ""}`}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
          />
        ))}
      </div>

      <div className="ps-divider" />

      {/* Submit Idea */}
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
            type="submit" className="ps-idea-submit"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            disabled={!ideaTitle.trim() || !ideaDesc.trim()}
          >
            Submit Idea
          </motion.button>
        </form>

        <AnimatePresence>
          {submitted && (
            <motion.p
              className="ps-success"
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            >
              ✅ Your idea has been submitted for review!
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Approved Community Ideas */}
      {approvedIdeas.length > 0 && (
        <div className="ps-ideas-list">
          <h3 className="ps-ideas-list-title">🌐 Community Ideas</h3>
          <div className="ps-ideas-grid">
            <AnimatePresence>
              {approvedIdeas.map((idea) => (
                <motion.div
                  key={idea.id} className="ps-idea-card"
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
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

      {/* Admin Modal */}
      <AnimatePresence>
        {adminPanelOpen && (
          <motion.div
            className="ps-admin-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) setAdminPanelOpen(false); }}
          >
            <motion.div
              className="ps-admin-modal"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {!adminAuthenticated ? (
                <>
                  <h3 className="ps-admin-title">🔐 Admin Access</h3>
                  <p className="ps-admin-subtext">Enter the admin password to manage submissions.</p>
                  <form className="ps-admin-form" onSubmit={handleAdminLogin}>
                    <input
                      type="password" className="ps-idea-input"
                      placeholder="Password..." value={passwordInput}
                      onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
                      autoFocus
                    />
                    {passwordError && <p className="ps-admin-error">❌ Incorrect password. Try again.</p>}
                    <div className="ps-admin-actions">
                      <motion.button
                        type="submit" className="ps-idea-submit"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        disabled={!passwordInput.trim()}
                      >Login</motion.button>
                      <motion.button
                        type="button" className="ps-admin-cancel"
                        onClick={() => setAdminPanelOpen(false)}
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      >Cancel</motion.button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <h3 className="ps-admin-title">⚙️ Admin Panel</h3>

                  {/* Admin Tabs */}
                  <div className="ps-admin-tabs">
                    <button
                      className={`ps-admin-tab ${adminTab === "pending" ? "ps-admin-tab-active" : ""}`}
                      onClick={() => setAdminTab("pending")}
                    >
                      Pending
                      {pendingIdeas.length > 0 && (
                        <span className="ps-admin-badge">{pendingIdeas.length}</span>
                      )}
                    </button>
                    <button
                      className={`ps-admin-tab ${adminTab === "approved" ? "ps-admin-tab-active" : ""}`}
                      onClick={() => setAdminTab("approved")}
                    >
                      Approved
                      {approvedIdeas.length > 0 && (
                        <span className="ps-admin-badge ps-admin-badge-green">{approvedIdeas.length}</span>
                      )}
                    </button>
                  </div>

                  {/* Pending Tab */}
                  {adminTab === "pending" && (
                    <div className="ps-admin-list">
                      {pendingIdeas.length === 0 ? (
                        <p className="ps-admin-empty">No pending submissions.</p>
                      ) : (
                        pendingIdeas.map((idea) => (
                          <div key={idea.id} className="ps-admin-item">
                            <div className="ps-admin-item-body">
                              <p className="ps-admin-item-title">{idea.title}</p>
                              <p className="ps-admin-item-desc">{idea.description}</p>
                              <p className="ps-admin-item-date">{idea.timestamp}</p>
                            </div>
                            <div className="ps-admin-item-actions">
                              <motion.button
                                className="ps-admin-approve"
                                onClick={() => handleApprove(idea)}
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                              >✅ Approve</motion.button>
                              <motion.button
                                className="ps-admin-reject"
                                onClick={() => handleReject(idea.id)}
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                              >❌ Reject</motion.button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  {/* Approved Tab */}
                  {adminTab === "approved" && (
                    <div className="ps-admin-list">
                      {approvedIdeas.length === 0 ? (
                        <p className="ps-admin-empty">No approved ideas yet.</p>
                      ) : (
                        approvedIdeas.map((idea) => (
                          <div key={idea.id} className="ps-admin-item">
                            <div className="ps-admin-item-body">
                              <p className="ps-admin-item-title">{idea.title}</p>
                              <p className="ps-admin-item-desc">{idea.description}</p>
                              <p className="ps-admin-item-date">{idea.timestamp}</p>
                            </div>
                            <div className="ps-admin-item-actions">
                              <motion.button
                                className="ps-admin-reject"
                                onClick={() => handleDeleteApproved(idea.id)}
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                              >🗑️ Remove</motion.button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  <div className="ps-admin-actions">
                    <motion.button
                      className="ps-admin-cancel" onClick={handleAdminLogout}
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >Logout</motion.button>
                    <motion.button
                      className="ps-idea-submit" onClick={() => setAdminPanelOpen(false)}
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >Close</motion.button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default SparkathonProblemStatements;