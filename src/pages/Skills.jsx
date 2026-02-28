import { useState, useEffect } from "react";

const skillCategories = [
  {
    category: "[ OFFENSIVE SECURITY ]",
    color: "#ff4444",
    glow: "rgba(255,68,68,0.4)",
    icon: "⚔",
    skills: [
      "Web Application Security Testing",
      "Vulnerability Assessment",
      "OWASP Top 10",
      "Metasploit",
      "SQLmap",
      "Burp Suite",
    ],
  },
  {
    category: "[ TOOLS & LEARNINGS ]",
    color: "#22c55e",
    glow: "rgba(34,197,94,0.4)",
    icon: "🛠",
    skills: [
      "Kali Linux",
      "Nmap",
      "Wireshark",
      "Nessus",
      "HackTheBox",
      "TryHackMe",
    ],
  },
  {
    category: "[ SIEM & DEFENSE ]",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.4)",
    icon: "🛡",
    skills: [
      "Wazuh SIEM",
      "Splunk",
    ],
  },
  {
    category: "[ DEVELOPMENT ]",
    color: "#facc15",
    glow: "rgba(250,204,21,0.4)",
    icon: "💻",
    skills: [
      "Python Programming",
      "Bash Scripting",
      "Python FastAPI",
      "DRF",
      "MySQL",
      "PostgreSQL",
      "Docker Containerization",
      "Machine Learning",
    ],
  },
];

function SkillBar({ skill, color, glow, index }) {
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setWidth(Math.floor(Math.random() * 30) + 50);
    }, index * 120);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-mono text-gray-300 tracking-wider">{skill}</span>
        <span className="text-xs font-mono" style={{ color }}>
          {visible ? `${width}%` : "..."}
        </span>
      </div>
      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${width}%` : "0%",
            background: color,
            boxShadow: `0 0 8px ${glow}`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [bootText, setBootText] = useState("");
  const [loaded, setLoaded] = useState(false);

  const fullBootText = "> Initializing skill matrix...\n> Loading modules...\n> Access granted.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setBootText(fullBootText.slice(0, i));
      if (i >= fullBootText.length) {
        clearInterval(interval);
        setTimeout(() => setLoaded(true), 400); // 400ms pause after boot for dramatic effect
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          93% { opacity: 0.6; }
          94% { opacity: 1; }
          96% { opacity: 0.8; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .terminal-flicker { animation: flicker 6s infinite; }
        .cursor::after {
          content: '█';
          animation: blink 1s step-end infinite;
          color: #22c55e;
        }
        .hexbg {
          background-image: radial-gradient(circle, rgba(34,197,94,0.05) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .reveal { animation: fadeSlideUp 0.5s ease forwards; }
      `}</style>

      <section className="min-h-screen bg-transparent text-white py-20 px-6 hexbg">

        {/* Boot terminal */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-black/80 border border-green-500/40 rounded-lg p-4 font-mono text-xs text-green-400 text-left">
            <pre className="whitespace-pre-wrap cursor">{bootText}</pre>
          </div>
        </div>

        {/* Everything below only renders after boot finishes */}
        {loaded && (
          <>
            {/* Title */}
            <h2
              className="reveal text-center font-mono text-3xl font-bold mb-12 tracking-widest"
              style={{ color: "#22c55e", textShadow: "0 0 20px rgba(34,197,94,0.6)" }}
            >
              ══ SKILL_MATRIX.SH ══
            </h2>

            {/* Category Grid */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              {skillCategories.map((cat, ci) => (
                <div
                  key={ci}
                  className="reveal relative bg-black/70 border rounded-lg p-5 cursor-pointer transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: activeCategory === ci ? cat.color : "rgba(34,197,94,0.3)",
                    boxShadow: activeCategory === ci ? `0 0 20px ${cat.glow}` : "none",
                    animationDelay: `${ci * 0.12}s`,
                    opacity: 0,
                  }}
                  onClick={() => setActiveCategory(activeCategory === ci ? null : ci)}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{cat.icon}</span>
                      <h3
                        className="font-mono text-sm font-bold tracking-widest"
                        style={{ color: cat.color, textShadow: `0 0 8px ${cat.glow}` }}
                      >
                        {cat.category}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-gray-500">
                      [{cat.skills.length} modules]
                    </span>
                  </div>

                  {/* Skill Bars */}
                  <div className="space-y-3">
                    {cat.skills.map((skill, si) => (
                      <SkillBar
                        key={si}
                        skill={skill}
                        color={cat.color}
                        glow={cat.glow}
                        index={si + ci * 3}
                      />
                    ))}
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r rounded-tr-lg"
                    style={{ borderColor: cat.color }} />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l rounded-bl-lg"
                    style={{ borderColor: cat.color }} />
                </div>
              ))}
            </div>

            {/* Footer status bar */}
            <div className="reveal max-w-5xl mx-auto mt-10 font-mono text-xs text-green-600 flex justify-between px-1">
              <span>MODULES_LOADED: <span className="text-red-500">{skillCategories.reduce((a, c) => a + c.skills.length, 0)}</span></span>
              <span>STATUS: <span className="text-green-500">ONLINE</span></span>
              <span>CLEARANCE: <span className="text-red-500">BEGINNER</span></span>
            </div>
          </>
        )}
      </section>
    </>
  );
}