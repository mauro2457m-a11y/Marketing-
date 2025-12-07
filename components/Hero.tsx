
import React from 'react';
import type { HeroContent } from '../types';

interface HeroProps {
  content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[85vh]">
      <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${content.imageUrl})` }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 text-center">
            <h1 className="text-white font-semibold text-4xl md:text-6xl leading-tight mb-4">
              {content.title}
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
            <a href={content.ctaLink} className="mt-12 inline-block bg-cyan-500 text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-110 hover:shadow-cyan-400/50">
              {content.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
