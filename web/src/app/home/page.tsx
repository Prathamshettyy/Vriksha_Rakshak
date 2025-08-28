"use client";

import { ImageBox } from "@/components/image-box";
import { siteConfig } from "@/config/site";
import { useEffect, useRef } from "react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll(".scroll-animate");
    animateElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
 <main className="static-gradient flex min-h-screen flex-col items-center justify-between px-4 py-12 sm:px-6 md:px-8 md:py-24">
        {/* Header Section */}
      <div className="text-center mb-auto animate-fade-in-up">
        <div className="h-8" />
        <div className="h-8" />
        <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl animate-slide-in-from-top">
          <span className="gradient-text">{siteConfig.name}</span> - Plant
          Disease Detection
        </h1>
        <h2 className="scroll-m-20 pb-2 text-xl md:text-2xl font-semibold tracking-tight transition-colors first:mt-0 animate-fade-in delay-500">
          <span className="gradient-text">Prakriti Ki Suraksha, </span> Machine
          Learning Ke Saath
        </h2>
      </div>

      <div className="h-8" />

      {/* Main Upload & Result Section */}
      <div className="scroll-animate mb-auto rounded-lg w-full max-w-4xl overflow-auto">
        <div className="animate-fade-in-up delay-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 dark:border-gray-700/20">
          {/* Upload Instructions */}
          <div className="scroll-animate text-center mb-8">
            <div className="animate-scale-in delay-700 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="animate-fade-in delay-800 text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Upload Plant Image for Analysis
            </h3>
            <p className="animate-fade-in delay-900 text-gray-600 dark:text-gray-400">
              Take a clear photo of the plant leaf or upload from your device
            </p>
          </div>

          {/* ImageBox Component */}
          <div className="scroll-animate">
            <div className="animate-slide-in-right delay-1000 overflow-auto max-w-full break-words">
              <ImageBox />
            </div>
          </div>

          {/* Add your result display div here */}
          <div
            id="result"
            className="w-full overflow-x-auto break-words mt-6"
            style={{ maxWidth: "100%" }}
          >
            {/* Your result content goes here */}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="scroll-animate w-full max-w-6xl text-center mt-16 overflow-auto">
        <h3 className="animate-fade-in delay-1100 text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
          How It Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="animate-fade-in-up delay-1200 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift overflow-auto break-words">
            <div className="text-4xl mb-4">📸</div>
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
              1
            </div>
            <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
              Upload Image
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Take or upload a clear photo of the plant
            </p>
          </div>

          <div className="animate-fade-in-up delay-1400 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift overflow-auto break-words">
            <div className="text-4xl mb-4">🔍</div>
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
              2
            </div>
            <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
              AI Analysis
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              The ML model analyzes the image for diseases
            </p>
          </div>

          <div className="animate-fade-in-up delay-1600 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift overflow-auto break-words">
            <div className="text-4xl mb-4">💊</div>
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
              3
            </div>
            <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
              Get Treatment
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Receive diagnosis and treatment recommendations
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
