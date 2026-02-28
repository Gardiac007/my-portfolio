import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/ctfs", label: "CTFs" },
    { to: "/labs", label: "Labs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          93% { opacity: 0.7; }
          94% { opacity: 1; }
          96% { opacity: 0.85; }
        }
        @keyframes scanbar {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .nav-flicker { animation: flicker 8s infinite; }
        .nav-link-item {
          position: relative;
          font-family: monospace;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 2px 0;
        }
        .nav-link-item::before {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0%; height: 1px;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          transition: width 0.3s ease;
        }
        .nav-link-item:hover,
        .nav-link-item.active {
          color: #22c55e;
          text-shadow: 0 0 8px rgba(34,197,94,0.7);
        }
        .nav-link-item:hover::before,
        .nav-link-item.active::before { width: 100%; }
        .resume-btn {
          font-family: monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          border: 1px solid #22c55e;
          color: #22c55e;
          background: transparent;
          padding: 4px 12px;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .resume-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent);
          animation: scanbar 2s linear infinite;
        }
        .resume-btn:hover {
          background: #22c55e;
          color: #000;
          box-shadow: 0 0 14px rgba(6, 251, 96, 0.75);
        }
        .title-glow {
          font-family: monospace;
          letter-spacing: 0.15em;
          color: #0eee60;
          text-shadow: 0 0 10px rgba(0, 242, 89, 0.84), 0 0 20px rgb(34, 197, 94);
        }
      `}</style>

      <nav
        className="fixed top-0 left-0 w-full z-50"
        style={{ background: "rgba(0,0,0,0.85)", borderBottom: "1px solid rgba(34,197,94,0.2)", backdropFilter: "blur(8px)" }}
      >
        {/* Top accent line */}
        <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, #22c55e, transparent)" }} />

        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-gray-600">root@kali:~#</span>
            <h1 className="title-glow flicker text-base font-bold">PRIYADHARSAN KARUNANITHI</h1>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center title-glow gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link-item ${location.pathname === link.to ? "active" : ""}`}
              >
                {location.pathname === link.to && <span className="mr-1">›</span>}
                {link.label}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download="Priyadharsan_Karunanithi_Resume.pdf"
              className="resume-btn ml-2"
            >
              [RESUME.PDF]
            </a>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.3), transparent)" }} />
      </nav>
    </>
  );
}