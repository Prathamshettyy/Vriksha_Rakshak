"use client"

import { ScrollAnimation } from '@/components/scroll-animation'; // Import the new component

const CheckIcon = () => (
  <svg
    className="h-6 w-6 text-green-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default function About() {
  const features = [
    "Predict plant diseases from images",
    "Suggest remedies for identified diseases",
    "User-friendly web interface",
    "RESTful API for integration",
    "Real-time application development",
  ];

  return (
<main className="static-gradient min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="container mx-auto">
        <ScrollAnimation>
          <div className="text-center">
            <div className="mb-8"></div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-text">
              About Vriksha Rakshak
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
              Fusing technology with agriculture to safeguard plant health.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="my-16 p-8 md:p-12 rounded-2xl about-section">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-white/80 md:text-justify">
              Vriksha Rakshak is a plant disease prediction and remedy suggestion
              application. It leverages a powerful Convolutional Neural Network (CNN) to analyze plant images, providing swift insights into potential diseases and their treatments. Our goal is to empower farmers and gardeners with an accessible tool to identify plant diseases and receive immediate, actionable remedies.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-12">
              Core Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <ScrollAnimation key={feature}>
                  <div className="about-card h-full">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20 mb-4">
                      <CheckIcon />
                    </div>
                    <p className="font-semibold text-foreground">{feature}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  );
}