const faqDatabase = {
  greetings: {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      'Hello! Welcome to ELSOC. How can I assist you today?',
      'Hi there! I\'m here to help you with any questions about ELSOC.',
      'Greetings! Feel free to ask me anything about our society.'
    ]
  },
  
  about: {
    keywords: ['what is elsoc', 'about elsoc', 'tell me about', 'who are you', 'what do you do'],
    responses: [
      'ELSOC (Electrical Society) is a government-recognized technical society at NIT Hamirpur. We focus on fostering innovation, technical excellence, and leadership in electrical engineering and related fields.',
      'ELSOC is the premier technical society for electrical engineering students at NIT Hamirpur. We organize workshops, seminars, competitions, and projects to enhance technical skills and knowledge.'
    ]
  },
  
  join: {
    keywords: ['how to join', 'membership', 'become member', 'join elsoc', 'registration'],
    responses: [
      'To join ELSOC, you can fill out the membership form available on our website during the recruitment period. We typically recruit new members at the beginning of each semester. Stay tuned to our social media for updates!',
      'Membership applications are open at the start of each semester. Visit our Contact page for more information or reach out to us at elsoc@nith.ac.in.'
    ]
  },
  
  events: {
    keywords: ['events', 'upcoming events', 'workshops', 'seminars', 'activities', 'competitions'],
    responses: [
      'ELSOC organizes various technical events throughout the year including workshops, hackathons, guest lectures, and technical competitions. Check our Events page for the latest updates on upcoming activities!',
      'We host regular events like technical workshops, coding competitions, project exhibitions, and guest speaker sessions. Visit the Events section to see what\'s coming up!'
    ]
  },
  
  projects: {
    keywords: ['projects', 'what projects', 'technical projects', 'innovations'],
    responses: [
      'ELSOC members work on cutting-edge projects in areas like IoT, robotics, automation, renewable energy, and embedded systems. Visit our Projects page to explore our latest innovations!',
      'Our society encourages hands-on learning through various technical projects. Members collaborate on innovative solutions in electrical engineering, electronics, and related technologies.'
    ]
  },
  
  contact: {
    keywords: ['contact', 'email', 'phone', 'reach', 'address', 'location'],
    responses: [
      'You can reach us at:\n📧 Email: elsoc@nith.ac.in\n📞 Phone: +91-1972-254000\n📍 Address: NIT Hamirpur, Himachal Pradesh, India - 177005',
      'For any inquiries, contact us at elsoc@nith.ac.in or call +91-1972-254000. We\'re located at NIT Hamirpur, Himachal Pradesh.'
    ]
  },
  
  team: {
    keywords: ['team', 'members', 'coordinators', 'who runs', 'leadership'],
    responses: [
      'ELSOC is run by a dedicated team of student coordinators and members, guided by faculty advisors. Visit our Team page to meet the people who make ELSOC great!',
      'Our team consists of passionate students from various years who work together to organize events and manage society activities. Check out the Team section to learn more!'
    ]
  },
  
  benefits: {
    keywords: ['benefits', 'why join', 'advantages', 'what will i get'],
    responses: [
      'By joining ELSOC, you\'ll gain access to exclusive workshops, networking opportunities, hands-on project experience, leadership development, and a community of like-minded tech enthusiasts!',
      'Members benefit from technical skill development, industry exposure, certificate opportunities, collaborative projects, and a platform to showcase their innovations.'
    ]
  },
  
  thanks: {
    keywords: ['thank', 'thanks', 'appreciate'],
    responses: [
      'You\'re welcome! Feel free to ask if you have any other questions.',
      'Happy to help! Let me know if you need anything else.',
      'Glad I could assist! Don\'t hesitate to reach out again.'
    ]
  },
  
  default: {
    keywords: [],
    responses: [
      'I\'m not sure I understand. Could you please rephrase your question? You can ask me about ELSOC, events, projects, membership, or contact information.',
      'I didn\'t quite catch that. Try asking about what ELSOC is, how to join, upcoming events, or our contact details!',
      'Hmm, I\'m not familiar with that. Feel free to ask about our society, events, projects, team, or how to get in touch with us.'
    ]
  }
};

export const getBotResponse = (userInput) => {
  const input = userInput.toLowerCase().trim();
  
  // Check each category for keyword matches
  for (const [category, data] of Object.entries(faqDatabase)) {
    if (category === 'default') continue;
    
    const hasMatch = data.keywords.some(keyword => input.includes(keyword));
    
    if (hasMatch) {
      const responses = data.responses;
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  
  // Return default response if no match found
  const defaultResponses = faqDatabase.default.responses;
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

// Export FAQ database for potential future use
export const getFAQs = () => {
  return Object.entries(faqDatabase)
    .filter(([category]) => category !== 'default' && category !== 'greetings' && category !== 'thanks')
    .map(([category, data]) => ({
      category,
      question: data.keywords[0],
      answer: data.responses[0]
    }));
};
