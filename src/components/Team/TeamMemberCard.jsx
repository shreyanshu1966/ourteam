import React from 'react';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg bg-gray-800 
        transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
        <div className="aspect-w-3 aspect-h-4">
          <img 
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full transition-transform duration-500 
              group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 
            transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
      
      <div className="mt-6 transition-all duration-300 group-hover:translate-x-2">
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-gray-400 font-medium">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;