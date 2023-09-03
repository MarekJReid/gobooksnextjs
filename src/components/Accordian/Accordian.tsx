import React, { useEffect } from "react";
import ArrowIcon from "../Icons/ArrowIcon";

interface Section {
  heading: string;
  subtopics: string[];
}

interface AccordionProps {
  sections: Section[];
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  sections,
  activeSection,
  setActiveSection,
}) => {
  useEffect(() => {
    if (activeSection === null && sections.length > 0) {
      setActiveSection(sections[0].heading);
    }
  }, [activeSection, sections, setActiveSection]);

  return (
    <div className="px-6 pb-0">
      <h2 className="text-3xl font-bold mb-4 ">Course Content</h2>
      <p className="text-xl mb-4">
        This course consists of the following sections:
      </p>
      {sections.map((section) => (
        <div key={section.heading} className="mt-6">
          <button
            className="w-full text-left p-4 bg-gray-200 rounded-md focus:outline-none flex justify-between items-center"
            onClick={() =>
              setActiveSection(
                section.heading === activeSection ? null : section.heading
              )
            }
          >
            {section.heading}
            <span
              style={{
                display: "inline-block",
                transform: `rotate(${
                  section.heading === activeSection ? "0deg" : "180deg"
                })`,
                transition: "transform 0.3s ease",
              }}
            >
              <ArrowIcon isOpen={false} />
            </span>
          </button>
          <div
            style={{
              maxHeight: section.heading === activeSection ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.5s ease-in-out",
            }}
          >
            <ul className="mt-4">
              {section.subtopics.map((subtopic) => (
                <li key={subtopic} className="mt-2">
                  - {subtopic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
