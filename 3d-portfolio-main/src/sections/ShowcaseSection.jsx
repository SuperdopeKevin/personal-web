import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { assetPath } from "../utils/assetPath";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const azRef = useRef(null);
  const gflownetRef = useRef(null);
  const gfnTheoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [azRef.current, gflownetRef.current, gfnTheoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
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
          {/* PROJECT 1: AstraZeneca CIN (main card) */}
          <div ref={azRef} className="first-project-wrapper">
            <div className="image-wrapper bg-[#0a1628]">
              <img src={assetPath("images/project1.png")} alt="CIN Driver Gene Discovery — AstraZeneca" />
            </div>
            <div className="text-content">
              <h2>CIN Driver Gene Discovery — AstraZeneca</h2>
              <p className="text-white-50 md:text-xl">
                Built a multi-omics GWAS pipeline integrating TCGA data
                across 926 BRCA patients to identify genetic drivers of
                chromosomal instability (CIN). Three statistical engines
                (MLM/FarmCPU, BayesC, eRD-GWAS/TWAS) converged on TP53
                as the top hit (P=8.2×10⁻⁴⁵).
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["R (GAPIT, BGLR)", "Python", "GWAS", "TCGA", "CIN"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* PROJECT 2: Agentic GFlowNet */}
            <div className="project" ref={gflownetRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src={assetPath("images/project2.png")}
                  alt="Agentic GFlowNet Gene Discovery"
                />
              </div>
              <h2>Agentic GFlowNet for Gene Subset Discovery</h2>
              <p className="text-white-50 text-sm mt-2">
                End-to-end pipeline combining GFlowNet diverse sampling,
                LLM-guided planning, and R/limma statistical evaluation
                for reproducible biomarker discovery.
              </p>
            </div>

            {/* PROJECT 3: GFlowNet theory */}
            <div className="project" ref={gfnTheoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src={assetPath("images/project3.png")} alt="Wildfire Risk Forecasting" />
              </div>
              <h2>GFlowNet for Diverse Subset Discovery</h2>
              <p className="text-white-50 text-sm mt-2">
                GFlowNets learn to sample diverse, high-reward candidates
                from combinatorial spaces — achieving superior diversity
                metrics over greedy selection for precision medicine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;