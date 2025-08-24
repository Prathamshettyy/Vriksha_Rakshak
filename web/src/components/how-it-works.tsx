"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Import your images
import clickPhoto from '@/assets/click-photo.jpg';
import processing from '@/assets/processing.jpg';
import happyGreens from '@/assets/happy-greens.jpg';

// Initial steps
const initialSteps = [
  { id: 1, title: "1. Take a Photo", description: "Capture a clear image of the plant leaf that you suspect is diseased.", image: clickPhoto },
  { id: 2, title: "2. Upload and Process", description: "Our AI model will analyze the image to identify the plant disease.", image: processing },
  { id: 3, title: "3. Get Results", description: "Receive an instant diagnosis and suggestions for treatment.", image: happyGreens },
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
    <div className="slider-component-wrapper">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">How It Works</h2>
      <main>
        <ul className='slider'>
          {items.map((step) => (
            <li
              key={step.id}
              className='item'
              style={{ backgroundImage: `url(${step.image.src})` }}
            >
              <div className='content'>
                <h2 className='title'>{step.title}</h2>
                <p className='description'>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Carousel Dots */}
        <nav className="nav-dots">
          {initialSteps.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </nav>
      </main>

      <style jsx>{`
        .slider-component-wrapper {
          width: 100%;
          padding: 4rem 0;
          background-color: var(--background);
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
        .slider {
          position: relative;
          width: 100%;
          height: 100%;
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
          box-shadow: 0 20px 30px rgba(0,0,0,0.3) inset;
          transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s;
        }
        .item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.2) 60%, transparent 100%);
          border-radius: 20px;
          transition: border-radius 0.75s;
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
        .item:nth-child(1)::before, .item:nth-child(2)::before {
          border-radius: 0;
        }
        .item:nth-child(3) { left: 50%; }
        .item:nth-child(4) { left: calc(50% + 220px); }
        .item:nth-child(5) { left: calc(50% + 440px); }
        .item:nth-child(6) { left: calc(50% + 660px); opacity: 0; }
        
        .content {
          width: min(30vw, 400px);
          position: relative;
          z-index: 2;
          padding: 3rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font: 400 0.85rem helvetica, sans-serif;
          color: white;
          text-shadow: 0 3px 8px rgba(0,0,0,0.5);
          opacity: 0;
        }
        .content .title {
          font-family: 'arial-black', sans-serif;
          text-transform: uppercase;
          font-size: 2.5rem;
        }
        .content .description {
          line-height: 1.7;
          margin: 1rem 0 1.5rem;
          font-size: 1rem;
        }
        .item:nth-of-type(2) .content {
          animation: show 0.75s ease-in-out 0.3s forwards;
        }
        @keyframes show {
          0% {
            filter: blur(5px);
            transform: translateY(75px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }
        
        /* Modern crisp dots */
        .nav-dots {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.6rem;
          z-index: 5;
        }
        .dot {
          width: 12px;
          height: 12px;
          background: #ccc;   /* Solid gray */
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot:hover {
          background: #aaa;
        }
        .dot.active {
          background: #fff;   /* Solid white */
          box-shadow: 0 0 6px rgba(255,255,255,0.8); /* subtle glow */
          transform: scale(1.1);
        }

        @media (max-width: 900px) {
          .item { width: 160px; height: 270px; }
          .item:nth-child(4) { left: calc(50% + 170px); }
          .item:nth-child(5) { left: calc(50% + 340px); }
          .item:nth-child(6) { left: calc(50% + 510px); }
        }
        @media (max-width: 650px) {
          .content { padding: 1.5rem; }
          .content .title { font-size: 1.2rem; }
          .content .description { font-size: 0.7rem; }
          .item { width: 130px; height: 220px; }
          .item:nth-child(4) { left: calc(50% + 140px); }
          .item:nth-child(5) { left: calc(50% + 280px); }
          .item:nth-child(6) { left: calc(50% + 420px); }
        }
      `}</style>
    </div>
  );
}
