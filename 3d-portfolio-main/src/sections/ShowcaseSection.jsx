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
                Designed and implemented an end-to-end Agentic GFlowNet
                pipeline for diverse gene subset discovery, combining
                reinforcement learning (GFlowNet) with LLM-guided planning
                for biomarker identification. The pipeline features a modular
                Python package with a Manager (LLM planning), GFlowNet
                sampler (diverse candidate generation), R/limma backend
                (statistical evaluation via subprocess bridge), and a Critic
                (feedback loop). This architecture enables diverse, high-quality
                gene subsets to be discovered from high-dimensional genomic
                data, with reward curves and diversity metrics validating
                each run.
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
              <h2>CIN Driver Gene Discovery — AstraZeneca</h2>
              <p className="text-white-50 text-sm mt-2">
                Chromosomal instability (CIN) is a hallmark of aggressive
                cancers, driving tumor heterogeneity, drug resistance, and
                poor patient outcomes. Identifying the genetic drivers of CIN
                is critical for developing targeted therapies. At AstraZeneca,
                I built a comprehensive GWAS pipeline integrating TCGA
                multi-omics data (somatic mutations, germline genotypes,
                gene expression, copy-number) across 926 BRCA patients.
                Three independent statistical engines — MLM/FarmCPU (GAPIT),
                Bayesian BayesC (BGLR), and eRD-GWAS/TWAS — were applied to
                regress CIN phenotypes, with TP53 emerging as the #1 hit
                (P=8.2×10⁻⁴⁵) across all methods.
              </p>
            </div>

            <div className="project" ref={wildfireRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src={assetPath("images/project3.png")} alt="Wildfire Risk Forecasting" />
              </div>
              <h2>GFlowNet for Diverse Subset Discovery</h2>
              <p className="text-white-50 text-sm mt-2">
                Generative Flow Networks (GFlowNets) learn to sample diverse,
                high-reward candidates from combinatorial spaces — ideal for
                gene subset discovery where both quality and diversity matter.
                I developed a modular Python package implementing an Agentic
                GFlowNet architecture: an LLM-based Manager decomposes the
                discovery goal into sub-tasks, the GFlowNet sampler proposes
                diverse gene subsets, an R/limma backend evaluates statistical
                significance, and a Critic provides feedback to guide the
                search. This closed-loop system achieves superior diversity
                metrics compared to greedy selection, enabling reproducible
                biomarker discovery for precision medicine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;