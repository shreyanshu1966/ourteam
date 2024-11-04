import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const CoreTeamSection = ({ members }) => {
  return (
    <section className="mb-24 animate-fadeInUp">
      <div className="inline-block mb-12">
        <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-lg 
          font-medium transition-all duration-300 hover:bg-gray-700">
          Core Team
        </span>
      </div>
      
      <div className="flex  justify-center gap-6 sm:gap-8 lg:gap-12 flex-col sm:flex-row">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default CoreTeamSection;