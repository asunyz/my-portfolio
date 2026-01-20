import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
  Mail, Linkedin, Youtube, Menu, X, ExternalLink, 
  ChevronRight, Github, BookOpen, Music, Gamepad2, 
  Code, AlertTriangle, Download
} from 'lucide-react';

/* =============================================================================
  1. CONFIGURATION & CONTENT DATA
  -----------------------------------------------------------------------------
*/

const DATA = {
  profile: {
    name: "Yuezhou (Angelica) Sun",
    title: "Engineer & Researcher @ Intersection of Cognition & Computation",
    email: "angelica.yz.sun@gmail.com",
    linkedin: "https://www.linkedin.com/in/yuezhou-sun-9428321b2",
    lastUpdated: "Jan 2026",
    images: {
      photo: "personal_photo.jpg",
      icon: "icon_1.png"
    }
  },
  
  sections: [
    {
      id: "about",
      title: "About Me",
      type: "toggle-section",
      content: {
        professional: {
          text: `I’m a **software engineer** and aspiring **researcher** working at the intersection of human cognition and computational systems. I hold an **M.S. in Computer Science from Stanford** and a **B.S. in Computer Science + Cognitive Science from UC San Diego**, and I’ve served as a teaching assistant for multiple AI and machine learning courses. My current job is in **fintech**, where I develop and maintain a mission-critical data platform.

As I prepare to pursue a PhD, I’m broadly exploring research directions concerned with the **externalities of modern AI**. My top interests include building **AI tools that empower human experience rather than just productivity**, promoting **AI literacy**, and combating **AI-generated misinformation**. My interdisciplinary background and real-world engineering experience shape how I approach research: grounded, curious, and human-centered. Ultimately, I want to ensure **technological advancement translates into tangible improvements in people’s quality of life**.`
        },
        personal: {
          text: `I am a **“lesser” computer programmer** trying to understand humans, and a **“lesser” human researcher** who spends far too much time writing code. At heart, I’m a **serial hobbyist**, dabbling in everything from pharmaceutics to music theory, building indie games, translating literature, and running TTRPG campaigns.

Professionally, I’m the **stubborn debugger** who keeps asking **why***.
Why is the data missing? Why does the system fail only on the hundredth run?
And most critically: **why are we living through a massive productivity boom in this AI era, yet people are working longer hours and struggling with existential fatigue?**

I’m returning to research because I can’t let the last question go unanswered. I want to use my **eclectic interests, engineering grit, and idealistic curiosity** to help build technologies that **make it easier for people to explore and enjoy what they love.**.`
        }
      }
    },
    {
      id: "education",
      title: "Education",
      type: "timeline",
      items: [
        {
          title: "Stanford University",
          subtitle: "M.S. in Computer Science | Concentration in Artificial Intelligence",
          date: "2022",
          courseWorkTitle: "Selected Course Work",
          courseWork: [
            "**Linguistics & Computation**: Spoken Language Processing, Large Language Models, Conversational Virtual Assistants.",
            "**Human-Centric AI**: Intro to HCI Design, Neural Network Models of Cognition, Deep Multi-Task & Meta Learning."
          ]
        },
        {
          title: "University of California, San Diego (UCSD)",
          subtitle: "B.S. in Computer Science & B.S. in Cognitive Science",
          date: "2020",
          badge: "Magna Cum Laude",
          courseWorkTitle: "Selected Course Work",
          courseWork: [
            "**CS & Theory:** Design & Analysis of Algorithms, Theory of Computation, Advanced Data Structures, Database Systems.",
            "**Linguistics & Neuro:** Phonetics, Syntax I, Cognitive Linguistics, Statistical NLP, Systems Neuroscience."
          ]
        }
      ]
    },
    {
      id: "research",
      title: "Research Experience",
      type: "timeline",
      items: [
        {
          title: "Graduate Research Project | Stanford University",
          subtitle: "Advisor: Dr. Matei Zaharia",
          description: `**Topic: Architecture-Agnostic Neural Network Compression**

Investigated methods to decouple parameter representations from specific network architectures. Achieved up to 7.2x compression of ResNet-50 on ImageNet without significant accuracy loss.`,
          link: { text: "Read the Paper (arXiv)", url: "https://arxiv.org/abs/2111.10320" }
        },
        {
          title: "Undergraduate Honors Thesis | UC San Diego",
          subtitle: "Advisors: Dr. Zhuowen Tu, Dr. Benjamin Bergen",
          description: `**Topic: Dictionary Interface for Neural Word Segmentation**

Designed an embedding method to dynamically inject lexicon knowledge into neural word segmentation networks, mitigating the need to retrain models on novel text domains.`,
          link: { text: "Read the Thesis (PDF)", url: "https://cogsci.ucsd.edu/undergraduates/honors-program/Sun,-Yuezhou_Honors-thesis.pdf" }
        },
        {
          title: "Previous Lab Experience | UC San Diego",
          description: `**Machine Learning, Perception & Cognition Lab (Dr. Zhuowen Tu):** Contributed to deep learning algorithms for wireframe detection and single-image 3D reconstruction.

**Language Cognition Lab (Dr. Benjamin Bergen):** Assisted in designing and running behavioral experiments to analyze human language processing mechanisms.`
        }
      ]
    },
    {
      id: "experience",
      title: "Professional Experience",
      type: "timeline",
      items: [
        {
          title: "Associate Software Engineer",
          subtitle: "JP Morgan & Chase",
          date: "2023 – Present",
          description: `**Core Responsibility:** I serve as the technical owner of a mission-critical mortgage securities data system (50k+ lines of code) responsible for processing high-volume mortgage security data in a large-scale PostgreSQL environment.

**Engineering & Optimization:** Responsible for the full lifecycle of the legacy codebase (Python, C++, Perl, Java). I perform deep root-cause analysis to devise architectural solutions that improve data quality, processing speed, and code maintainability.

**Proactive Domain Learning:** Passed [CFA Level I](https://credentials.cfainstitute.org/beb489eb-82b2-4985-9e45-ee75bb191fe9#acc.L7WxREgy) to bridge the gap between engineering implementation and financial theory, allowing me to better collaborate with trading desks and researchers.

**System Modernization:** Executed the migration of core components from Python 2 to Python 3 and supported the transition from Sybase to cloud-hosted PostgreSQL.

**Collaboration:** Coordinated with Quantum Research, DevOps, and external vendors to troubleshoot complex data discrepancies and train new team members on system architecture.`
        }
      ]
    },
    {
      id: "teaching",
      title: "Teaching Experience",
      type: "timeline",
      items: [
        {
          title: "Teaching Assistant",
          subtitle: "Stanford University",
          date: "Sep 2020 – Mar 2022",
          courses: [
            "**CS 229 Machine Learning.** Instructors: Andrew Ng, Tengyu Ma, Chris Re",
            "**CS 224N Natural Language Processing.** Instructor: Christopher Manning",
            "**CS 124 From Language to Information.** Instructor: Dan Jurafsky"
          ]
        },
        {
          title: "AP Computer Science Instructor",
          subtitle: "Academic Pi",
          date: "Jan 2021 – May 2022",
          description: `Taught Java and CS fundamentals to high school students.`
        },
        {
          title: "Teaching Apprentice",
          subtitle: "UC San Diego",
          date: "Jan 2018 – Mar 2018",
          description: `**COGS 1 Intro to Cognitive Science.** Instructor: Mary Boyle.`
        }
      ]
    },
    {
      id: "projects",
      title: "Creative Side Quests",
      type: "grid",
      items: [
        {
          title: "Indie Game Development",
          badge: "Ongoing",
          badgeColor: "bg-green-100 text-[#006600]",
          image: "game_screenshot.jpg",
          description: "A casual, kid-friendly game inspired by Tetris, Match 3, and fantasy web fiction tropes. I am building this from scratch to learn the Godot game engine and game loop logic.",
          link: { text: "Play on browser", url: "https://asunyz.github.io/CultistMatcher/" }
        },
        {
          title: "Bilibili Content Creation",
          badge: "Experimental",
          badgeColor: "bg-stone-200 text-stone-600",
          image: "bilibili_video_cover.jpg",
          description: "A collection of video essays and experiments. A highlight is a 7-hour guided reading of transformative English fandom literature for ESL learners, warmly received with over 290k views.",
          link: { 
            text: "View Episode 1", 
            url: "https://www.bilibili.com/video/BV1TasWeiEdT", 
            advisory: {
              title: "External Link Advisory",
              text: `You are proceeding to a video on Bilibili intended for adult ESL learners.

This video features a word-by-word explanation of English grammar and narrative flow using a popular work of fan fiction.

**Please Note:** The source text contains **NSFW (Not Safe For Work)** material. The video discusses these sections openly to explain the vocabulary and emotional context to non-native speakers.`
            }
          }
        },
        {
          title: "Song Writing",
          badge: "Experimental",
          badgeColor: "bg-stone-200 text-stone-600",
          image: "song_cover.jpg",
          description: "A one-week experimental expedition with friends. My contribution focused on lyrics and backseat editing.",
          link: { text: "Listen on Bilibili", url: "https://www.bilibili.com/video/BV1qxKAe5EBE" }
        },
        {
          title: "Web Novel Translation",
          badge: "On Hold",
          badgeColor: "bg-yellow-100 text-yellow-800",
          image: "translated_novel_cover.jpg",
          description: "I enjoy reading and translating – the puzzle game of finding, and sometimes coining, the perfect words to convey not just literal meaning, but also the author’s tone and cultural undertone. Currently translating a fantasy novel: \"Since I Started a Secret Cult.\"",
          link: { text: "Read on AO3", url: "https://archiveofourown.org/works/69672631?view_full_work=true" }
        }
      ]
    },
    {
      id: "skills",
      title: "Skills",
      type: "columns",
      items: [
        { category: "Software Dev", list: ["Python", "C/C++", "Java", "SQL", "Bash", "AWS Lambda", "AWS Aurora", "Cloudflare Workers"] },
        { category: "AI & Research", list: ["PyTorch", "HuggingFace", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "LaTeX", "Academic Writing"] },
        { category: "Creativity", list: ["Image Editing", "Video Editing", "Creative Writing"] },
        { category: "Spoken", list: ["English (Fluent)", "Mandarin (Native)", "Japanese (Intermediate)"] }
      ]
    }
  ]
};

/* =============================================================================
  2. UTILITY COMPONENTS
  -----------------------------------------------------------------------------
*/

// --- Markdown Parser ---
const RichText = ({ text }) => {
  if (!text) return null;
  const paragraphs = text.split('\n\n');

  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, pIndex) => {
        const parts = paragraph.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
        
        return (
          <p key={pIndex} className="leading-relaxed text-stone-600">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <span key={i} className="font-semibold text-[#b35e25]">{part.slice(2, -2)}</span>;
              }
              if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
                const [_, label, url] = part.match(/\[(.*?)\]\((.*?)\)/) || [];
                return (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-[#006600] underline decoration-green-200 hover:decoration-[#006600] transition-all">
                    {label}
                  </a>
                );
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
};

// --- Modal Component ---
const AdvisoryModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 overflow-hidden animate-fadeIn">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 text-amber-600">
             <AlertTriangle size={28} strokeWidth={2.5} />
             <h3 className="text-xl font-bold">{data.title}</h3>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600 p-1 rounded-full hover:bg-stone-100 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="text-stone-700 mb-8 border-l-4 border-amber-200 pl-4 py-1">
          <RichText text={data.text} />
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl font-bold text-stone-600 hover:bg-stone-100 transition-colors">
            Go Back
          </button>
          <a 
            href={data.targetUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-bold text-white bg-[#b35e25] hover:bg-[#9a4d1c] shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            Proceed to Link <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Timeline Item Wrapper ---
const TimelineItem = ({ children, last = false }) => (
  <div className={`relative pl-8 border-l-2 ${last ? 'border-transparent' : 'border-stone-200'} pb-12 last:pb-0`}>
    <div className="absolute -left-[9px] top-1.5 w-[18px] h-[18px] rounded-full bg-stone-50 border-4 border-[#006600] shadow-sm"></div>
    {children}
  </div>
);

// --- Section Header ---
const SectionHeader = ({ title }) => (
  <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-[#006600] mb-8 tracking-tight">
    {title}
  </h2>
);

/* =============================================================================
  3. SUB-COMPONENTS
  -----------------------------------------------------------------------------
*/

const Navigation = ({ activeSection, scrollToSection, hidden }) => {
  if (hidden) return null;

  return (
    <div className="max-w-[90rem] mx-auto h-full relative">
      <div className="absolute top-0 bottom-0 left-0 w-64 flex flex-col items-start py-20 pl-8 pointer-events-auto">
        <nav className="space-y-5 flex flex-col items-start w-full">
          {DATA.sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative py-1 transition-all duration-300 text-left ${
                activeSection === item.id 
                  ? 'text-[#b35e25] font-bold translate-x-2' 
                  : 'text-stone-400 hover:text-stone-200 font-medium'
              }`}
            >
              <span className="relative z-10 text-lg">{item.title}</span>
              {activeSection === item.id && (
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#b35e25]" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

const Hero = ({ profile }) => (
  <header className="flex flex-col items-center text-center pb-12 pt-8 lg:pt-0">
    <div className="mb-6 relative group">
      <div className="absolute -inset-1 bg-gradient-to-tr from-[#006600] to-[#b35e25] rounded-full opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
      <img 
        src={profile.images.icon} 
        alt="Icon" 
        className="w-24 h-24 object-contain relative z-10 drop-shadow-sm"
      />
    </div>
    
    <h1 className="text-4xl md:text-5xl font-extrabold text-[#006600] mb-4 tracking-tight">
      {profile.name}
    </h1>
    
    <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-stone-500 uppercase tracking-wider">
      <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-[#b35e25] transition-colors group">
        <span className="p-1.5 bg-stone-100 rounded-full group-hover:bg-orange-50 transition-colors"><Mail size={14} /></span> Email
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#b35e25] transition-colors group">
         <span className="p-1.5 bg-stone-100 rounded-full group-hover:bg-orange-50 transition-colors"><Linkedin size={14} /></span> LinkedIn
      </a>
      <a href="resume.pdf" download className="flex items-center gap-2 hover:text-[#b35e25] transition-colors group">
        <span className="p-1.5 bg-stone-100 rounded-full group-hover:bg-orange-50 transition-colors"><Download size={14} /></span> Resume
      </a>
    </div>
  </header>
);

const ToggleSection = ({ sectionData }) => {
  const [mode, setMode] = useState('professional');
  const currentContent = sectionData.content[mode];

  return (
    <section 
      id={sectionData.id} 
      // /* <--- ADJUST SECTION PADDING HERE */
      // 'mb-24' adds 6rem (96px) of bottom margin. Increase/decrease this number (e.g., mb-16, mb-32) to change spacing.
      className="scroll-mt-32 mb-24"
    >
      <SectionHeader title={sectionData.title} />

      <TimelineItem>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-2/5 md:w-52 shrink-0 relative group">
            <div className="absolute inset-0 bg-[#b35e25] rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform"></div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] md:h-auto relative z-10 bg-white">
              <img 
                src={DATA.profile.images.photo} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 animate-fadeIn">
            {/* Toggle Moved Here */}
            <div className="flex bg-stone-200 p-1.5 rounded-full relative mb-6 w-max shadow-inner">
              <div 
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-out ${
                  mode === 'personal' ? 'translate-x-[100%]' : 'translate-x-0'
                }`}
              />
              {['professional', 'personal'].map((m) => (
                <button 
                  key={m}
                  onClick={() => setMode(m)}
                  className={`relative z-10 px-5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${
                    mode === m ? 'text-[#006600]' : 'text-stone-500 hover:text-stone-700'
                  } ${mode === 'personal' && m === 'personal' ? '!text-[#b35e25]' : ''}`}
                >
                  {m}
                </button>
              ))}
            </div>

            <RichText text={currentContent.text} />
          </div>
        </div>
      </TimelineItem>
    </section>
  );
};

const StandardSection = ({ sectionData, onOpenAdvisory }) => {
  const renderItem = (item, index) => {
    // Specific Layout for Grid Items (Projects)
    if (sectionData.type === 'grid') {
      const handleLinkClick = (e) => {
        if (item.link?.advisory) {
          e.preventDefault();
          onOpenAdvisory({ ...item.link.advisory, targetUrl: item.link.url });
        }
      };

      return (
        <TimelineItem key={index}>
          <div className="flex flex-col md:flex-row gap-6 group">
            <div className="w-2/5 md:w-56 shrink-0">
              <div className="rounded-xl overflow-hidden shadow-md border border-stone-100 aspect-video md:aspect-[4/3] relative">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={item.title} 
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col h-full">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="text-xl font-bold text-stone-800 group-hover:text-[#006600] transition-colors">{item.title}</h3>
                {item.badge && (
                  <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold shadow-sm ${item.badgeColor || 'bg-stone-100 text-stone-600'}`}>
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="text-stone-600 mb-2 leading-relaxed flex-grow">
                 <RichText text={item.description} />
              </div>
              {item.link && (
                 <div className="mt-1">
                  <a 
                    href={item.link.url} 
                    onClick={handleLinkClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#006600] hover:underline hover:text-[#004d00] transition-colors"
                  >
                    {item.link.text} <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </TimelineItem>
      );
    }

    // Specific Layout for Columns (Skills)
    if (sectionData.type === 'columns') {
       return (
          <div key={index} className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xs font-black text-[#006600] uppercase tracking-widest mb-3 border-b border-stone-100 pb-2">
              {item.category}
            </h4>
            <ul className="text-sm text-stone-600 space-y-2 font-medium">
              {item.list.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
       );
    }

    // Default Timeline Layout
    return (
      <TimelineItem key={index}>
        <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
          <h3 className="text-lg font-bold text-stone-800">{item.title}</h3>
          {item.date && (
            <span className="text-sm font-semibold text-stone-400 bg-stone-100 px-2 py-1 rounded">
              {item.date}
            </span>
          )}
           {item.subtitle && !item.date && (
            <span className="text-sm text-stone-500 italic">{item.subtitle}</span>
          )}
        </div>
        
        {item.subtitle && item.date && (
           <p className="text-stone-700 font-medium mb-1">{item.subtitle}</p>
        )}

        {item.badge && (
           <p className="text-sm text-[#006600] mb-3 font-bold">{item.badge}</p>
        )}

        {/* Regular Description */}
        {item.description && (
          <div className="text-sm text-stone-600 mb-2">
            <RichText text={item.description} />
          </div>
        )}

        {/* Course Work Specific Block */}
        {item.courseWorkTitle && (
          <div className="mt-4 mb-0">
            <p className="font-bold text-black mb-1">{item.courseWorkTitle}</p>
            <div className="space-y-1">
              {item.courseWork.map((course, i) => (
                <div key={i} className="text-sm text-stone-600">
                  <RichText text={course} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Courses Block (for Teaching Assistant items) */}
        {item.courses && (
          <div className="mt-4 mb-0">
            <div className="space-y-1">
              {item.courses.map((course, i) => (
                <div key={i} className="text-sm text-stone-600">
                  <RichText text={course} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Downplayed Link Style */}
        {item.link && (
          <div className="mt-1">
            <a 
              href={item.link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#006600] hover:underline hover:text-[#004d00] transition-colors"
            >
              {item.link.text} <ExternalLink size={12} />
            </a>
          </div>
        )}
      </TimelineItem>
    );
  };

  return (
    <section 
      id={sectionData.id} 
      // /* <--- ADJUST SECTION PADDING HERE */
      // 'mb-24' adds 6rem (96px) of bottom margin. Increase/decrease this number (e.g., mb-16, mb-32) to change spacing.
      className="scroll-mt-32 mb-24"
    >
      <SectionHeader title={sectionData.title} />
      {sectionData.type === 'columns' ? (
        <TimelineItem last={true}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
            {sectionData.items.map((item, index) => renderItem(item, index))}
          </div>
        </TimelineItem>
      ) : (
        <div className="mt-2 space-y-4">
          {sectionData.items.map((item, index) => renderItem(item, index))}
        </div>
      )}
    </section>
  );
};

/* =============================================================================
  4. MAIN APP COMPONENT
  -----------------------------------------------------------------------------
*/

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Responsive Sidebar Logic
  const [showDesktopSidebar, setShowDesktopSidebar] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      setShowDesktopSidebar(window.innerWidth >= 1450);
    };
    
    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Advisory Modal State
  const [advisoryOpen, setAdvisoryOpen] = useState(false);
  const [advisoryData, setAdvisoryData] = useState(null);

  // Add scroll tracking to update the navigation bar's active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = DATA.sections.map((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return { id: section.id, top: rect.top };
        }
        return null;
      }).filter(Boolean);

      const currentSection = sections.find((section) => section.top >= 0 && section.top <= window.innerHeight / 2);
      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const handleOpenAdvisory = (data) => {
    setAdvisoryData(data);
    setAdvisoryOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-stone-800 font-sans text-stone-800 selection:bg-[#b35e25] selection:text-white overflow-x-hidden">
      
      {/* Modals */}
      <AdvisoryModal 
        isOpen={advisoryOpen} 
        onClose={() => setAdvisoryOpen(false)} 
        data={advisoryData} 
      />

      {/* Desktop Navigation - Hidden if screen is too narrow */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-40">
        <Navigation 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
          // lastUpdated prop removed
          hidden={!showDesktopSidebar}
        />
      </div>

      {/* Mobile/Compact Header */}
      <div className={`fixed top-0 left-0 right-0 h-16 bg-stone-50 shadow-md z-50 flex items-center justify-between px-6 transition-transform duration-300 ${!showDesktopSidebar ? 'translate-y-0' : 'lg:-translate-y-full'}`}>
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
        <span className="font-bold text-[#006600] truncate max-w-[200px]">{DATA.profile.name}</span>
      </div>

      {/* Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-stone-50 shadow-2xl p-8 flex flex-col transform transition-transform animate-slideInLeft">
            <div className="flex justify-between items-center mb-10">
              <span className="font-bold text-xl text-[#006600]">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-stone-400 hover:text-stone-800"><X size={24} /></button>
            </div>
            <nav className="flex flex-col space-y-2">
              {DATA.sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-lg font-medium px-4 py-3 rounded-xl transition-all ${
                    activeSection === item.id 
                      ? 'bg-green-50 text-[#006600] shadow-sm' 
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Content Paper */}
      <main className={`relative z-10 w-full lg:max-w-4xl mx-auto bg-stone-50 min-h-screen shadow-[0_0_50px_rgba(0,0,0,0.15)] flex flex-col px-6 py-12 md:px-16 lg:px-20 lg:py-20 lg:my-0 transition-all duration-300 ${!showDesktopSidebar ? 'mt-16' : ''}`}>
        
        <Hero profile={DATA.profile} />
        <hr className="border-stone-200 mb-12" />

        {/* Dynamic Section Rendering */}
        {DATA.sections.map((section) => (
          <React.Fragment key={section.id}>
            {section.type === 'toggle-section' ? (
              <ToggleSection sectionData={section} />
            ) : (
              <StandardSection 
                sectionData={section} 
                onOpenAdvisory={handleOpenAdvisory} 
              />
            )}
          </React.Fragment>
        ))}

        {/* --- META INFO / FOOTER --- */}
        <footer className="w-full text-right mt-16 text-xs text-stone-400 border-t border-stone-100 pt-8">
          <p className="font-medium">Last updated: {DATA.profile.lastUpdated}</p>
          <p>Website generated with Gemini</p>
        </footer>

      </main>

       <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
           from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
           from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;