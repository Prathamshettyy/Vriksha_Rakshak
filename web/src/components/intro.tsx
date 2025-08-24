'use client';

import { useState, useRef, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import HowItWorks from './how-it-works';

export default function Introduction() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isMenuOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [isMenuOpen]);

  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="ken-burns-font">
      <div className="header">
        {/* The logo div has been removed. This empty div keeps the menu on the right. */}
        <div className="sides"></div>
        <div className="sides">
          <a
            href="#"
            className="menu"
            id="openMenu"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(true);
            }}
          ></a>
        </div>
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

      <section className="content">
        <HowItWorks />
      </section>

      <dialog ref={dialogRef} onClick={handleDialogClick}>
        <Link href="/home">Home</Link>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </dialog>
    </div>
  );
}