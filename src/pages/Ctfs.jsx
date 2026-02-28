import { useState, useEffect } from "react";

export default function CTFs() {
  const [selected, setSelected] = useState(null);
  const [bootText, setBootText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const fullBootText = "> Scanning CTF records...\n> Decrypting participation logs...\n> 3 entries found. Displaying...";

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

  const ctfs = [
    {
      title: "Hackquest 2k26",
      date: "February 2026",
      image: "/ctf-certs/Hackquest 2k26.png",
    },
    {
      title: "Eschaton CTF",
      date: "January 2026",
      image: "/ctf-certs/Eschaton_CTF.png",
    },
    {
      title: "Advent of Cyber 2025 - Tryhackme",
      date: "December 2025",
      image: "/ctf-certs/AoC 2025.png",
    },
    {
      title: "Huntress CTF",
      date: "October 2025",
      image: "/ctf-certs/Huntress CTF.png",
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
          92% { opacity: 1; }
          93% { opacity: 0.6; }
          94% { opacity: 1; }
          96% { opacity: 0.8; }
          97% { opacity: 1; }
        }
        @keyframes scanline {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glitch {
          0% { clip-path: inset(0 0 95% 0); transform: translate(-2px, 0); }
          20% { clip-path: inset(30% 0 50% 0); transform: translate(2px, 0); }
          40% { clip-path: inset(60% 0 20% 0); transform: translate(-1px, 0); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(1px, 0); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 0); }
          100% { clip-path: inset(0 0 95% 0); transform: translate(0, 0); }
        }
        .cursor::after {
          content: '█';
          animation: blink 1s step-end infinite;
          color: #22c55e;
        }
        .terminal-flicker { animation: flicker 6s infinite; }
        .card-scan { position: relative; overflow: hidden; }
        .card-scan::after {
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(34,197,94,0.6), transparent);
          animation: scanline 2.5s linear infinite;
          pointer-events: none;
        }
        .hexbg {
          background-image: radial-gradient(circle, rgba(34,197,94,0.04) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .glitch-title { position: relative; }
        .glitch-title::before {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          color: #ff4747;
          animation: glitch 4s infinite;
          opacity: 0.5;
        }
        .ctf-card {
          opacity: 0;
        }
        .ctf-card.visible {
          animation: fadeSlideUp 0.5s ease forwards;
        }
      `}</style>

      <section className="min-h-screen bg-transparent hexbg text-white py-20 px-6">

        {/* Boot terminal */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-black/80 border border-green-500/40 rounded-lg p-4 font-mono text-xs text-green-400 text-left">
            <pre className="whitespace-pre-wrap cursor">{bootText}</pre>
          </div>
        </div>
        {loaded && (
          <>
        {/* Title */}
        <h2
          className="glitch-title text-center font-mono text-3xl font-bold mb-12 tracking-widest"
          data-text="══ CTF_RECORDS.LOG ══"
          style={{ color: "#22c55e", textShadow: "0 0 20px rgba(34,197,94,0.6)" }}
        >
          ══ CTF_RECORDS.LOG ══
        </h2>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ctfs.map((ctf, index) => (
            <div
              key={index}
              onClick={() => setSelected(ctf)}
              className={`ctf-card card-scan bg-black/70 border border-green-500/40 rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:border-green-400 ${visible ? "visible" : ""}`}
              style={{
                animationDelay: `${index * 0.15}s`,
                boxShadow: "none",
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(34,197,94,0.3)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >

              {/* Image */}
              <div className="overflow-hidden h-48">
                <img
                  src={ctf.image}
                  alt={ctf.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Info */}
              <div className="p-4 font-mono">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-green-500 text-xs">▶</span>
                  <h3 className="text-sm font-bold text-green-400 tracking-wide">{ctf.title}</h3>
                </div>
                <p className="text-xs text-gray-500 ml-4">🗓 {ctf.date}</p>
                <p className="text-xs text-green-700 mt-3 tracking-widest">[ CLICK TO DECRYPT ]</p>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-green-500/60 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-green-500/60 rounded-bl-lg" />
            </div>
          ))}
        </div>

        {/* More to come */}
        <div className="max-w-5xl mx-auto mt-16 text-center font-mono">
          <div className="inline-block border border-green-500/30 rounded-lg px-8 py-4 bg-black/50">
            <p className="text-green-600 text-sm tracking-widest animate-pulse">
              █ █ █ &nbsp; MORE ENTRIES INCOMING &nbsp; █ █ █
            </p>
          </div>
        </div>

        {/* Status bar */}
        <div className="max-w-5xl mx-auto mt-6 font-mono text-xs text-green-700 flex justify-between px-1">
          <span>RECORDS_FOUND: {ctfs.length}</span>
          <span>ACCESS: <span className="text-green-400">GRANTED</span></span>
          <span>MODE: <span className="text-red-400">OFFENSIVE</span></span>
        </div>
          </>
        )}
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-black border border-green-500 rounded-lg overflow-hidden max-w-3xl w-full"
            style={{ boxShadow: "0 0 40px rgba(34,197,94,0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal terminal header */}
            <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 border-b border-green-500/30">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-xs text-gray-400 font-mono">
                priyan@ctf:~/ctfs/{selected.id}$
              </span>
              <button
                onClick={() => setSelected(null)}
                className="ml-auto text-gray-500 hover:text-green-400 font-mono text-sm"
              >
                [✕ close]
              </button>
            </div>

            {/* Image */}
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full object-contain max-h-[65vh]"
            />

            {/* Info */}
            <div className="p-4 font-mono border-t border-green-500/20">
              <p className="text-green-400 text-sm font-bold">{selected.title}</p>
              <p className="text-gray-500 text-xs mt-1">🗓 {selected.date}</p>
              <p className="text-green-700 text-xs mt-2 tracking-widest">STATUS: VERIFIED ✓</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}