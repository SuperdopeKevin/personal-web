import { assetPath } from "../utils/assetPath";

const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Research",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "ML", imgPath: assetPath("images/words/ideas.svg") },
  { text: "Statistics", imgPath: assetPath("images/words/concepts.svg") },
  { text: "Bioinformatics", imgPath: assetPath("images/words/designs.svg") },
  { text: "Research", imgPath: assetPath("images/words/code.svg") },
  { text: "ML", imgPath: assetPath("images/words/ideas.svg") },
  { text: "Statistics", imgPath: assetPath("images/words/concepts.svg") },
  { text: "Bioinformatics", imgPath: assetPath("images/words/designs.svg") },
  { text: "Research", imgPath: assetPath("images/words/code.svg") },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Research Projects" },
  { value: 800, suffix: "K+", label: "Data Points Analyzed" },
  { value: 5, suffix: "+", label: "ML Frameworks" },
  { value: 2, suffix: "", label: "Degrees (BS + PhD)" },
];

const logoIconsList = [
  {
    imgPath: assetPath("images/branding/company-1.png"),
  },
  {
    imgPath: assetPath("images/branding/company-2.png"),
  },
];

const abilities = [
  {
    imgPath: assetPath("images/skills/seo.png"),
    title: "Statistical Rigor",
    desc: "Grounded in advanced statistical theory — GLMs, mixed models, survival analysis — with rigorous model diagnostics and validation workflows.",
  },
  {
    imgPath: assetPath("images/skills/chat.png"),
    title: "Reproducible Research",
    desc: "Every pipeline is version-controlled, containerized, and documented. From LaTeX reports to R Markdown notebooks, results are always traceable.",
  },
  {
    imgPath: assetPath("images/skills/time.png"),
    title: "Scalable ML Pipelines",
    desc: "Building end-to-end machine learning systems that handle 800K+ records, from data preprocessing to model deployment and evaluation.",
  },
];

const techStackImgs = [
  {
    name: "Python",
    imgPath: assetPath("images/tech/python.svg"),
  },
  {
    name: "R",
    imgPath: assetPath("images/tech/r-lang.png"),
  },
  {
    name: "PyTorch",
    imgPath: assetPath("images/tech/pytorch.png"),
  },
  {
    name: "scikit-learn",
    imgPath: assetPath("images/tech/scikit.png"),
  },
  {
    name: "Git",
    imgPath: assetPath("images/tech/git.svg"),
  },
];

const techStackIcons = [
  {
    name: "Python",
    modelPath: assetPath("models/python-transformed.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "R & Bioconductor",
    modelPath: assetPath("models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "PyTorch",
    modelPath: assetPath("models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & LaTeX",
    modelPath: assetPath("models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "scikit-learn",
    modelPath: assetPath("models/node-transformed.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
];

const expCards = [
  {
    review: "As a Ph.D. student in Statistics at Mizzou, Minjian is developing predictive models that integrate statistical theory with modern machine learning for real-world biomedical and environmental data.",
    imgPath: assetPath("images/experience/exp1.png"),
    logoPath: assetPath("images/experience/logo1.png"),
    title: "Ph.D. Researcher in Statistics",
    date: "Aug 2024 — Present",
    responsibilities: [
      "Built spatio-temporal ML pipelines for long-lead wildfire risk forecasting using PCA, HLLE, Laplacian Eigenmaps, XGBoost, ESN, and LSTM models.",
      "Developed large-scale credit risk classifiers (Elastic-Net, Gradient Boosting, Random Forest, MLP) on 800K+ loan records, achieving ROC-AUC > 0.91.",
      "Applied CART, Bagging, BART, and feedforward neural networks for regression and classification tasks with rigorous cross-validation.",
      "Serving as Teaching Assistant for undergraduate statistics courses; passed Ph.D. Qualifying Exam.",
    ],
    tech: "R · Python · scikit-learn · PyTorch · XGBoost",
  },
  {
    review: "At AstraZeneca, Minjian built a comprehensive GWAS pipeline integrating TCGA cancer genomics data to identify genetic drivers of chromosomal instability — a key phenotype for drug response.",
    imgPath: assetPath("images/experience/exp2.png"),
    logoPath: assetPath("images/experience/logo2.png"),
    title: "Bioinformatics Research Intern",
    date: "AstraZeneca · Summer 2025",
    responsibilities: [
      "Engineered an end-to-end GWAS pipeline processing TCGA BRCA multi-omics data (somatic mutations, germline genotypes, gene expression, copy-number) for 926 patients.",
      "Implemented three GWAS methods — MLM/FarmCPU (GAPIT), Bayesian BayesC (BGLR), and eRD-GWAS/TWAS — regressing CIN phenotype across somatic and germline markers.",
      "Developed CIN phenotype scoring from copy-number segments + tumor purity, integrating real ASCETS R package for independent aneuploidy quantification.",
      "Validated pipeline with TP53 emerging as #1 hit (P=8.2e-45, modelFreq=1.00) across two independent statistical engines.",
    ],
    tech: "R (GAPIT, BGLR, tidyverse) · Python · GWAS · TCGA · CIN",
  },
  {
    review: "Minjian designed and implemented an Agentic GFlowNet pipeline for diverse gene subset discovery, combining reinforcement learning with LLM-guided planning for biomarker identification.",
    imgPath: assetPath("images/experience/exp3.png"),
    logoPath: assetPath("images/experience/logo3.png"),
    title: "ML Research — Gene Discovery",
    date: "2025",
    responsibilities: [
      "Architected an end-to-end Agentic GFlowNet pipeline: Manager (LLM planning) → GFlowNet (diverse sampling) → R/limma (statistical evaluation) → Critic (feedback loop).",
      "Built modular Python package with pluggable LLM client (mock → real API swap), R-backed reward evaluation via subprocess bridge, and outer-loop orchestration.",
      "Implemented diverse subset sampler using GFlowNet for biomarker discovery, with reward curves and diversity metrics for pipeline validation.",
    ],
    tech: "Python · GFlowNet · R/limma · LLM Agents · PyTorch",
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: assetPath("images/experience/logo1.png"),
  },
  {
    name: "logo2",
    imgPath: assetPath("images/experience/logo2.png"),
  },
  {
    name: "logo3",
    imgPath: assetPath("images/experience/logo3.png"),
  },
];

const testimonials = [];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: assetPath("images/social/linkedin.svg"),
    link: "https://www.linkedin.com/in/minjian-li-457b0a322",
  },
  {
    name: "email",
    imgPath: assetPath("images/social/email.svg"),
    link: "mailto:ml254@umsystem.edu",
  },
  {
    name: "github",
    imgPath: assetPath("images/social/github.svg"),
    link: "https://github.com",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};