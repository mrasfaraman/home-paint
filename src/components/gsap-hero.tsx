"use-client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Link from "next/link";

// Register the TextPlugin with GSAP
gsap.registerPlugin(TextPlugin);

const HeroSection: React.FC = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const statements = [
      "Transforming Spaces with Precision Painting",
      "Bringing Colors to Life with Artistic Vision",
      "Every Stroke Tells a Unique Story",
      "Experience the Beauty of Expert Craftsmanship",
    ];

    let currentStatementIndex = 0;

    const changeBackground = () => {
      gsap.to(backgroundRef.current, {
        background: getRandomGradient(),
        duration: 1,
        onComplete: changeBackground,
      });
    };

    const animateText = () => {
      const statement = statements[currentStatementIndex];

      gsap.to(headerRef.current, {
        text: { value: statement },
        duration: 2.5,
        onComplete: () => {
          currentStatementIndex =
            (currentStatementIndex + 1) % statements.length;
        },
      });
    };

    const getRandomGradient = () => {
      const gradients = [
        "linear-gradient(to right, #4e54c8, #8f94fb)",
        "linear-gradient(to right, #36d1dc, #5b86e5)",
        "linear-gradient(to right, #00c6fb, #005bea)",
        "linear-gradient(to right, #ff416c, #ff4b2b)",
      ];

      const randomDarkSpot = Math.floor(Math.random() * gradients.length);

      return `${gradients[randomDarkSpot]}, rgba(0, 0, 0, 0.5)`;
    };

    // Set initial background gradient
    gsap.set(backgroundRef.current, {
      background: getRandomGradient(),
    });

    changeBackground();
    animateText();

    const intervalId = setInterval(() => {
      animateText();
    }, 9000); // Increased delay between statements

    return () => {
      clearInterval(intervalId);
    };
  }, [headerRef, backgroundRef]);

  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-white relative overflow-hidden bg-gradient"
      style={{ minHeight: "100vh" }}
      ref={backgroundRef}
    >
      <div className="text-center max-w-2xl">
        <h1
          ref={headerRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}
        ></h1>
        <p className="text-lg mb-8">
          Elevate your space with our precision painting services. Every stroke
          tells a unique story of craftsmanship and artistic vision.
        </p>
        <Link href="/contact-us">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
