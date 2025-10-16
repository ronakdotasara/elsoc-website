import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './App.css';


// Enhanced Loader Component with Modern Theme
const Loader = () => {
  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-aurora-bg">
        <div className="loader-blob loader-blob-1"></div>
        <div className="loader-blob loader-blob-2"></div>
        <div className="loader-blob loader-blob-3"></div>
      </div>
      
      <div className="loader-content">
        <motion.div
          className="loader-icon"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚡
        </motion.div>
        
        <motion.h1 
          className="loader-text gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ELSOC
        </motion.h1>
        
        <motion.p 
          className="loader-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Electrical Society
        </motion.p>
        
        <div className="loader-spinner-wrapper">
          <motion.div 
            className="loader-spinner"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          ></motion.div>
        </div>
        
        <motion.p
          className="loader-loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading Excellence...
        </motion.p>
      </div>
    </motion.div>
  );
};


// Enhanced 404 Not Found Component
const NotFound = () => {
  return (
    <motion.div 
      className="not-found"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="not-found-content glass-morphism">
        <div className="not-found-glow"></div>
        
        <motion.div
          className="not-found-icon"
          animate={{ 
            rotate: [0, 5, -5, 0],
            y: [0, -8, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🔌
        </motion.div>
        
        <motion.h1 
          className="not-found-title gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="not-found-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Circuit Disconnected
        </motion.h2>
        
        <motion.p 
          className="not-found-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The page you're looking for seems to have lost its connection. Let's get you back on track.
        </motion.p>
        
        <motion.a 
          href="/" 
          className="btn-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Return Home</span>
          <span className="btn-arrow">→</span>
        </motion.a>
      </div>
    </motion.div>
  );
};


// Enhanced Back to Top Button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="back-to-top glass-morphism"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          <span className="back-to-top-icon">↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};


// Scroll Progress Bar Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div 
      className="scroll-progress"
      style={{
        scaleX: scrollProgress / 100,
      }}
      initial={{ scaleX: 0 }}
    />
  );
};


// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1]
    }
  }
};


// Animated Routes Wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <About />
          </motion.div>
        } />
        <Route path="/events" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Events />
          </motion.div>
        } />
        <Route path="/projects" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Projects />
          </motion.div>
        } />
        <Route path="/team" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Team />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Contact />
          </motion.div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};


// Cursor Glow Effect Component
const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div 
      className="cursor-glow" 
      animate={{ 
        left: mousePosition.x, 
        top: mousePosition.y,
        opacity: isMoving ? 0.15 : 0.08
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
    />
  );
};


// ✅ NEW: Scroll to Top Component
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll, no animation
    });
  }, [location.pathname]);

  return null;
};


function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });
  
  // State management to prevent sidebar/chatbot overlap
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    
    localStorage.setItem('theme', theme);
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content', 
        theme === 'dark' ? '#0a0118' : '#f8f9fa'
      );
    }
  }, [theme]);

  // Close one when other opens (prevent overlap)
  useEffect(() => {
    if (isChatBotOpen && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isChatBotOpen]);

  useEffect(() => {
    if (isMobileMenuOpen && isChatBotOpen) {
      setIsChatBotOpen(false);
    }
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  if (loading) {
    return (
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
    );
  }

  return (
    <Router>
      <div className="App">
        <div className="app-aurora-bg">
          <motion.div 
            className="aurora-blob aurora-blob-1"
            animate={{
              x: [0, 30, -30, 0],
              y: [0, 50, 25, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="aurora-blob aurora-blob-2"
            animate={{
              x: [0, -40, 40, 0],
              y: [0, 30, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="aurora-blob aurora-blob-3"
            animate={{
              x: [0, 50, -25, 0],
              y: [0, -40, 40, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        <CursorGlow />
        <ScrollProgress />
        <ScrollToTop /> {/* ✅ ADDED: Scroll to top on route change */}

        <Navbar 
          theme={theme} 
          toggleTheme={toggleTheme}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        
        <Footer />
        
        <ChatBot 
          isOpen={isChatBotOpen}
          setIsOpen={setIsChatBotOpen}
        />
        
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
