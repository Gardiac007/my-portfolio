import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xaqdaqdb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          93% { opacity: 0.6; }
          94% { opacity: 1; }
          96% { opacity: 0.85; }
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
        .terminal-flicker { animation: flicker 6s infinite; }
        .hexbg {
          background-image: radial-gradient(circle, rgba(34,197,94,0.04) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .contact-scan { position: relative; overflow: hidden; }
        .contact-scan::after {
          content: '';
          position: absolute;
          left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(34,197,94,0.4), transparent);
          animation: scanline 4s linear infinite;
          pointer-events: none;
        }
        .glitch-title { position: relative; }
        .glitch-title::before {
          content: attr(data-text);
          position: absolute; left: 0; top: 0;
          color: #ff4444;
          animation: glitch 4s infinite;
          opacity: 0.35;
        }
        .hacker-input {
          width: 100%;
          background: black;
          border: 1px solid rgba(34,197,94,0.3);
          padding: 8px 16px;
          border-radius: 4px;
          color: #4ade80;
          font-family: monospace;
          font-size: 0.85rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .hacker-input::placeholder { color: #374151; }
        .hacker-input:focus {
          border-color: #22c55e;
          box-shadow: 0 0 10px rgba(34,197,94,0.2);
        }
        .submit-btn {
          width: 100%;
          background: transparent;
          border: 1px solid #22c55e;
          color: #22c55e;
          padding: 10px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .submit-btn:hover:not(:disabled) {
          background: #22c55e;
          color: #000;
          box-shadow: 0 0 16px rgba(34,197,94,0.5);
        }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .contact-link {
          color: #4ade80;
          text-decoration: none;
          font-family: monospace;
          font-size: 0.8rem;
          transition: color 0.2s ease, text-shadow 0.2s ease;
        }
        .contact-link:hover {
          color: #86efac;
          text-shadow: 0 0 8px rgba(34,197,94,0.5);
        }
      `}</style>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center px-6 bg-transparent hexbg text-green-400 py-20"
      >
        <div
          className="contact-scan w-full max-w-3xl bg-black/70 backdrop-blur-sm border border-green-500/40 rounded-lg"
          style={{ boxShadow: "0 0 40px rgba(34,197,94,0.08)" }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-t-lg border-b border-green-500/20">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-xs text-gray-400 font-mono">
              priyan@portfolio:~/contact$
            </span>
            <span className="ml-auto text-xs text-green-700 font-mono tracking-widest">
              [ ENCRYPTED_CHANNEL ]
            </span>
          </div>

          {/* Content */}
          <div className="p-6 font-mono">

            {/* Title */}
            <div className="mb-6">
              <p className="text-green-700 text-xs mb-2">&gt; Initializing secure connection...</p>
              <h2
                className="glitch-title text-xl font-bold tracking-widest"
                data-text="══ ESTABLISH_CONNECTION ══"
                style={{ color: "#22c55e", textShadow: "0 0 12px rgba(34,197,94,0.5)" }}
              >
                ══ ESTABLISH_CONNECTION ══
              </h2>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="text-xs text-green-700 tracking-widest block mb-1">SENDER_NAME:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="// enter your name"
                  required
                  className="hacker-input"
                />
              </div>

              <div>
                <label className="text-xs text-green-700 tracking-widest block mb-1">SENDER_EMAIL:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="// enter your email"
                  required
                  className="hacker-input"
                />
              </div>

              <div>
                <label className="text-xs text-green-700 tracking-widest block mb-1">MESSAGE_PAYLOAD:</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="// enter your message"
                  required
                  className="hacker-input resize-none"
                ></textarea>
              </div>

              {status === "success" && (
                <p className="text-green-400 text-xs tracking-wide border border-green-500/30 px-3 py-2 rounded">
                  ✅ CONNECTION_SUCCESS — Message received. I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-xs tracking-wide border border-red-500/30 px-3 py-2 rounded">
                  ❌ CONNECTION_FAILED — Please retry or contact directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="submit-btn"
              >
                {status === "sending" ? "[ TRANSMITTING... ]" : "[ CONNECT ]"}
              </button>
            </form>

            {/* Divider */}
            <div className="border-t border-green-500/20 my-6"></div>

            {/* Direct Links */}
            <p className="text-xs text-green-700 tracking-widest mb-3">DIRECT_CHANNELS:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-green-800 text-xs">[ML]</span>
                <a href="mailto:priyadharsank2005@gmail.com" className="contact-link">
                  priyadharsank2005@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-800 text-xs">[GH]</span>
                <a href="https://github.com/Gardiac007" target="_blank" rel="noreferrer" className="contact-link">
                  github.com/Gardiac007
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-800 text-xs">[LI]</span>
                <a href="https://linkedin.com/in/priyadharsankarunanithi" target="_blank" rel="noreferrer" className="contact-link">
                  linkedin.com/in/priyadharsankarunanithi
                </a>
              </div>

              <div className="mt-4 border border-red-500/30 rounded px-3 py-2 bg-red-500/5">
                <p className="text-red-500 text-xs font-bold tracking-widest">
                  ⚠ RESTRICTED_DATA — DO NOT ACCESS:
                </p>
                <p className="text-red-400/60 text-xs mt-1 font-mono">
                  'It4Aap:AKse'&~=?zJF@H';+"wG
                </p>
              </div>
            </div>

            {/* Status bar */}
            <div className="mt-6 pt-4 border-t border-green-500/20 flex justify-between text-xs text-green-800 tracking-widest">
              <span>PROTOCOL: <span className="text-green-600">HTTPS</span></span>
              <span>ENCRYPT: <span className="text-green-600">ON</span></span>
              <span>STATUS: <span className="text-green-500">READY</span></span>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}