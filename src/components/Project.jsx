import React, { useState, useEffect, useRef } from 'react';
import sentinaiImage from '../assets/sentinai.png';
import schemesetuImage from '../assets/schemesetu.png';

const projects = [
  {
    name: 'SentinAI — Autonomous AI Code Security & PR Review System',
    title: (
      <>
        SENTINAI <span className="font-light italic text-gray-300 lowercase font-serif">ai</span><br />
        CODE SECURITY PLATFORM
      </>
    ),
    description: "An autonomous AI-powered code security and PR review platform that combines AST-based vulnerability scanning with a Retrieval-Augmented Generation (RAG) pipeline for cross-file repository context. Built with Spring Boot and Google Gemini 2.5 Pro via LangChain4j, it uses PgVector (768-dim embeddings) for semantic code retrieval, SHA-256 zero-trust API key authentication, and Redis-backed rate limiting with local fallback. Integrates directly with GitHub via HMAC-verified webhooks to automatically audit pull requests, and ships with a React 19 + TypeScript console featuring a split-pane PR Diff Studio for reviewing findings.",
    image: sentinaiImage,
    github: "https://github.com/rachit-890/AICodeReviewBot",
    demo: "https://ai-code-review-bot-eight.vercel.app/#features",
    tech: "Backend: Spring Boot, GitHub API, Google Gemini 2.5 Pro (via LangChain4j) | RAG: PgVector (768-dim embeddings), circuit-breaker fallback embedding store | Auth/Rate limiting: SHA-256 zero-trust API key auth, Redis rate limiting with thread-safe local fallback | Security: HMAC-SHA256 GitHub Webhook verification | Persistence: PostgreSQL + Flyway | Frontend: React 19 + TypeScript, Vite, Framer Motion (58/42 split-pane PR Diff Studio) | DevOps: Docker, CI/CD via Render (backend), Vercel (frontend), GitHub Actions"
  },
  {
    name: 'SchemeSetu — AI Government Welfare Scheme Eligibility Navigator',
    title: (
      <>
        SCHEMESETU <span className="font-light italic text-gray-300 lowercase font-serif">ai</span><br />
        ELIGIBILITY NAVIGATOR
      </>
    ),
    description: "A RAG-based eligibility matching platform that helps citizens discover government welfare schemes — subsidies, scholarships, pensions — relevant to them through a guided questionnaire and plain-language explanations. Built on Java 21 and Spring Boot 3 with Spring AI, using Claude for conversational generation and a dedicated embedding provider (OpenAI text-embedding-3-small, with Ollama as a local alternative) for semantic scheme matching over a PostgreSQL + PgVector store, with Redis for caching. Deployed as a containerized full-stack app (React/Vite frontend, Spring Boot backend) via Vercel and Render.",
    image: schemesetuImage,
    github: "https://github.com/rachit-890/SchemeSetu",
    demo: "https://scheme-setu-kappa.vercel.app/",
    tech: "Backend: Java 21, Spring Boot 3 | AI: Spring AI (spring-ai-starter-model-anthropic) with Claude for chat/generation, separate embedding provider (OpenAI text-embedding-3-small, or Ollama locally) | Data: PostgreSQL + PgVector, Redis | Frontend: React/Vite | DevOps: Docker, deployed via Render (backend) + Vercel (frontend)"
  }
];

const Project = ({ onCtaClick }) => {
  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">

        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
            Backend development projects showcasing AI integration, microservices architecture, and full-stack capabilities with modern Java and Spring Boot ecosystem.
          </p>
          <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={proj.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-16 w-full group`}>

              {/* Image Side */}
              <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-sm flex items-center justify-center">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-6">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10">
                  {proj.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors inline-flex items-center gap-2">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer px-6 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
