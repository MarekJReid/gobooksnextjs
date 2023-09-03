import React from "react";

interface IntroductionSectionProps {
  courseName: string;
  courseDescription: string;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  courseName,
  courseDescription,
}) => (
  <div className="px-6 py-8 mt-8">
    <h1 className="text-6xl font-bold">{courseName}</h1>
    <p className="mt-4 text-2xl">{courseDescription}</p>
  </div>
);

export default IntroductionSection;
