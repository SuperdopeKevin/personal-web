import { useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { assetPath } from "../utils/assetPath";

import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import AboutMeModal from "../components/AboutMeModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  const openAbout = useCallback(() => setIsModalOpen(true), []);
  const closeAbout = useCallback(() => setIsModalOpen(false), []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src={assetPath("images/bg.png")} alt="" />
      </div>

      <div className="hero-layout">
        {/* Mobile: small 3D model in top-right corner */}
        <div className="hero-3d-mobile">
          <HeroExperience onAboutClick={openAbout} compact />
        </div>

        {/* Hero Content */}
        <header className="hero-content">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real-World</h1>
              <h1>Research & Insights</h1>
            </div>

            <p className="hero-subtitle">
              Hi, I'm Minjian &mdash; a Ph.D. Candidate in Statistics at
              the University of Missouri, passionate about bridging statistical
              theory with machine learning for biomedical and environmental
              applications.
            </p>
          </div>
        </header>

        {/* Desktop: full-size 3D model on the right */}
        <figure className="hero-3d-desktop">
          <div className="hero-3d-layout">
            <HeroExperience onAboutClick={openAbout} />
          </div>
        </figure>
      </div>

      {/* About Me Modal */}
      <AboutMeModal isOpen={isModalOpen} onClose={closeAbout} />
    </section>
  );
};

export default Hero;