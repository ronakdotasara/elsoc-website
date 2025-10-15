import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getBotResponse } from '../chatbotLogic';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: '👋 Hello! I\'m the ELSOC AI Assistant. How can I help you explore our electrical engineering society today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    const userMessage = {
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowSuggestions(false);

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage = {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const quickQuestions = [
    { icon: '❓', text: 'What is ELSOC?' },
    { icon: '🎯', text: 'How can I join?' },
    { icon: '📅', text: 'Upcoming events?' },
    { icon: '📞', text: 'Contact information' },
    { icon: '👥', text: 'Meet the team' },
    { icon: '🚀', text: 'Our projects' }
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        text: '👋 Hello! I\'m the ELSOC AI Assistant. How can I help you explore our electrical engineering society today?',
        isBot: true,
        timestamp: new Date()
      }
    ]);
    setShowSuggestions(true);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-container glass-morphism"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-header-content">
                <div className="chatbot-avatar">
                  <motion.span 
                    className="chatbot-icon"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ⚡
                  </motion.span>
                  <div className="status-indicator"></div>
                </div>
                <div className="chatbot-info">
                  <h3 className="chatbot-title">ELSOC Assistant</h3>
                  <span className="chatbot-status">
                    <span className="status-dot"></span>
                    Online • Always here to help
                  </span>
                </div>
              </div>
              <div className="chatbot-actions">
                <motion.button
                  className="action-btn"
                  onClick={handleClearChat}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  title="Clear chat"
                >
                  🔄
                </motion.button>
                <motion.button
                  className="action-btn close-btn"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close chatbot"
                >
                  ✕
                </motion.button>
              </div>
            </div>

            <div className="chatbot-messages">
              <div className="messages-wrapper">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`message-group ${message.isBot ? 'bot' : 'user'}`}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {message.isBot && (
                      <div className="message-avatar">
                        <span>⚡</span>
                      </div>
                    )}
                    <div className="message-wrapper">
                      <div className={`message ${message.isBot ? 'bot' : 'user'}`}>
                        <div className="message-content">
                          <p>{message.text}</p>
                        </div>
                      </div>
                      <span className="message-time">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    className="message-group bot"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="message-avatar">
                      <span>⚡</span>
                    </div>
                    <div className="message-wrapper">
                      <div className="message bot">
                        <div className="message-content typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>

            {showSuggestions && messages.length === 1 && (
              <motion.div
                className="quick-questions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="suggestions-header">
                  <span className="suggestions-icon">💡</span>
                  <span className="suggestions-title">Quick Questions</span>
                </div>
                <div className="quick-questions-grid">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      className="quick-question glass-morphism"
                      onClick={() => handleQuickQuestion(question.text)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="question-icon">{question.icon}</span>
                      <span className="question-text">{question.text}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="chatbot-input-container">
              <form className="chatbot-input-form" onSubmit={handleSendMessage}>
                <div className="input-wrapper">
                  <input
                    ref={inputRef}
                    type="text"
                    className="chatbot-input"
                    placeholder="Ask me anything about ELSOC..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isTyping}
                    maxLength={500}
                  />
                  <motion.button
                    type="submit"
                    className="chatbot-send"
                    disabled={isTyping || !inputValue.trim()}
                    aria-label="Send message"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isTyping ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        ⏳
                      </motion.span>
                    ) : (
                      <span className="send-icon">➤</span>
                    )}
                  </motion.button>
                </div>
                <div className="input-footer">
                  <span className="input-hint">
                    Press Enter to send • {inputValue.length}/500
                  </span>
                </div>
              </form>
            </div>

            <div className="chatbot-footer">
              <span className="powered-by">
                Powered by <span className="gradient-text">ELSOC AI</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="chatbot-toggle glass-morphism"
            onClick={() => setIsOpen(true)}
            aria-label="Open chatbot"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.span
              className="toggle-icon"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💬
            </motion.span>
            <motion.div
              className="notification-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            >
              <span>1</span>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;