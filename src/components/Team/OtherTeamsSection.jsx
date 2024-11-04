import React, { useState } from 'react';
import TeamMemberCard from './TeamMemberCard';

const OtherTeamsSection = ({ title, members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? members.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === members.length - 1 ? 0 : prevIndex + 1));
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
          <TeamMemberCard member={members[currentIndex]} />

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 w-12 rounded-full bg-gray-800 text-white flex items-center 
              justify-center transition-all duration-300 hover:bg-gray-700 pointer-events-auto"
            onClick={handlePrevious}
          >
            <span className="sr-only">Previous</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-12 rounded-full bg-gray-800 text-white flex items-center 
              justify-center transition-all duration-300 hover:bg-gray-700 pointer-events-auto"
            onClick={handleNext}
          >
            <span className="sr-only">Next</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OtherTeamsSection;