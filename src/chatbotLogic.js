// src/chatbotLogic.js - Advanced ELSOC ChatBot Logic

// Knowledge Base
const knowledgeBase = {
  about: {
    keywords: ['what is elsoc', 'about elsoc', 'tell me about', 'who are you', 'what do you do'],
    responses: [
      '⚡ ELSOC (Electrical Society) is NIT Hamirpur\'s premier technical society dedicated to electrical engineering excellence! We bring together passionate students, organize cutting-edge workshops, conduct hackathons, and work on innovative projects in IoT, Renewable Energy, Automation, and more.',
      'We are ELSOC - the Electrical Society at NIT Hamirpur! 🚀 Founded over 12 years ago, we\'ve grown to 800+ active members working on everything from smart grid systems to embedded electronics. We\'re all about innovation, learning, and creating the future of electrical engineering!',
      'ELSOC stands for Electrical Society, and we\'re the heartbeat of EE innovation at NIT Hamirpur! ⚡ We organize 75+ events annually including workshops, seminars, competitions, and projects. Our mission is to bridge the gap between classroom theory and real-world applications.'
    ]
  },
  
  joining: {
    keywords: ['how to join', 'become member', 'join elsoc', 'membership', 'sign up', 'register'],
    responses: [
      '🎯 Awesome! To join ELSOC:\n1. Fill out our membership form on the website\n2. Attend our orientation session\n3. Participate in intro workshops\n4. Connect with us on social media\n\nWe welcome all students passionate about electrical engineering and technology! No prior experience needed - just enthusiasm!',
      'Great to hear you\'re interested! 🌟 Joining ELSOC is easy:\n• Visit our Contact page and fill the membership form\n• Email us at elsoc@nith.ac.in\n• Attend our next recruitment drive\n• Follow us on Instagram/LinkedIn for updates\n\nWe\'re always looking for passionate members!',
      'Welcome aboard! 🚀 To become an ELSOC member:\n→ Check our website\'s "Join Us" section\n→ Fill the online form with your details\n→ Attend our orientation (we announce on social media)\n→ Start participating in events and projects!\n\nMembership is open to all years and branches!'
    ]
  },
  
  events: {
    keywords: ['events', 'workshop', 'seminar', 'hackathon', 'competition', 'upcoming', 'when', 'schedule'],
    responses: [
      '📅 We have exciting events lined up!\n\n🔧 IoT & Smart Systems Workshop - Nov 15, 2025\n💻 Circuit Design Hackathon - Dec 5, 2025\n🎤 Industry Expert Talk on Renewable Energy - Oct 25, 2025\n\nCheck our Events page for full details and registration links! Follow us on social media for latest updates.',
      '🎯 ELSOC organizes 75+ events annually including:\n• Technical Workshops (IoT, PCB Design, Arduino)\n• Hackathons & Competitions\n• Guest Lectures by Industry Experts\n• Project Exhibitions\n• Study Sessions & Tech Talks\n\nVisit our Events page to see upcoming events and register!',
      '⚡ Upcoming ELSOC Events:\n\n1. IoT Workshop (Nov 15) - Hands-on learning with sensors & microcontrollers\n2. 24hr Hackathon (Dec 5) - ₹50k prize pool!\n3. Renewable Energy Seminar (Oct 25) - Industry professionals\n\nStay updated by following our Instagram @elsoc_nith!'
    ]
  },
  
  contact: {
    keywords: ['contact', 'reach', 'email', 'phone', 'address', 'location', 'where'],
    responses: [
      '📞 Get in touch with ELSOC:\n\n📧 Email: elsoc@nith.ac.in\n📱 Phone: +91-1972-254000\n📍 Location: NIT Hamirpur, Himachal Pradesh, India - 177005\n\n🌐 Follow us:\n• Instagram: @elsoc_nith\n• LinkedIn: ELSOC NIT Hamirpur\n• Facebook: /elsocnith',
      '💬 Contact ELSOC:\n\nEmail: elsoc@nith.ac.in ✉️\nPhone: +91-1972-254000 📞\nAddress: National Institute of Technology Hamirpur, HP 177005 📍\n\nYou can also DM us on Instagram @elsoc_nith for quick responses!',
      '🔗 Connect with us:\n\n📧 elsoc@nith.ac.in\n📞 +91-1972-254000\n📍 NIT Hamirpur, Himachal Pradesh\n\nFind us on social media:\nInstagram | LinkedIn | Facebook | YouTube\nSearch: ELSOC NIT Hamirpur'
    ]
  },
  
  team: {
    keywords: ['team', 'members', 'core team', 'who runs', 'president', 'leaders', 'coordinators'],
    responses: [
      '👥 ELSOC is run by a dedicated team of students and guided by experienced faculty!\n\nOur team includes:\n• Faculty Advisors\n• President & Vice President\n• Technical Heads\n• Event Coordinators\n• Executive Members (800+ active members!)\n\nVisit our Team page to meet everyone and see what they work on!',
      '🌟 Meet the ELSOC Team!\n\nWe have:\n→ 3 Faculty Advisors guiding us\n→ Core Team (President, VP, Technical Heads)\n→ Domain Coordinators (IoT, Power Systems, etc.)\n→ 800+ Active Members\n\nCheck out our Team page to see photos and connect with team members on LinkedIn!',
      '⚡ The ELSOC family consists of passionate students from all years!\n\nKey Positions:\n• Faculty Coordinators\n• President & Vice President\n• Technical Team Leads\n• Event Management Team\n• Project Teams\n\nVisit our Team page to see the complete hierarchy and member details!'
    ]
  },
  
  projects: {
    keywords: ['project', 'what projects', 'working on', 'innovations', 'research', 'development'],
    responses: [
      '🚀 ELSOC members work on cutting-edge projects!\n\nOur focus areas:\n⚡ IoT & Smart Home Systems\n🌱 Renewable Energy Solutions\n🤖 Automation & Robotics\n💡 Power Systems & Smart Grid\n🔌 Circuit Design & PCB Development\n📡 Signal Processing & AI\n\nCheck our Projects page to see completed and ongoing work!',
      '💡 We\'ve completed 150+ innovative projects including:\n\n• Smart Energy Meter with IoT\n• Solar Power Optimization System\n• Home Automation using Arduino\n• EV Charging Station Design\n• Industrial Automation Solutions\n• ML-based Load Forecasting\n\nVisit our Projects page for detailed case studies!',
      '🔬 ELSOC Projects span multiple domains:\n\n1. IoT: Smart devices, sensor networks\n2. Renewable Energy: Solar, wind systems\n3. Automation: Industrial control systems\n4. Power Electronics: Converter design\n5. Embedded: Microcontroller applications\n\nWe encourage members to propose and lead their own projects!'
    ]
  },
  
  faculty: {
    keywords: ['faculty', 'professor', 'advisor', 'mentor', 'guide', 'teacher'],
    responses: [
      '👨‍🏫 Our esteemed faculty guides ELSOC:\n\nDr. Rajesh Kumar Sharma - Head of Department (Power Systems & Smart Grid)\nDr. Priya Malhotra - Faculty Coordinator (Control Systems & Automation)\nDr. Amit Verma - Technical Advisor (Renewable Energy & IoT)\n\nThey provide invaluable mentorship and help us stay aligned with industry trends!',
      '🎓 ELSOC is mentored by experienced faculty:\n\n• Dr. Rajesh Kumar Sharma (HOD) - Specializes in Power Systems\n• Dr. Priya Malhotra - Expert in Automation & Control\n• Dr. Amit Verma - Renewable Energy & IoT specialist\n\nOur faculty actively participates in workshops and guides project teams!',
      '👔 Meet our faculty mentors:\n\nDr. Rajesh Kumar Sharma → Power Systems expert, HOD\nDr. Priya Malhotra → Control Systems & Automation\nDr. Amit Verma → Renewable Energy & IoT\n\nThey bring decades of experience and industry connections to ELSOC!'
    ]
  },
  
  achievements: {
    keywords: ['achievement', 'awards', 'winners', 'recognition', 'accomplishment', 'success'],
    responses: [
      '🏆 ELSOC Achievements:\n\n✨ 800+ Active Members\n✨ 75+ Events Organized Annually\n✨ 150+ Projects Completed\n✨ 25+ Competition Wins\n✨ 12+ Years of Excellence\n✨ Multiple National Level Recognition\n\nWe\'re proud of what our members have accomplished!',
      '🌟 What we\'ve achieved:\n\n→ Won Best Technical Society Award 2023\n→ 15+ National Hackathon Victories\n→ Published research papers in IEEE conferences\n→ Partnerships with 10+ industry leaders\n→ Successfully organized Technex workshops\n→ Alumni working in top tech companies',
      '⚡ ELSOC by the numbers:\n\n800+ Members | 75+ Annual Events | 150+ Projects\n25+ Awards | 12+ Years | 100% Success Rate\n\nOur members have interned at Google, Microsoft, Texas Instruments, and more!'
    ]
  },
  
  domains: {
    keywords: ['domain', 'field', 'area', 'specialization', 'focus', 'what areas'],
    responses: [
      '🎯 ELSOC covers multiple technical domains:\n\n⚡ Power Systems - Smart grids, distribution\n🤖 Automation - Control systems, PLCs\n🌱 Renewable Energy - Solar, wind, storage\n💡 IoT & Embedded - Sensors, microcontrollers\n🔌 Circuit Design - Analog, digital, PCB\n📡 Signal Processing - DSP, AI/ML applications\n\nJoin the domain that interests you most!',
      '🚀 Our technical focus areas:\n\n1. Power Systems & Smart Grid\n2. Industrial Automation\n3. Renewable Energy Solutions\n4. IoT & Embedded Systems\n5. Circuit Design & PCB Development\n6. Signal Processing & Communication\n\nEach domain has dedicated workshops and project teams!',
      '💡 Explore ELSOC\'s domains:\n\n→ Power Electronics & Drives\n→ Control Systems & Automation\n→ Renewable & Sustainable Energy\n→ IoT, Sensors & Embedded Systems\n→ Digital & Analog Circuit Design\n→ Signal Processing & AI Integration\n\nAll members can work across multiple domains!'
    ]
  },
  
  facilities: {
    keywords: ['lab', 'facility', 'equipment', 'tools', 'resources', 'infrastructure'],
    responses: [
      '🔬 ELSOC has access to excellent facilities:\n\n• Dedicated Electronics Lab\n• PCB Fabrication Equipment\n• Arduino, Raspberry Pi, ESP32 kits\n• Oscilloscopes & Signal Generators\n• Soldering & Testing Equipment\n• Project Development Space\n• Library Resources\n\nMembers can use these for their projects anytime!',
      '⚙️ Our technical resources:\n\n→ Advanced Electronics Lab with latest equipment\n→ Complete IoT development kits\n→ Power systems simulation software\n→ PCB design and fabrication tools\n→ 3D Printing facility\n→ Dedicated project workspace\n\nWe also provide component funding for approved projects!',
      '🛠️ Resources available to ELSOC members:\n\n✓ Fully equipped Electronics Lab\n✓ Microcontroller Development Boards\n✓ Measurement & Testing Instruments\n✓ Software Licenses (MATLAB, Simulink, KiCAD)\n✓ Workshop & Fabrication Tools\n✓ Online Learning Resources\n\nPlus financial support for innovative projects!'
    ]
  },
  
  collaboration: {
    keywords: ['collaborate', 'partnership', 'work with', 'sponsor', 'industry', 'companies'],
    responses: [
      '🤝 ELSOC collaborates with:\n\n• Leading Tech Companies (TI, Intel, etc.)\n• Other Technical Societies at NIT\n• Research Labs & Universities\n• Startup Incubators\n• Industry Professionals\n\nWe\'re always open to new partnerships! Contact us at elsoc@nith.ac.in',
      '🌐 Our partnerships include:\n\n→ Industry workshops with Texas Instruments\n→ Joint events with other college societies\n→ Internship opportunities through alumni\n→ Sponsored hackathons and competitions\n→ Guest lectures by industry experts\n\nInterested in collaborating? Reach out to us!',
      '💼 ELSOC Industry Connections:\n\nWe partner with companies for:\n• Technical workshops\n• Sponsored projects\n• Internship placements\n• Guest lectures\n• Competition sponsorships\n\nCompanies: Email elsoc@nith.ac.in for partnership opportunities!'
    ]
  },
  
  fees: {
    keywords: ['fee', 'cost', 'payment', 'charge', 'money', 'price', 'how much'],
    responses: [
      '💰 ELSOC Membership:\n\n✨ Basic Membership: FREE for NIT Hamirpur students!\n✨ Workshop Fees: Vary by event (₹50-500)\n✨ Project Materials: Subsidized/Sponsored\n✨ Competition Entry: Usually free for members\n\nWe believe in accessible learning - most events are free or low-cost!',
      '🎯 Cost Structure:\n\n→ Society Membership: No cost!\n→ Regular events & seminars: FREE\n→ Hands-on workshops: Nominal fee (₹100-300)\n→ Certification courses: ₹200-500\n\nWe offer scholarships for deserving students. Money should never be a barrier!',
      '💵 Fees & Costs:\n\nMembership: FREE ✓\nMost Events: FREE ✓\nSpecial Workshops: ₹100-500\nCertificates: Included\n\nWe keep costs minimal and focus on learning. Financial aid available on request!'
    ]
  },
  
  alumni: {
    keywords: ['alumni', 'past members', 'graduates', 'where do they work', 'placements'],
    responses: [
      '🎓 ELSOC Alumni Success:\n\nOur members are now at:\n• Google, Microsoft, Amazon\n• Texas Instruments, Intel, Nvidia\n• IITs, IIMs for higher studies\n• Leading startups\n• Research positions worldwide\n\nELSOC experience helps in placements and higher education!',
      '🌟 Where ELSOC members go:\n\n→ Top Tech Companies: Google, Amazon, Microsoft\n→ Core EE Companies: Texas Instruments, Qualcomm\n→ Higher Studies: IIT, MIT, Stanford\n→ Entrepreneurship: Founded 10+ startups\n\nELSOC projects and leadership roles significantly boost profiles!',
      '💼 ELSOC Alumni Network:\n\n✓ 1000+ alumni worldwide\n✓ Working in 50+ companies\n✓ Average CTC: 15+ LPA\n✓ 30+ pursuing PhDs\n✓ Active mentorship program\n\nJoin ELSOC to be part of this amazing network!'
    ]
  }
};

// Greeting responses
const greetings = {
  keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
  responses: [
    'Hello! 👋 I\'m the ELSOC AI Assistant. How can I help you explore our electrical engineering society today?',
    'Hey there! ⚡ Welcome to ELSOC\'s chatbot. What would you like to know about us?',
    'Hi! 🌟 I\'m here to answer all your questions about ELSOC. What interests you?',
    'Greetings! ⚡ Ask me anything about ELSOC - events, projects, membership, or our team!'
  ]
};

// Thank you responses
const thanks = {
  keywords: ['thank', 'thanks', 'appreciate', 'helpful', 'awesome', 'great'],
  responses: [
    'You\'re welcome! 😊 Feel free to ask anything else about ELSOC!',
    'Happy to help! ⚡ Let me know if you need any other information.',
    'Glad I could assist! 🌟 Don\'t hesitate to reach out if you have more questions.',
    'My pleasure! 🚀 Remember, you can always contact us at elsoc@nith.ac.in for more details!'
  ]
};

// Goodbye responses
const goodbye = {
  keywords: ['bye', 'goodbye', 'see you', 'later', 'exit', 'close'],
  responses: [
    'Goodbye! ⚡ Hope to see you at our next event. Stay connected with ELSOC!',
    'See you later! 👋 Don\'t forget to follow us on social media for updates!',
    'Take care! 🌟 Feel free to come back anytime with more questions.',
    'Bye! ⚡ Join ELSOC and be part of our amazing community. See you around!'
  ]
};

// Help/confused responses
const help = {
  keywords: ['help', 'confused', 'don\'t understand', 'what can you do', 'options', 'menu'],
  responses: [
    '🤔 I can help you with:\n\n• What is ELSOC?\n• How to join?\n• Upcoming events\n• Our projects\n• Team members\n• Contact information\n• Facilities & resources\n• Alumni & placements\n\nJust ask me anything!',
    '💡 Here\'s what I know about:\n\n→ About ELSOC & our mission\n→ Membership process\n→ Events, workshops, hackathons\n→ Technical domains we cover\n→ Faculty & team details\n→ Contact & location info\n\nWhat would you like to explore?',
    '🎯 I\'m your ELSOC guide! Ask me about:\n\n✓ Society information\n✓ Joining process\n✓ Upcoming activities\n✓ Projects & innovations\n✓ Team structure\n✓ How to reach us\n\nType your question!'
  ]
};

// Utility function to check if message contains keywords
const containsKeywords = (message, keywords) => {
  return keywords.some(keyword => message.includes(keyword));
};

// Utility function to get random response
const getRandomResponse = (responses) => {
  return responses[Math.floor(Math.random() * responses.length)];
};

// Main bot response function
export const getBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase().trim();

  // Check for greetings
  if (containsKeywords(message, greetings.keywords)) {
    return getRandomResponse(greetings.responses);
  }

  // Check for thanks
  if (containsKeywords(message, thanks.keywords)) {
    return getRandomResponse(thanks.responses);
  }

  // Check for goodbye
  if (containsKeywords(message, goodbye.keywords)) {
    return getRandomResponse(goodbye.responses);
  }

  // Check for help
  if (containsKeywords(message, help.keywords)) {
    return getRandomResponse(help.responses);
  }

  // Check knowledge base
  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (containsKeywords(message, value.keywords)) {
      return getRandomResponse(value.responses);
    }
  }

  // Default response with suggestions
  return '🤔 I\'m not quite sure about that, but I\'d love to help!\n\nTry asking me about:\n• What is ELSOC?\n• How can I join?\n• Upcoming events\n• Team members\n• Projects we work on\n• Contact information\n\nOr email us directly at elsoc@nith.ac.in for detailed information! ⚡';
};

// Export additional utility functions
export const getQuickQuestions = () => {
  return [
    { icon: '❓', text: 'What is ELSOC?' },
    { icon: '🎯', text: 'How can I join?' },
    { icon: '📅', text: 'Upcoming events?' },
    { icon: '📞', text: 'Contact information' },
    { icon: '👥', text: 'Meet the team' },
    { icon: '🚀', text: 'Our projects' }
  ];
};

// Get contextual follow-up suggestions
export const getFollowUpSuggestions = (lastQuery) => {
  const message = lastQuery.toLowerCase();
  
  if (containsKeywords(message, knowledgeBase.about.keywords)) {
    return ['How can I join?', 'What projects do you work on?', 'Upcoming events?'];
  }
  
  if (containsKeywords(message, knowledgeBase.joining.keywords)) {
    return ['What are the benefits?', 'Any membership fees?', 'When is the next orientation?'];
  }
  
  if (containsKeywords(message, knowledgeBase.events.keywords)) {
    return ['How to register?', 'Are events free?', 'Can I organize an event?'];
  }
  
  if (containsKeywords(message, knowledgeBase.projects.keywords)) {
    return ['Can I propose a project?', 'What resources are available?', 'How to join a project team?'];
  }
  
  return ['Tell me more about ELSOC', 'How can I get involved?', 'Contact information'];
};

// Search functionality
export const searchKeyword = (keyword) => {
  const results = [];
  const searchTerm = keyword.toLowerCase();
  
  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (value.keywords.some(k => k.includes(searchTerm))) {
      results.push({
        category: key,
        response: getRandomResponse(value.responses)
      });
    }
  }
  
  return results.length > 0 ? results[0].response : null;
};

// Export knowledge base for reference
export { knowledgeBase };