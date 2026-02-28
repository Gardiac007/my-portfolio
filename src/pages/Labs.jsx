import { useState, useEffect } from "react";

export default function Labs() {
  const [bootText, setBootText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const fullBootText = "> Connecting to lab environment...\n> Authenticating credentials...\n> 4 lab records found. Loading...";

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

  const labs = [
    {
      id: "LAB-001",
      title: "Vulnhub",
      platform: "The Planet: Mercury, Earth",
      skills: ["SQL Injection", "SSH", "Privilege Escalation", "Reverse Shell", "VHost Enumeration"],
      type: "MACHINE",
      typeColor: "#ff4444",
      status: "PWNED",
    },
    {
      id: "LAB-002",
      title: "PortSwigger Web Security Academy",
      platform: "File Upload Vulnerabilities",
      skills: ["File Upload Exploitation", "Filter Bypassing"],
      type: "WEB",
      typeColor: "#22c55e",
      status: "COMPLETED",
    },
    {
      id: "LAB-003",
      title: "PortSwigger Web Security Academy",
      platform: "Common Server-side Vulnerabilities",
      skills: ["Path Traversal", "SSRF", "SQLi"],
      type: "WEB",
      typeColor: "#22c55e",
      status: "COMPLETED",
    },
    {
      id: "LAB-004",
      title: "HTB Academy",
      platform: "Core Modules",
      skills: ["Linux Fundamentals", "Web Requests", "JS Obfuscation", "Web Fuzzing"],
      type: "LEARNING",
      typeColor: "#38bdf8",
      status: "COMPLETED",
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
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        .cursor::after { content:'█'; animation: blink 1s step-end infinite; color:#22c55e; }
        .terminal-flicker { animation: flicker 6s infinite; }
        .hexbg {
          background-image: radial-gradient(circle, rgba(34,197,94,0.04) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .lab-card { opacity:0; position:relative; overflow:hidden; }
        .lab-card.visible { animation: fadeSlideUp 0.5s ease forwards; }
        
        .glitch-title { position:relative; }
        .glitch-title::before {
          content: attr(data-text); position:absolute; left:0; top:0;
          color:#ff4444; animation: glitch 4s infinite; opacity:0.4;
        }
        .status-dot { animation: pulse-dot 2s ease-in-out infinite; }
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
          data-text="══ LAB_SESSIONS.LOG ══"
          style={{ color: "#22c55e", textShadow: "0 0 20px rgba(34,197,94,0.6)" }}
        >
          ══ LAB_SESSIONS.LOG ══
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {labs.map((lab, index) => (
            <div
              key={index}
              className={`lab-card bg-black/70 border border-green-500/30 rounded-lg p-6 font-mono transition-all duration-300 hover:border-green-400 ${visible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(34,197,94,0.2)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-600 tracking-widest">{lab.id}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest px-2 py-0.5 rounded border"
                    style={{ color: lab.typeColor, borderColor: lab.typeColor + "60" }}>
                    {lab.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <div
                      className="status-dot w-2 h-2 rounded-full"
                      style={{ backgroundColor: lab.status === "PWNED" ? "#ff4444" : "#22c55e" }}
                    />
                    <span className="text-xs" style={{ color: lab.status === "PWNED" ? "#ff4444" : "#22c55e" }}>
                      {lab.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="flex items-start gap-2 mb-1">
                <span className="text-green-500 mt-0.5">▶</span>
                <h3 className="text-green-400 font-bold text-base leading-snug">{lab.title}</h3>
              </div>

              {/* Platform */}
              {lab.platform && (
                <p className="text-gray-500 text-xs ml-4 mb-3 tracking-wide">
                  / {lab.platform}
                </p>
              )}

              <div className="border-t border-green-500/20 mb-3" />

              {/* Skills */}
              <p className="text-xs text-gray-600 mb-2 tracking-widest">SKILLS:</p>
              <div className="flex flex-wrap gap-2">
                {lab.skills.map((s, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded border border-green-500/30 text-green-600 tracking-wide">
                    {s}
                  </span>
                ))}
              </div>

              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-green-500/50 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-green-500/50 rounded-bl-lg" />
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-10 font-mono text-xs text-green-700 flex justify-between px-1">
          <span>LABS_LOGGED: {labs.length}</span>
          <span>ENV: <span className="text-green-400">SANDBOXED</span></span>
          <span>MODE: <span className="text-red-400">ACTIVE</span></span>
        </div>
          </>
        )}
      </section>
    </>
  );
}