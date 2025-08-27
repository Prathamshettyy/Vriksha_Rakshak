'use client';

import { siteConfig } from '@/config/site';
import Link from 'next/link';
import HowItWorks from './how-it-works';
import { ScrollAnimation } from './scroll-animation'; // 1. Import the new component

export default function Introduction() {
  return (
    <div className="ken-burns-font">
      <div className="header">
        <div className="info">
          <h1 className="animate-landing">{siteConfig.name}</h1>
          <div className="meta animate-landing delay-1">
            <p>{siteConfig.description}</p>
          </div>
          <Link href="/home" className="btn animate-landing delay-2">
            Get Started
          </Link>
        </div>
      </div>

      {/* 2. Wrap the section with the ScrollAnimation component */}
      <ScrollAnimation>
        <section className="content">
          <HowItWorks />
        </section>
      </ScrollAnimation>
    </div>
  );
}