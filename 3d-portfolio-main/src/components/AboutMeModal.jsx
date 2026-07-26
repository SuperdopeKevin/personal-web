import { useEffect, useCallback } from "react";
import { socialImgs } from "../constants";
import { assetPath } from "../utils/assetPath";

const AboutMeModal = ({ isOpen, onClose }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* Profile photo */}
        <div className="modal-avatar">
          <img
            src={assetPath("images/profile/profile.png")}
            alt="Profile"
            className="modal-avatar-img"
          />
        </div>

        {/* Name & Title */}
        <h2 className="modal-name">Minjian Li</h2>
        <p className="modal-title">
          Ph.D. Candidate in Statistics — University of Missouri
        </p>

        {/* Bio */}
        <div className="modal-bio">
          <p>
            I'm a Ph.D. student in Statistics at the University of Missouri,
            passionate about bridging statistical theory with modern machine
            learning. My research spans spatio-temporal modeling, bioinformatics,
            and diverse subset discovery using GFlowNets.
          </p>
          <p>
            Previously, I interned at AstraZeneca where I built GWAS pipelines
            integrating TCGA cancer genomics data to identify genetic drivers
            of chromosomal instability. I hold a B.S. degree and am currently
            pursuing my Ph.D. with a focus on scalable, reproducible research.
          </p>
        </div>

        {/* CV Download */}
        <a
          href={assetPath("files/cv.pdf")}
          download
          className="modal-cv-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>

        {/* Social Links */}
        <div className="modal-socials">
          {socialImgs.map((social, index) => (
            <a
              key={index}
              href={social.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-social-icon"
              title={social.name}
            >
              <img src={social.imgPath} alt={social.name} />
            </a>
          ))}
        </div>

        {/* Bottom hint */}
        <p className="modal-hint">Click the avatar anytime to reopen this</p>
      </div>
    </div>
  );
};

export default AboutMeModal;