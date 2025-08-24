
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Import your images
import clickPhoto from '@/assets/click-photo.jpg';
import processing from '@/assets/processing.jpg';
import happyGreens from '@/assets/happy-greens.jpg';


const initialSteps = [
  { id: 1, title: '1. Take a Photo', description: "Capture a clear image of the plant leaf that you suspect is diseased.", image: clickPhoto },
  { id: 2, title: '2. Upload and Process', description: "Our AI model will analyze the image to identify the plant disease.", image: processing },
  { id: 3, title: '3. Get Results', description: "Receive an instant diagnosis and suggestions for treatment.", image: happyGreens },
];
const sliderItems = [...initialSteps, ...initialSteps.map(item => ({ ...item, id: item.id + initialSteps.length }))];

export default function HowItWorks() {
  const [items, setItems] = useState(sliderItems);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setItems(prevItems => [...prevItems.slice(1), prevItems[0]]);
    setActiveIndex((prev) => (prev + 1) % initialSteps.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setItems(() => {
      const shift = (index - 1 + initialSteps.length) % initialSteps.length;
      return [...sliderItems.slice(shift), ...sliderItems.slice(0, shift)];
    });
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">How It Works</h2>
      <div style={{ marginBottom: "2rem" }} />
      <main>
        <ul className="slider">
          {items.map((step) => (
            <li
              key={step.id}
              className="item"
              style={{ backgroundImage: `url(${step.image.src})` }}
            >
              {/* Glass background covering entire image */}
              <div className="full-glass-overlay">
                <div className="content">
                  <h2 className="title">{step.title}</h2>
                  <p className="description">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* SMALLER DOTS POSITIONED LOWER */}
        <nav className="modern-dots-nav">
          {initialSteps.map((_, index) => (
            <button
              key={index}
              className={`modern-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </nav>
      </main>

      <style jsx>{`
        .slider-wrapper {
          width: 100%;
          padding: 4rem 0;
          background-color: var(--background);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        main {
          position: relative;
          width: 100%;
          height: 60vh;
          max-height: 500px;
          min-height: 400px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.3);
          overflow: hidden;
        }

        .item {
          width: 200px;
          height: 300px;
          list-style-type: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          background-position: center;
          background-size: cover;
          border-radius: 20px;
          box-shadow: 0 20px 30px rgba(255,255,255,0.3) inset;
          transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s;
        }

        .item:nth-child(1), .item:nth-child(2) {
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          transform: none;
          border-radius: 0;
          box-shadow: none;
          opacity: 1;
        }

        .item:nth-child(3) { left: 50%; }
        .item:nth-child(4) { left: calc(50% + 220px); }
        .item:nth-child(5) { left: calc(50% + 440px); }
        .item:nth-child(6) { left: calc(50% + 660px); opacity: 0; }

        /* Glass overlay covering entire background image */
        .full-glass-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: inherit;
          opacity: 0;
          display: none;
        }

        .content {
          width: min(30vw,400px);
          position: absolute;
          top: 50%;
          left: 3rem;
          transform: translateY(-50%);
          font: 400 0.85rem helvetica,sans-serif;
          color: white;
          text-shadow: 0 3px 8px rgba(0,0,0,0.5);
        }

        .content .title {
          font-family: 'arial-black', Arial, sans-serif;
          text-transform: uppercase;
          font-weight: 900;
          font-size: 1.2rem;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
          letter-spacing: 0.5px;
        }

        .content .description {
          line-height: 1.7;
          margin: 1rem 0 1.5rem;
          font-size: 0.8rem;
          font-weight: 400;
        }

        .item:nth-of-type(2) .full-glass-overlay {
          display: block;
          animation: show 0.75s ease-in-out 0.3s forwards;
        }

        @keyframes show {
          0% {
            opacity: 0;
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }

        /* SMALLER DOTS POSITIONED LOWER */
        .modern-dots-nav {
          position: absolute;
          bottom: 1rem; /* Moved down from 2rem to 1rem */
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 0.5rem; /* Reduced gap between dots */
          user-select: none;
          padding: 0.4rem 0.8rem; /* Smaller padding */
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.1),
            0 1px 4px rgba(0, 0, 0, 0.05);
        }

        .modern-dot {
          width: 10px;  /* Reduced from 16px */
          height: 10px; /* Reduced from 16px */
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .modern-dot::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modern-dot:hover {
          transform: scale(1.2);
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.1),
            0 0 0 2px rgba(255, 255, 255, 0.1); /* Smaller hover ring */
        }

        .modern-dot:hover::before {
          width: 4px; /* Smaller inner dot */
          height: 4px;
        }

        .modern-dot.active {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          transform: scale(1.3);
          box-shadow: 
            0 3px 12px rgba(16, 185, 129, 0.3),
            0 0 0 2px rgba(16, 185, 129, 0.1); /* Smaller active ring */
        }

        .modern-dot.active::before {
          width: 3px; /* Smaller center dot */
          height: 3px;
          background: rgba(255, 255, 255, 0.9);
        }

        /* Smaller pulse animation for active dot */
        .modern-dot.active::after {
          content: '';
          position: absolute;
          top: -2px; /* Adjusted for smaller dot */
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 1px solid rgba(16, 185, 129, 0.4); /* Thinner border */
          border-radius: 50%;
          animation: pulse-ring 2s ease-out infinite;
        }

        @keyframes pulse-ring {
          0% {
            opacity: 1;
            transform: scale(0.8);
          }
          100% {
            opacity: 0;
            transform: scale(1.4);
          }
        }

        @media (width > 650px) and (width < 900px) {
          .content .title { 
            font-size: 1rem;
            font-weight: 900;
          }
          .content .description { font-size: 0.7rem; }

          .item {
            width: 160px;
            height: 270px;
          }

          .item:nth-child(3) { left: 50%; }
          .item:nth-child(4) { left: calc(50% + 170px); }
          .item:nth-child(5) { left: calc(50% + 340px); }
          .item:nth-child(6) { left: calc(50% + 510px); opacity: 0; }

          .modern-dots-nav {
            bottom: 0.8rem;
            gap: 0.4rem;
            padding: 0.35rem 0.7rem;
          }

          .modern-dot {
            width: 9px;
            height: 9px;
          }
        }

        @media (width < 650px) {
          .content .title { 
            font-size: 0.9rem;
            font-weight: 900;
            letter-spacing: 0.3px;
          }
          .content .description { font-size: 0.65rem; }

          .item {
            width: 130px;
            height: 220px;
          }

          .item:nth-child(3) { left: 50%; }
          .item:nth-child(4) { left: calc(50% + 140px); }
          .item:nth-child(5) { left: calc(50% + 280px); }
          .item:nth-child(6) { left: calc(50% + 420px); opacity: 0; }

          .modern-dots-nav {
            bottom: 0.6rem;
            gap: 0.3rem;
            padding: 0.3rem 0.6rem;
          }

          .modern-dot {
            width: 8px;
            height: 8px;
          }
        }
      `}</style>
    </div>
  );
}