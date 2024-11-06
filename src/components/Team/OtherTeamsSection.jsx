import React, { useState, useEffect } from 'react';
import TeamMemberCard from './TeamMemberCard';
import { coreTeamMembers, technicalTeamMembers } from './teamData';

const OtherTeamsSection = ({ title, members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState('');

  useEffect(() => {
    if (swipeDirection) {
      const timer = setTimeout(() => setSwipeDirection(''), 500); // Reset animation after 500ms
      return () => clearTimeout(timer);
    }
  }, [swipeDirection]);

  const handlePrevious = () => {
    setSwipeDirection('animate-swipeRight');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? members.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSwipeDirection('animate-swipeLeft');
    setCurrentIndex((prevIndex) => (prevIndex === members.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-6 w-full">
      <div className="w-full flex justify-start">
        <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-700">
          {title}
        </span>
      </div>
      <div className="relative flex justify-center items-center w-full max-w-xs md:max-w-sm lg:max-w-md">
        <div className={`transition-all duration-500 ${swipeDirection}`}>
          <TeamMemberCard member={members[currentIndex]} />
        </div>
        <button
          className="absolute left-1 top-1/2 transform -translate-y-1/2 h-12 w-12 rounded-full bg-gray-400 text-white flex items-center justify-center transition-all duration-300 hover:bg-gray-700 pointer-events-auto"
          onClick={handlePrevious}
        >
          <span className="sr-only">Previous</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-12 w-12 rounded-full bg-gray-400 text-white flex items-center justify-center transition-all duration-300 hover:bg-gray-700 pointer-events-auto"
          onClick={handleNext}
        >
          <span className="sr-only">Next</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OtherTeamsSection;