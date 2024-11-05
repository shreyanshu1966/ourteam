import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TeamMemberCard from './TeamMemberCard';

const OtherTeamsSection = ({ title, members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const swipeCard = (newDirection) => {
    if (isAnimating) return;
    
    setDirection(newDirection);
    setIsAnimating(true);
    
    // Update index based on direction
    const newIndex = newDirection === 'left' 
      ? currentIndex === 0 ? members.length - 1 : currentIndex - 1
      : currentIndex === members.length - 1 ? 0 : currentIndex + 1;
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setDirection(null);
      setIsAnimating(false);
    }, 300);
  };

  const variants = {
    enter: (direction) => ({
      x: direction === 'left' ? -300 : 300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'left' ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="mb-24">
      <div className="inline-block mb-12">
        <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-lg 
          font-medium transition-all duration-300 hover:bg-gray-700">
          {title}
        </span>
      </div>
      
      <div className="relative flex justify-center items-center">
        <div className="relative mx-4 w-full max-w-xs">
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="absolute"
              >
                <TeamMemberCard member={members[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Invisible placeholder to maintain height */}
          <div className="invisible">
            <TeamMemberCard member={members[currentIndex]} />
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2 px-1 z-10">
            <button
              className="h-12 w-12 rounded-full bg-gray-400 text-white flex items-center 
                justify-center transition-all duration-300 hover:bg-gray-700 disabled:opacity-50 
                disabled:cursor-not-allowed"
              onClick={() => swipeCard('left')}
              disabled={isAnimating}
            >
              <span className="sr-only">Previous</span>
              <ArrowLeft className="h-6 w-6" />
            </button>

            <button
              className="h-12 w-12 rounded-full bg-gray-400 text-white flex items-center 
                justify-center transition-all duration-300 hover:bg-gray-700 disabled:opacity-50 
                disabled:cursor-not-allowed"
              onClick={() => swipeCard('right')}
              disabled={isAnimating}
            >
              <span className="sr-only">Next</span>
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherTeamsSection;