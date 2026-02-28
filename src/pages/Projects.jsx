import { useState, useEffect } from "react";

export default function Projects() {
  const [bootText, setBootText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const fullBootText = "> Accessing project repository...\n> Decrypting file headers...\n> 3 projects loaded. Rendering...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setBootText(fullBootText.slice(0, i));
      i++;
      if (i > fullBootText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setVisible(true);
          setLoaded(true);  // ← add this line
        }, 400);
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: "PROJ-001",
      title: "Web Application Security Testing",
      desc: "Scanned and analysed vulnerable web application using Nessus and Metasploit tool.",
      tech: ["Nessus", "Metasploit", "Burpsuite"],
      type: "OFFENSIVE",
      typeColor: "#ff4444",
    },
    {
      id: "PROJ-002",
      title: "Built a SOC Home Lab",
      desc: "Built a SOC Home lab using Wazuh SIEM and simulated a bruteforce attack using Kali Linux and monitored the Windows system.",
      tech: ["Wazuh", "Kali Linux", "Log Analysis"],
      type: "DEFENSIVE",
      typeColor: "#153bfa",
    },
    {
      id: "PROJ-003",
      title: "Blog API with CRUD Operations",
      desc: "Made a Blog API backend that provides CRUD operations with Django REST Framework using JWT authentication.",
      tech: ["Python", "DRF", "JWT"],
      type: "DEVELOPMENT",
      typeColor: "#f2f838",
    },
  ];

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
          96% { opacity: 0.8; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes glitch {
          0% { clip-path: inset(0 0 95% 0); transform: translate(-2px,0); }
          20% { clip-path: inset(30% 0 50% 0); transform: translate(2px,0); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(1px,0); }
          100% { clip-path: inset(0 0 95% 0); transform: translate(0,0); }
        }
        .cursor::after { content:'█'; animation: blink 1s step-end infinite; color:#22c55e; }
        .terminal-flicker { animation: flicker 6s infinite; }
        .hexbg {
          background-image: radial-gradient(circle, rgba(34,197,94,0.04) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .proj-card { opacity:0; position:relative; overflow:hidden; }
        .proj-card.visible { animation: fadeSlideUp 0.5s ease forwards; }
  
        .glitch-title { position:relative; }
        .glitch-title::before {
          content: attr(data-text); position:absolute; left:0; top:0;
          color:#ff4444; animation: glitch 4s infinite; opacity:0.4;
        }
      `}</style>

      <section className="min-h-screen bg-transparent hexbg text-white py-20 px-6">

        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-black/80 border border-green-500/40 rounded-lg p-4 font-mono text-xs text-green-400 text-left">
            <pre className="whitespace-pre-wrap cursor">{bootText}</pre>
          </div>
        </div>
        {loaded && (
          <>
        <h2
          className="glitch-title text-center font-mono text-3xl font-bold mb-12 tracking-widest"
          data-text="══ PROJECT_VAULT.SH ══"
          style={{ color: "#22c55e", textShadow: "0 0 20px rgba(34,197,94,0.6)" }}
        >
          ══ PROJECT_VAULT.SH ══
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`proj-card bg-black/70 border border-green-500/30 rounded-lg p-6 font-mono transition-all duration-300 hover:border-green-400 ${visible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(34,197,94,0.2)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-600 tracking-widest">{project.id}</span>
                <span className="text-xs font-bold tracking-widest px-2 py-0.5 rounded border"
                  style={{ color: project.typeColor, borderColor: project.typeColor + "60" }}>
                  {project.type}
                </span>
              </div>

              <div className="flex items-start gap-2 mb-3">
                <span className="text-green-500 mt-0.5">▶</span>
                <h3 className="text-green-400 font-bold text-base leading-snug">{project.title}</h3>
              </div>

              <div className="border-t border-green-500/20 mb-3" />
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded border border-green-500/30 text-green-600 tracking-wide">
                    {t}
                  </span>
                ))}
              </div>

              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-green-500/50 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-green-500/50 rounded-bl-lg" />
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-10 font-mono text-xs text-green-700 flex justify-between px-1">
          <span>PROJECTS_LOADED: {projects.length}</span>
          <span>VAULT: <span className="text-green-400">UNLOCKED</span></span>
          <span>CLEARANCE: <span className="text-red-400">LEVEL_5</span></span>
        </div>
          </>
        )}
      </section>
    </>
  );
}