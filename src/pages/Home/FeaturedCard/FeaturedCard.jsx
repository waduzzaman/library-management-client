import React, { useState, useRef } from "react";


const FeaturedCard = ({ image, programType, programName, description }) => {
  return (
    <div className="featured-card">
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full" src={image} alt={programName} />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{programType}</h2>
          <h3 className="text-lg font-semibold mb-2">{programName}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeaturedSection = () => {
 

  return (
    <div className="container mx-auto py-8 relative">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Programs</h2>
      <div className="featured-container" >
        <div className="featured-content flex gap-4">
          {/* Example Featured Cards */}
          <FeaturedCard
            image="https://via.placeholder.com/400x250"
            programType="Type 1"
            programName="Program 1"
            description="Brief description of Program 1."
          />
          <FeaturedCard
            image="https://via.placeholder.com/400x250"
            programType="Type 2"
            programName="Program 2"
            description="Brief description of Program 2."
          />
          <FeaturedCard
            image="https://via.placeholder.com/400x250"
            programType="Type 3"
            programName="Program 3"
            description="Brief description of Program 3."
          />
          {/* Add more Featured Cards here */}
        </div>
      </div>
     
    </div>
  );
};

export default FeaturedSection;
