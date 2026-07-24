import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { assetPath } from "../utils/assetPath";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const gflownetRef = useRef(null);
  const azRef = useRef(null);
  const wildfireRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each project showcase
    const cards = [gflownetRef.current, azRef.current, wildfireRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={gflownetRef} className="first-project-wrapper">
            <div className="image-wrapper bg-[#0a1628]">
              <img src={assetPath("images/project1.png")} alt="Agentic GFlowNet Gene Discovery" />
            </div>
            <div className="text-content">
              <h2>
                Agentic GFlowNet for Gene Subset Discovery
              </h2>
              <p className="text-white-50 md:text-xl">
                An end-to-end ML pipeline combining GFlowNet (diverse subset
                sampling), LLM-guided planning, and R/limma statistical
                evaluation for biomarker discovery. Modular architecture with
                pluggable LLM backend and subprocess-bridged R integration.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Python", "GFlowNet", "PyTorch", "R/limma", "LLM Agents"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={azRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src={assetPath("images/project2.png")}
                  alt="AstraZeneca GWAS Pipeline"
                />
              </div>
              <h2>AstraZeneca — TCGA GWAS Pipeline for CIN</h2>
              <p className="text-white-50 text-sm mt-2">
                Multi-omics GWAS: MLM/FarmCPU, BayesC, & eRD-GWAS across 926
                BRCA patients. TP53 validated as #1 hit.
              </p>
            </div>

            <div className="project" ref={wildfireRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src={assetPath("images/project3.png")} alt="Wildfire Risk Forecasting" />
              </div>
              <h2>Spatio-Temporal Wildfire Risk Forecasting</h2>
              <p className="text-white-50 text-sm mt-2">
                Nonlinear dimension reduction + XGBoost, ESN, LSTM for
                long-lead fire weather prediction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
