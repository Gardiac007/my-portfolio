export default function Footer() {
  const links = [
    { href: "https://github.com/Gardiac007", label: "GitHub", id: "GH" },
    { href: "https://linkedin.com/in/priyadharsankarunanithi", label: "LinkedIn", id: "LI" },
    { href: "mailto:priyadharsank2005@gmail.com", label: "Email", id: "ML" },
  ];

  return (
    <>
      <style>{`
        @keyframes scanbar {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .footer-link {
          font-family: monospace;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s ease, text-shadow 0.2s ease;
          position: relative;
          padding: 2px 0;
        }
        .footer-link::before {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0%; height: 1px;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          transition: width 0.3s ease;
        }
        .footer-link:hover {
          color: #22c55e;
          text-shadow: 0 0 8px rgba(34,197,94,0.6);
        }
        .footer-link:hover::before { width: 100%; }
        .scan-shine {
          position: relative;
          overflow: hidden;
        }
        .scan-shine::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(34,197,94,0.06), transparent);
          animation: scanbar 4s linear infinite;
          pointer-events: none;
        }
      `}</style>

      <footer
        className="scan-shine w-full text-gray-400"
        style={{ background: "rgba(0,0,0,0.9)", borderTop: "1px solid rgba(34,197,94,0.25)" }}
      >
        {/* Top accent */}
        <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, #22c55e, transparent)" }} />

        <div className="w-full py-8 px-6">

          {/* Terminal prompt header */}
          <div className="text-center mb-6">
            <p className="font-mono text-xs text-gray-600 mb-1">priyan@portfolio:~/connect$</p>
            <h2
              className="font-mono text-lg font-bold tracking-widest"
              style={{ color: "#22c55e", textShadow: "0 0 12px rgba(34,197,94,0.5)" }}
            >
              ESTABLISH_CONNECTION
            </h2>
          </div>

          {/* Divider */}
          <div className="w-48 mx-auto h-px mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.4), transparent)" }} />

          {/* Links */}
          <div className="flex justify-center gap-10 mb-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="footer-link"
              >
                <span className="text-green-700 mr-1">[{link.id}]</span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom status line */}
          <div className="text-center font-mono text-xs text-gray-700 space-y-1">
            <p>
              © {new Date().getFullYear()} &nbsp;|&nbsp; Built by{" "}
              <span className="text-green-700">@priyan</span> with React & Tailwind
            </p>
            <p className="text-green-900 tracking-widest text-xs">
              ══ ALL SYSTEMS OPERATIONAL ══
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent)" }} />
      </footer>
    </>
  );
}