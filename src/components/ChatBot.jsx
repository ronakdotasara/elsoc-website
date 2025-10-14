import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getBotResponse } from '../chatbotLogic';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: 'Hello! I\'m the ELSOC Assistant. How can I help you today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage = {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const quickQuestions = [
    'What is ELSOC?',
    'How can I join?',
    'Upcoming events?',
    'Contact information'
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-header-content">
                <span className="chatbot-icon">🤖</span>
                <div>
                  <h3>ELSOC Assistant</h3>
                  <span className="chatbot-status">Online</span>
                </div>
              </div>
              <button
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
              >
                ✕
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.isBot ? 'bot' : 'user'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-content">
                    <p>{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="message bot"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="message-content typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="quick-questions">
                {quickQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    className="quick-question"
                    onClick={() => handleQuickQuestion(question)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            )}

            <form className="chatbot-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                className="chatbot-input"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
              />
              <button
                type="submit"
                className="chatbot-send"
                disabled={isTyping || !inputValue.trim()}
                aria-label="Send message"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { scale: 0 } : { scale: 1 }}
      >
        💬
      </motion.button>
    </>
  );
};

export default ChatBot;
