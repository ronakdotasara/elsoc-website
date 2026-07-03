// src/chatbotLogic.js - Advanced ELSOC ChatBot with Natural Language Understanding

// Time-based greeting
const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  if (hour < 21) return 'Good evening';
  return 'Good night';
};

// Advanced Knowledge Base with Real ELSOC Data
const knowledgeBase = {
  about: {
    keywords: ['what is elsoc', 'about elsoc', 'tell me about', 'who are you', 'what do you do', 'describe elsoc', 'elsoc means', 'full form'],
    responses: [
      `⚡ ${getTimeBasedGreeting()}! ELSOC (Electrical Society) is the Departmental Society of Electrical Engineering at NIT Hamirpur! We're a community of 33 passionate students working on innovative projects in circuit design, IoT, AI/ML, and power systems. Founded 5 years ago, we've completed 35+ projects and organize 10+ events annually!`,
      '🚀 ELSOC stands for Electrical Society - NIT Hamirpur\'s premier tech community for EE enthusiasts! We bridge theoretical knowledge with practical application through hands-on workshops, expert lectures, cutting-edge projects, and industry collaborations. We\'re all about innovation, creativity, and technical excellence!',
      '⚡ Hey! We\'re ELSOC - the heartbeat of electrical engineering innovation at NIT Hamirpur! Over the past 5 years, we\'ve grown to 33 active members working across 8 technical domains including Circuit Design, Web Dev, AI/ML, Media & Marketing, Finance, Content, Design, and Management. Join us in shaping the future!'
    ]
  },
  
  joining: {
    keywords: ['how to join', 'become member', 'join elsoc', 'membership', 'sign up', 'register', 'recruitment', 'can i join', 'want to join', 'interested'],
    responses: [
      '🎯 Awesome! Here\'s how to join ELSOC:\n\n1️⃣ Visit our Contact page and fill the membership form\n2️⃣ Attend our orientation session (announced on Instagram)\n3️⃣ Connect with us: elsoc@nith.ac.in\n4️⃣ Follow us on social media for updates\n\nWe welcome ALL students - no prior experience needed, just enthusiasm! 🌟',
      '💫 Great to hear you\'re interested! Joining is super easy:\n\n✅ Fill our online form on the Contact page\n✅ Email us: elsoc@nith.ac.in with your details\n✅ Attend our next recruitment drive\n✅ Follow @elsoc_nith on Instagram\n\nMembership is open to all years and branches. Ready to innovate with us?',
      '🚀 Welcome to the ELSOC family! Here\'s your path to joining:\n\n→ Check our "Join Us" section on the website\n→ Fill the form with your name, branch, year, and interests\n→ Attend orientation (we announce dates on social media)\n→ Start participating in events right away!\n\nNo fees, no barriers - just passion for engineering! 💪'
    ]
  },

  events: {
    keywords: ['events', 'workshop', 'seminar', 'hackathon', 'competition', 'upcoming', 'when', 'schedule', 'activities', 'what happening', 'next event'],
    responses: [
      '📅 Exciting events ahead! Here\'s what\'s coming:\n\n🔧 **MATLAB Basics Workshop**\n   📆 Oct 30, 2025 (Tentative)\n   ⏰ 10 AM - 4 PM | 📍 Main Lab, EE Dept\n   💡 Hands-on, Certification, Expert Guidance\n\n🎤 **Guest Lecture / Tech Talk**\n   📆 Nov 10-16, 2025 (Tentative)\n   📍 Seminar Hall | 🌟 Industry Insights\n\n⚡ **Power Systems Workshop**\n   📆 Jan 12-26, 2026 (Tentative)\n   🔬 Lab Work with Smart Grid Tech\n\nRegister on our Events page!',
      '🎯 ELSOC organizes 10+ events yearly including:\n\n• Technical Workshops (MATLAB, Circuit Design, IoT)\n• Guest Lectures by Industry Experts\n• Project Exhibitions & Showcases\n• Hands-on Lab Sessions\n• Tech Talks & Study Sessions\n\nUpcoming: MATLAB Workshop (Oct 30), Guest Lecture (Nov 10-16), Power Systems Lab (Jan 12-26). Check our Events page for details!',
      '⚡ What\'s happening at ELSOC:\n\n🔜 **Next Up:**\n1. MATLAB Workshop - Oct 30 (Free for members!)\n2. Industry Tech Talk - Nov 10-16\n3. Power Systems Lab - Jan 12-26\n\n📊 **Event Stats:**\n10+ events/year | Expert speakers | Certifications | Networking\n\nFollow @elsoc_nith on Instagram for live updates! 🚀'
    ]
  },

  pastEvents: {
    keywords: ['past events', 'previous', 'what did you do', 'history', 'organized before', 'earlier events', 'old events'],
    responses: [
      '📚 ELSOC\'s Memorable Past Events:\n\n✨ **Blockchain Workshop** (Feb 4, 2022) - YouTube Live with quiz competition\n✨ **Intern Talk** (Aug 29, 2022) - Members shared experiences from DRDO, RWTH Aachen, NTU Singapore, IISc Bangalore\n✨ **MATLAB Workshop** (Oct 21, 2022) - Programming & simulations\n✨ **Lightning Unleashed** (Feb 10, 2023) - High-voltage demos with OJAS\n✨ **KUIZZ-i-THON** (Sept 1, 2023) - Technical quiz competition\n✨ **Circuits of Opportunities** (Oct 18, 2023) - Career guidance\n✨ **TECHLETICS** (April 10, 2024) - Innovation meets competition',
      '🎓 Some of our best past events:\n\n2022: Blockchain Workshop, Intern Talk, MATLAB Workshop\n2023: Lightning Unleashed (ELSOC X OJAS), KUIZZ-i-THON, Career Workshop\n2024: TECHLETICS (OJAS X ELSOC)\n\nEach event had 100+ participants and received amazing feedback! Check our gallery for photos. 📸'
    ]
  },
  
  contact: {
    keywords: ['contact', 'reach', 'email', 'phone', 'address', 'location', 'where', 'find you', 'talk to', 'connect'],
    responses: [
      '📞 Get in touch with ELSOC:\n\n📧 **Email:** elsoc@nith.ac.in\n📱 **Phone:** +91-1972-254000\n📍 **Location:** NIT Hamirpur, Himachal Pradesh, India - 177005\n\n🌐 **Follow us:**\n• Instagram: @elsoc_nith\n• LinkedIn: ELSOC NIT Hamirpur\n• Facebook: /elsocnith\n\nWe typically respond within 24 hours! ⚡',
      '💬 Multiple ways to reach us:\n\n**Quick Response:** DM us on Instagram @elsoc_nith 📱\n**Official:** elsoc@nith.ac.in ✉️\n**Call:** +91-1972-254000 📞\n**Visit:** EE Department, NIT Hamirpur 🏛️\n\nWe\'re active on all social platforms - find us as "ELSOC NIT Hamirpur"!',
      '🔗 Connect with ELSOC:\n\n📧 Email: elsoc@nith.ac.in (Best for formal queries)\n📱 Instagram: @elsoc_nith (Quick responses, updates)\n💼 LinkedIn: ELSOC NIT Hamirpur (Professional networking)\n📞 Phone: +91-1972-254000\n📍 Address: National Institute of Technology Hamirpur, HP 177005\n\nLooking forward to hearing from you! 🌟'
    ]
  },
  
  team: {
    keywords: ['team', 'members', 'core team', 'who runs', 'president', 'leaders', 'coordinators', 'people', 'meet team'],
    responses: [
      '👥 Meet the ELSOC Team!\n\n**Faculty Guidance:**\n🎓 Dr. OP Rahi - HOD, EED\n🎓 Dr. Bharti Bakshi Koul - Faculty Incharge\n🎓 Dr. Chandrasekaran S - Coordinator\n🎓 Dr. Katam Nishanth - Coordinator\n\n**Student Team:** 33 passionate members working across 8 domains\n\n**Domains:**\n• Circuit Design • Web Development • AI/ML\n• Media & Marketing • Finance • Content\n• Design • Management\n\nVisit our Team page to see everyone! 🌟',
      '⚡ The ELSOC Family:\n\n👔 **Faculty Advisors:** 4 experienced professors guiding us\n👨‍💻 **Core Team:** President, VP, Technical Heads\n🎯 **Domain Leads:** Circuit, Web, AI/ML, Media, Finance, Content, Design, Management\n📊 **Active Members:** 33 talented students\n\nEach member brings unique skills. Check our Team page for individual profiles and LinkedIn connections!',
      '🌟 ELSOC runs on passion and teamwork!\n\n**Leadership:**\n• Dr. OP Rahi (HOD) - Strategic guidance\n• Dr. Bharti Bakshi Koul - Faculty Incharge\n• Dr. Chandrasekaran S & Dr. Katam Nishanth - Coordinators\n\n**Student Body:** 33 members organized into:\n→ Technical Teams (Circuit, Web, AI/ML)\n→ Creative Teams (Design, Content, Media)\n→ Management Teams (Finance, Operations)\n\nWe\'re always growing! Join us? 🚀'
    ]
  },
  
  projects: {
    keywords: ['project', 'what projects', 'working on', 'innovations', 'research', 'development', 'built', 'created', 'portfolio'],
    responses: [
      '🚀 ELSOC has completed 35+ innovative projects!\n\n**Recent Projects:**\n💡 Smart Home Automation (ESP32, IoT)\n🤖 Autonomous Line Following Robot (PID control)\n☀️ Solar Power Monitoring System (Real-time analytics)\n🚗 Gesture Controlled Car (Accelerometer-based)\n⚙️ Industrial Automation PLC System\n🌦️ IoT Weather Monitoring Station\n⚡ Smart Energy Meter (GSM-enabled)\n🔥 Fire Detection & Alert System\n\n**Focus Areas:**\nIoT, Robotics, Power Systems, Embedded Systems, Automation\n\nCheck our Projects page for detailed case studies! 📊',
      '💡 35+ projects completed across multiple domains:\n\n**IoT & Embedded:**\n• Smart Home Automation with Alexa\n• Weather Station with cloud logging\n• Fire Detection with SMS alerts\n\n**Robotics:**\n• Line Following Robot with obstacle avoidance\n• Gesture Controlled Car\n\n**Power Systems:**\n• Solar Monitoring System\n• Smart Energy Meter\n• Industrial PLC Automation\n\nMembers can propose and lead their own projects! Got an idea? 💭',
      '🔬 ELSOC Project Portfolio:\n\n📊 **Stats:** 35+ completed | 8 ongoing | 5 in planning\n\n**Domains:**\n⚡ Circuit Design - Analog & digital circuits\n🤖 Robotics - Autonomous systems\n🌱 Power Systems - Solar, energy monitoring\n💻 IoT - Connected devices, sensors\n🎮 Embedded - Microcontroller projects\n⚙️ Automation - Industrial control systems\n\nAll projects get:\n✓ Mentorship\n✓ Funding support\n✓ Lab access\n✓ Certificates\n\nPropose your own project today!'
    ]
  },
  
  faculty: {
    keywords: ['faculty', 'professor', 'advisor', 'mentor', 'guide', 'teacher', 'hod', 'dr', 'incharge'],
    responses: [
      '👨‍🏫 Our Distinguished Faculty:\n\n**Dr. OP Rahi**\n🎓 Head of Department, EED\n💡 "Guiding innovation with decades of expertise, inspiring students to push boundaries and achieve excellence in electrical engineering."\n\n**Dr. Bharti Bakshi Koul**\n🎓 Faculty Incharge, ELSOC\n💡 "Dedicated to nurturing young talent, fostering creativity, leadership, and technical excellence."\n\n**Dr. Chandrasekaran S**\n🎓 Coordinator, ELSOC\n💡 "Encouraging innovation and practical application through hands-on projects."\n\n**Dr. Katam Nishanth**\n🎓 Coordinator, ELSOC\n💡 "Guiding students in exploring emerging technologies and real-world solutions."',
      '🎓 ELSOC is mentored by 4 experienced faculty members:\n\n1️⃣ **Dr. OP Rahi** (HOD, EED) - Power Systems expert\n2️⃣ **Dr. Bharti Bakshi Koul** (Faculty Incharge) - Student development\n3️⃣ **Dr. Chandrasekaran S** (Coordinator) - Practical learning advocate\n4️⃣ **Dr. Katam Nishanth** (Coordinator) - Research & development focus\n\nThey provide:\n✓ Strategic guidance\n✓ Industry connections\n✓ Project mentorship\n✓ Career counseling\n\nWe\'re blessed to have such supportive mentors! 🙏'
    ]
  },
  
  achievements: {
    keywords: ['achievement', 'awards', 'winners', 'recognition', 'accomplishment', 'success', 'milestone', 'proud'],
    responses: [
      '🏆 ELSOC Achievements & Milestones:\n\n✨ **5 Years of Excellence** (2020-2025)\n✨ **33 Active Members** across 8 domains\n✨ **35+ Projects Completed** with real-world impact\n✨ **10+ Events Annually** with 100+ participants each\n✨ **7 Past Events** documented with amazing feedback\n✨ **8 Technical Domains** covering EE spectrum\n✨ **100% Member Satisfaction** in feedback surveys\n✨ **4 Faculty Mentors** providing expert guidance\n\nWe\'re proud of our journey and excited for what\'s ahead! 🚀',
      '🌟 What makes ELSOC special:\n\n→ Founded in 2020, celebrating 5 years! 🎉\n→ Organized impactful events: Blockchain Workshop, Lightning Unleashed, TECHLETICS, KUIZZ-i-THON\n→ Strong industry connections and alumni network\n→ Members interned at DRDO, RWTH Aachen Germany, NTU Singapore, IISc Bangalore\n→ Projects featured in college exhibitions\n→ Active collaboration with OJAS and other societies\n\nJoin us to add to this legacy! ⚡'
    ]
  },
  
  domains: {
    keywords: ['domain', 'field', 'area', 'specialization', 'focus', 'what areas', 'departments', 'teams', 'work on'],
    responses: [
      '🎯 ELSOC\'s 8 Technical Domains:\n\n1️⃣ **Circuit Design** - Analog & digital circuits, PCB design\n2️⃣ **Web Development** - Full-stack development, websites\n3️⃣ **AI/ML** - Artificial Intelligence & Machine Learning projects\n4️⃣ **Media & Marketing** - Digital content, social media, outreach\n5️⃣ **Finance** - Budget management, fund allocation\n6️⃣ **Content** - Technical writing, documentation, blogs\n7️⃣ **Design** - UI/UX, graphic design, posters\n8️⃣ **Management** - Team coordination, event planning\n\nJoin the domain that excites you most! You can work across multiple domains too. 🚀',
      '💡 Explore our technical and creative domains:\n\n**Technical Teams:**\n⚡ Circuit Design - Build hardware projects\n💻 Web Development - Create digital solutions\n🤖 AI/ML - Implement smart systems\n\n**Creative Teams:**\n🎨 Design - Visual identity & graphics\n📝 Content - Write & document\n📱 Media & Marketing - Social media & outreach\n\n**Support Teams:**\n💰 Finance - Manage budgets\n📊 Management - Organize & coordinate\n\nAll members contribute to our success! 🌟'
    ]
  },

  matlab: {
    keywords: ['matlab', 'matlab workshop', 'matlab basics', 'learn matlab', 'matlab certification'],
    responses: [
      '🔧 **MATLAB Basics Workshop**\n\n📅 **Date:** October 30, 2025 (Tentative)\n⏰ **Time:** 10:00 AM - 4:00 PM\n📍 **Venue:** Main Lab, EE Department\n\n**What you\'ll learn:**\n• MATLAB fundamentals\n• Electrical project simulations\n• Practical engineering applications\n• Real-world problem solving\n\n**Benefits:**\n✅ Hands-on projects\n✅ MATLAB certification\n✅ Expert guidance\n✅ Free for ELSOC members\n\nRegister on our Events page! Limited seats. 🎯',
      '💻 Our upcoming MATLAB workshop covers everything from basics to advanced simulations! Perfect for beginners. Dates: Oct 30, 2025. Free registration for members. Get certified and boost your resume! 🚀'
    ]
  },

  guestLecture: {
    keywords: ['guest lecture', 'tech talk', 'speaker', 'industry expert', 'seminar'],
    responses: [
      '🎤 **Guest Lecture / Tech Talk**\n\n📅 **Dates:** November 10-16, 2025 (Tentative)\n⏰ **Time:** 2:00 PM - 4:00 PM\n📍 **Venue:** Seminar Hall, NIT Hamirpur\n\n**Topics:**\n• Emerging technologies in EE\n• Research opportunities\n• Career guidance & placements\n• Industry trends & demands\n\n**Highlights:**\n✨ Industry professionals\n✨ Alumni insights\n✨ Q&A session\n✨ Networking opportunity\n✨ Free entry\n\nFollow us on Instagram for speaker announcements! 🌟'
    ]
  },

  powerSystems: {
    keywords: ['power systems', 'power workshop', 'smart grid', 'transformers', 'circuit breakers'],
    responses: [
      '⚡ **Power Systems & Labs Workshop**\n\n📅 **Dates:** January 12-26, 2026 (Tentative)\n⏰ **Time:** 10:00 AM - 4:00 PM\n📍 **Venue:** Power Systems Lab, NIT Hamirpur\n\n**Hands-on Experience with:**\n🔌 Transformers & their applications\n⚙️ Circuit breakers & protection systems\n🌐 Smart grid technologies\n📊 Power system analysis tools\n\n**What you get:**\n✅ Lab work & experiments\n✅ Industry-standard tools\n✅ Expert faculty guidance\n✅ Certification\n✅ Open to all years\n\nPerfect for core EE enthusiasts! Register early. 🎓'
    ]
  },
  
  fees: {
    keywords: ['fee', 'cost', 'payment', 'charge', 'money', 'price', 'how much', 'free', 'paid'],
    responses: [
      '💰 ELSOC Membership & Event Costs:\n\n**Membership:**\n✅ 100% FREE for NIT Hamirpur students!\n✅ No hidden charges\n✅ Lifetime access to resources\n\n**Events:**\n🎯 Most workshops: FREE or minimal fee (₹50-200)\n🎯 Guest lectures: Always FREE\n🎯 Competitions: FREE for members\n🎯 Certification: Included in workshop fees\n\n**Project Support:**\n✓ Component funding available\n✓ Lab access included\n✓ Mentorship FREE\n\nWe believe in accessible learning! Financial constraints? Talk to us. 🤝',
      '💵 Quick cost breakdown:\n\nMembership: FREE ✓\nMost Events: FREE ✓\nSpecial Workshops: ₹100-300\nCertificates: Included\nProject Materials: Subsidized\n\nScholarships available for deserving students. Money should never stop you from learning! 🌟'
    ]
  },
  
  collaboration: {
    keywords: ['collaborate', 'partnership', 'work with', 'sponsor', 'industry', 'companies', 'tie up', 'collab'],
    responses: [
      '🤝 ELSOC is open to collaborations!\n\n**We partner with:**\n• Technical societies (Past: OJAS for Lightning Unleashed, TECHLETICS)\n• Industry professionals for workshops\n• Alumni for mentorship & talks\n• Startups for project guidance\n• Other colleges for joint events\n\n**For Companies:**\nWe offer:\n→ Workshop sponsorships\n→ Recruitment opportunities\n→ Campus connects\n→ Project collaborations\n\n**Interested?** Email: elsoc@nith.ac.in\nSubject: "Partnership Proposal - [Your Organization]"\n\nLet\'s innovate together! 🚀'
    ]
  },

  resources: {
    keywords: ['lab', 'facility', 'equipment', 'tools', 'resources', 'infrastructure', 'access'],
    responses: [
      '🔬 ELSOC Members get access to:\n\n**Lab Facilities:**\n⚙️ Power Systems Lab\n🔌 Electronics Lab\n💻 EE Department computer labs\n\n**Equipment & Tools:**\n• Arduino, ESP32, Raspberry Pi kits\n• Sensors & actuators\n• Oscilloscopes & multimeters\n• Soldering stations\n• PCB design software\n\n**Software Access:**\n✓ MATLAB & Simulink\n✓ Circuit simulation tools\n✓ Design software\n\n**Support:**\n📚 Technical library\n💰 Project funding\n👨‍🏫 Faculty mentorship\n🤝 Peer learning\n\nEverything you need to bring ideas to life! ⚡',
      '🛠️ Resources for ELSOC members:\n\n✓ Fully equipped labs with latest equipment\n✓ Microcontroller development boards\n✓ Component inventory for projects\n✓ Software licenses (MATLAB, simulation tools)\n✓ Workshop & fabrication tools\n✓ Financial support for approved projects\n✓ 24/7 online resources & tutorials\n\nNo resource constraints - just build! 💪'
    ]
  },

  why: {
    keywords: ['why join', 'benefits', 'what will i get', 'advantages', 'why elsoc', 'worth it'],
    responses: [
      '🌟 Why Join ELSOC?\n\n**Learning:**\n📚 10+ workshops annually\n🎓 Hands-on project experience\n💻 Industry-standard tools & tech\n\n**Growth:**\n🚀 Leadership opportunities\n💪 Skill development (technical + soft)\n🏆 Competitions & certifications\n\n**Network:**\n👥 33 like-minded peers\n👨‍🏫 4 faculty mentors\n💼 Alumni in top companies\n🤝 Industry connections\n\n**Resume:**\n✅ Project portfolio\n✅ Event certifications\n✅ Leadership positions\n✅ Competition wins\n\nPlus, you\'ll make lifelong friends and memories! 😊',
      '💡 ELSOC gives you:\n\n1. **Real Projects** - Build things that matter\n2. **Certifications** - Boost your resume\n3. **Mentorship** - Learn from experts\n4. **Network** - Connect with seniors, faculty, industry\n5. **Fun** - Meet amazing people, attend cool events\n6. **Skills** - Technical + leadership + communication\n7. **Opportunities** - Internships, placements, higher studies\n\nIt\'s not just a society - it\'s a transformative experience! ⚡'
    ]
  },

  location: {
    keywords: ['where', 'location', 'address', 'find', 'campus', 'building', 'room'],
    responses: [
      '📍 Find ELSOC at:\n\n**Address:**\nElectrical Engineering Department\nNational Institute of Technology Hamirpur\nHamirpur, Himachal Pradesh 177005\nIndia 🇮🇳\n\n**How to reach:**\n• From main gate: Head to EE Department building\n• Look for ELSOC notice board\n• Faculty office: EED building 2nd floor\n\n**Best time to visit:**\nWeekdays, 10 AM - 5 PM\n(During events, we\'re there even on weekends! 😄)\n\nNeed directions? Call: +91-1972-254000'
    ]
  },

  social: {
    keywords: ['instagram', 'facebook', 'linkedin', 'social media', 'follow', 'handle'],
    responses: [
      '📱 Follow ELSOC on social media:\n\n**Instagram:** @elsoc_nith\n🔥 Event updates, behind-the-scenes, memes!\n\n**LinkedIn:** ELSOC NIT Hamirpur\n💼 Professional posts, achievements, opportunities\n\n**Facebook:** /elsocnith\n📢 Event announcements, photo albums\n\n**YouTube:** ELSOC NITH\n🎥 Workshop recordings, project demos\n\nStay connected for latest updates, registration links, and fun content! 🚀\n\nTag us in your posts: #ELSOC #ElectricalEngineering #NITHamirpur'
    ]
  },

  years: {
    keywords: ['which year', 'eligibility', 'first year', 'final year', 'branch', 'who can join'],
    responses: [
      '🎓 ELSOC is open to ALL:\n\n**Years:** 1st, 2nd, 3rd, 4th year - everyone!\n**Branches:** All branches welcome (not just EE)\n**Experience:** No prior experience needed\n**Skills:** We\'ll teach you everything\n\n**Why different branches?**\n• CS students → Web Dev, AI/ML\n• Mechanical → Circuit Design, Projects\n• ECE → Perfect fit for everything!\n• All branches → Management, Design, Content\n\nDiversity makes us stronger! Everyone brings unique perspectives. Join regardless of year or branch! 🌈'
    ]
  },

  beginner: {
    keywords: ['beginner', 'no experience', 'new', 'never done', 'learn from scratch', 'basic'],
    responses: [
      '👋 Perfect! ELSOC is beginner-friendly!\n\n**We teach from scratch:**\n📖 Basic electronics & circuits\n💻 Programming fundamentals\n🔧 Tool usage & safety\n🎨 Design basics\n\n**How we help beginners:**\n✅ Orientation sessions\n✅ Intro workshops (free)\n✅ Senior mentorship program\n✅ Study groups & peer learning\n✅ Step-by-step project guidance\n\n**Many joined with ZERO experience and now:**\n→ Lead project teams\n→ Organize workshops\n→ Win competitions\n→ Get great placements\n\nYour enthusiasm matters more than experience! Start today. 💪'
    ]
  },

  competition: {
    keywords: ['competition', 'contest', 'hackathon', 'challenge', 'compete', 'win'],
    responses: [
      '🏆 ELSOC Competitions & Hackathons:\n\n**Past Events:**\n💻 Circuit Design Hackathon\n🧠 KUIZZ-i-THON (Technical Quiz)\n⚡ TECHLETICS (Tech + Athletics)\n\n**Upcoming:**\nCheck our Events page for latest competitions!\n\n**What you get:**\n→ Prize money (up to ₹50k total)\n→ Certificates\n→ Recognition\n→ Portfolio projects\n→ Industry exposure\n\n**Can non-members participate?**\nYes! But members get fee waivers and extra perks.\n\n**Want to compete?** Follow @elsoc_nith for announcements! 🚀'
    ]
  }
};

// Conversational responses
const greetings = {
  keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'namaste', 'sup', 'yo'],
  responses: [
    `${getTimeBasedGreeting()}! 👋 I'm ELSOC Bot, your friendly AI assistant. I'm here to answer all your questions about ELSOC - NIT Hamirpur's Electrical Society! What would you like to know?`,
    `Hey there! ⚡ Welcome to ELSOC's chat. I can help you with events, projects, membership, or anything else about our society. What interests you?`,
    `${getTimeBasedGreeting()}! 🌟 I'm your ELSOC guide. Whether you want to join, learn about events, or just chat about electrical engineering - I'm here to help! What's on your mind?`,
    `Hi! 🚀 Great to see you here. I know everything about ELSOC - from our 5 years of history to our upcoming events. How can I assist you today?`
  ]
};

const thanks = {
  keywords: ['thank', 'thanks', 'appreciate', 'helpful', 'awesome', 'great', 'nice', 'good job'],
  responses: [
    'You\'re welcome! 😊 I\'m always here if you need more info about ELSOC. Feel free to ask anything!',
    'Happy to help! ⚡ Don\'t hesitate to reach out if you have more questions. Join us at elsoc@nith.ac.in!',
    'Glad I could assist! 🌟 Remember, ELSOC is always open to passionate learners like you. See you at our next event?',
    'My pleasure! 🚀 Follow @elsoc_nith on Instagram for daily updates. And hey, consider joining us - we\'d love to have you! 💙'
  ]
};

const goodbye = {
  keywords: ['bye', 'goodbye', 'see you', 'later', 'exit', 'close', 'gotta go', 'ttyl'],
  responses: [
    'Goodbye! ⚡ Hope to see you at ELSOC events. Stay curious, keep learning! Follow @elsoc_nith for updates. 👋',
    'See you later! 🌟 Don\'t forget to join ELSOC if you haven\'t already. We\'d love to have you in our family!',
    'Take care! 🚀 Remember: elsoc@nith.ac.in for any queries. Check out our website for more info. Bye!',
    'Bye! 💙 Thanks for chatting. Join our next workshop and let\'s meet in person! Follow us on Instagram @elsoc_nith.'
  ]
};

const help = {
  keywords: ['help', 'confused', 'don\'t understand', 'what can you do', 'options', 'menu', 'guide', 'lost'],
  responses: [
    '🤔 I can help you with tons of things!\n\n**Popular Topics:**\n• 📖 What is ELSOC?\n• 🎯 How to join?\n• 📅 Upcoming events (MATLAB, Guest Lecture, Power Systems)\n• 🚀 Our 35+ projects\n• 👥 Meet our 33-member team\n• 📞 Contact information\n• 🏆 Achievements & milestones\n• 💰 Fees & costs (spoiler: mostly free!)\n\n**Try asking:**\n"Tell me about ELSOC"\n"How can I join?"\n"What events are coming?"\n"Show me projects"\n\nWhat interests you? 😊',
    '💡 Here\'s what I know:\n\n**About Us:**\n→ Society info, history, mission\n→ Team structure & faculty\n→ 8 technical domains\n\n**Get Involved:**\n→ Membership process\n→ Upcoming workshops\n→ Project opportunities\n\n**Resources:**\n→ Lab facilities\n→ Contact details\n→ Social media links\n\n**Events:**\n→ MATLAB Workshop (Oct 30)\n→ Guest Lecture (Nov 10-16)\n→ Power Systems (Jan 12-26)\n\nJust type your question naturally! I understand casual language. 🚀'
  ]
};

const casual = {
  keywords: ['cool', 'nice', 'interesting', 'wow', 'amazing', 'sounds good'],
  responses: [
    'Right?! ⚡ ELSOC is pretty amazing. We\'re always doing something exciting. Want to join us?',
    'Glad you think so! 🌟 Check out our Instagram @elsoc_nith to see more cool stuff we do!',
    'Thanks! 🚀 We work hard to make ELSOC the best tech society. Wanna be part of it?',
    'Awesome! 😊 That\'s exactly the enthusiasm we love. Come join us - email elsoc@nith.ac.in!'
  ]
};

// Advanced keyword matching with typo tolerance
const normalizeText = (text) => {
  return text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const containsKeywords = (message, keywords) => {
  const normalized = normalizeText(message);
  return keywords.some(keyword => {
    const normalizedKeyword = normalizeText(keyword);
    return normalized.includes(normalizedKeyword);
  });
};

const getRandomResponse = (responses) => {
  return responses[Math.floor(Math.random() * responses.length)];
};

// Context-aware responses
let conversationContext = null;

export const getBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase().trim();

  // Check for greetings
  if (containsKeywords(message, greetings.keywords)) {
    conversationContext = 'greeting';
    return getRandomResponse(greetings.responses);
  }

  // Check for thanks
  if (containsKeywords(message, thanks.keywords)) {
    return getRandomResponse(thanks.responses);
  }

  // Check for goodbye
  if (containsKeywords(message, goodbye.keywords)) {
    conversationContext = null;
    return getRandomResponse(goodbye.responses);
  }

  // Check for help
  if (containsKeywords(message, help.keywords)) {
    return getRandomResponse(help.responses);
  }

  // Check for casual conversation
  if (containsKeywords(message, casual.keywords)) {
    return getRandomResponse(casual.responses);
  }

  // Check knowledge base
  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (containsKeywords(message, value.keywords)) {
      conversationContext = key;
      return getRandomResponse(value.responses);
    }
  }

  // Smart default response
  return `🤔 Hmm, I'm not 100% sure about that, but I'd love to help!\n\n**Try asking me:**\n• "What is ELSOC?"\n• "How can I join?"\n• "Tell me about upcoming events"\n• "What projects have you done?"\n• "Who are the team members?"\n• "How do I contact ELSOC?"\n\n**Quick Contact:**\n📧 elsoc@nith.ac.in\n📱 @elsoc_nith on Instagram\n\nOr just type "help" to see all topics I can discuss! ⚡`;
};

// Quick question buttons
export const getQuickQuestions = () => {
  return [
    { icon: '❓', text: 'What is ELSOC?' },
    { icon: '🎯', text: 'How can I join?' },
    { icon: '📅', text: 'Upcoming events?' },
    { icon: '📞', text: 'Contact info' },
    { icon: '👥', text: 'Meet the team' },
    { icon: '🚀', text: 'Show me projects' },
    { icon: '🏆', text: 'Achievements' },
    { icon: '💰', text: 'Fees & costs' }
  ];
};

// Contextual follow-ups
export const getFollowUpSuggestions = (lastQuery) => {
  const message = lastQuery.toLowerCase();
  
  if (containsKeywords(message, knowledgeBase.about.keywords)) {
    return ['How can I join?', 'What domains do you have?', 'Show me projects'];
  }
  
  if (containsKeywords(message, knowledgeBase.joining.keywords)) {
    return ['What are the benefits?', 'Any fees?', 'Who can join?'];
  }
  
  if (containsKeywords(message, knowledgeBase.events.keywords)) {
    return ['Tell me about MATLAB workshop', 'Guest lecture details', 'Past events'];
  }
  
  if (containsKeywords(message, knowledgeBase.projects.keywords)) {
    return ['Can I propose a project?', 'What resources available?', 'Show me domains'];
  }

  if (containsKeywords(message, knowledgeBase.team.keywords)) {
    return ['Who are the faculty?', 'How many members?', 'Can I meet them?'];
  }
  
  return ['Tell me more about ELSOC', 'Upcoming events?', 'How to contact?'];
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

// Export knowledge base
export { knowledgeBase };
