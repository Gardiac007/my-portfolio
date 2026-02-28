import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";

const certifications = [
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    date: "October 2025",
    image: "/certifications/Ethical Hacker - CISCO.png",
  },
  {
    title: "Intro to Cybersecurity",
    issuer: "Cisco",
    date: "September 2025",
    image: "/certifications/Intro to Cybersecurity - CISCO.png",
  },
  {
    title: "Certified in Cybersecurity - Pre requisites",
    issuer: "ISC2",
    date: "March 2025",
    image: "/certifications/ISC2.png",
  },
  {
    title: "WIZ Bug Bounty Masterclass",
    issuer: "WIZ",
    date: "February 2026",
    image: "/certifications/WIZ Bugbounty.png",
  },
  {
    title: "Python Developer Internship",
    issuer: "Techjays",
    date: "August 2025",
    image: "/certifications/Techjays.png",
  },
  {
    title: "NM Network Essentials",
    issuer: "Govt. of Tamilnadu",
    date: "August 2025",
    image: "/certifications/NM Network Essentials.png",
  },
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          93% { opacity: 0.6; }
          94% { opacity: 1; }
          96% { opacity: 0.8; }
        }
        @keyframes glitch {
          0% { clip-path: inset(0 0 95% 0); transform: translate(-2px,0); }
          20% { clip-path: inset(30% 0 50% 0); transform: translate(2px,0); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(1px,0); }
          100% { clip-path: inset(0 0 95% 0); transform: translate(0,0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .terminal-flicker { animation: flicker 6s infinite; }
        .hexbg {
          background-image: radial-gradient(circle, rgba(34,197,94,0.04) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .glitch-quote { position: relative; }
        .glitch-quote::before {
          content: attr(data-text); position: absolute; left: 0; top: 0;
          color: #ff4444; animation: glitch 5s infinite; opacity: 0.35;
        }
        .glitch-title { position: relative; }
        .glitch-title::before {
          content: attr(data-text); position: absolute; left: 0; top: 0;
          color: #ff4444; animation: glitch 4s infinite; opacity: 0.4;
        }
        .cert-card {
          opacity: 0;
          animation: fadeSlideUp 0.5s ease forwards;
        }
      `}</style>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center px-6 bg-transparent hexbg text-green-400 py-24"
      >
        <div className="w-full max-w-5xl space-y-16">

          {/* ── Terminal Card ── */}
          <div
            className="terminal-flicker bg-black/70 backdrop-blur-sm border border-green-500/50 rounded-lg shadow-2xl"
            style={{ boxShadow: "0 0 40px rgba(34,197,94,0.1)" }}
          >
            <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-t-lg border-b border-green-500/20">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-sm text-gray-400 font-mono">priyan@portfolio:~$</span>
              <span className="ml-auto text-xs text-green-700 font-mono tracking-widest">[ SECURE_SHELL ]</span>
            </div>

            <div className="p-6 font-mono text-sm">
              <p className="text-green-500">$ sudo ./mindset.sh</p>
              <h3
                className="glitch-quote mt-4 text-red-500 font-bold italic"
                data-text="IlRoZSBxdWlldGVyIHlvdSBiZWNvbWUsIHRoZSBtb3JlIHlvdSBhcmUgYWJsZSB0byBoZWFyLiI"
              >
                IlRoZSBxdWlldGVyIHlvdSBiZWNvbWUsIHRoZSBtb3JlIHlvdSBhcmUgYWJsZSB0byBoZWFyLiI
              </h3>

              <div className="mt-6"></div>

              <p className="text-green-500">$ whoami</p>
              <TypeAnimation
                sequence={[
                  "Priyadharsan Karunanithi", 3000,
                  "P41y@n7h3h@(ck3r", 100,
                  "Web Application Pentester", 3000,
                  "Cybersecurity Analyst", 3000,
                  "CTF Player", 3000,
                ]}
                wrapper="p"
                speed={50}
                repeat={Infinity}
                className="text-white text-lg mt-2"
              />

              <div className="mt-6"></div>

              <p className="text-green-500">$ cat summary.txt</p>
              <div className="border-t border-green-500/20 my-4" />
              <div className="mt-2 text-gray-300 leading-relaxed">
                <p>
                  Hi, I am a cybersecurity enthusiast specializing in Web Application
                  Security and Capture The Flag (CTF) player. I actively practicing
                  offensive security through hands-on labs, Vulnerable machines, and
                  competitive events.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-green-500/20 flex justify-between text-xs text-green-700 tracking-widest">
                <span>USER: <span className="text-green-500">priyan</span></span>
                <span>SHELL: <span className="text-green-500">bash</span></span>
                <span>STATUS: <span className="text-green-400">ONLINE</span></span>
              </div>
            </div>
          </div>

          {/* ── Certifications Section ── */}
          <div>
            <h2
              className="glitch-title text-center font-mono text-3xl font-bold mb-12 tracking-widest"
              data-text="══ CERTIFICATIONS.LOG ══"
              style={{ color: "#22c55e", textShadow: "0 0 20px rgba(34,197,94,0.6)" }}
            >
              ══ CERTIFICATIONS.LOG ══
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelected(cert)}
                  className="cert-card relative bg-black/70 border border-green-500/40 rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:border-green-400"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(34,197,94,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>

                  <div className="p-4 font-mono">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-green-500 text-xs">▶</span>
                      <h3 className="text-sm font-bold text-green-400 tracking-wide">{cert.title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 ml-4">{cert.issuer}</p>
                    <p className="text-xs text-gray-600 ml-4">🗓 {cert.date}</p>
                    <p className="text-xs text-green-700 mt-3 tracking-widest">[ CLICK TO EXPAND ]</p>
                  </div>

                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-green-500/60 rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-green-500/60 rounded-bl-lg" />
                </div>
              ))}
            </div>

            <div className="mt-8 font-mono text-xs text-green-700 flex justify-between px-1">
              <span>CERTS_FOUND: {certifications.length}</span>
              <span>VERIFIED: <span className="text-green-400">TRUE</span></span>
              <span>LEVEL: <span className="text-yellow-400">GROWING</span></span>
            </div>
          </div>

        </div>
      </motion.section>

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
            <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 border-b border-green-500/30">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-xs text-gray-400 font-mono">
                priyan@portfolio:~/certifications$
              </span>
              <button
                onClick={() => setSelected(null)}
                className="ml-auto text-gray-500 hover:text-green-400 font-mono text-sm"
              >
                [✕ close]
              </button>
            </div>

            <img
              src={selected.image}
              alt={selected.title}
              className="w-full object-contain max-h-[65vh]"
            />

            <div className="p-4 font-mono border-t border-green-500/20">
              <p className="text-green-400 text-sm font-bold">{selected.title}</p>
              <p className="text-gray-500 text-xs mt-1">🏢 {selected.issuer}</p>
              <p className="text-gray-600 text-xs mt-1">🗓 {selected.date}</p>
              <p className="text-green-700 text-xs mt-2 tracking-widest">STATUS: VERIFIED ✓</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}