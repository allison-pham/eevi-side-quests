import React, { useState, useEffect } from "react";
import "./ConceptType.css";
import badgeImage from "../src/assets/badge.png";

const ConceptType = ({ concept, onClose }) => {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (concept && concept.description.startsWith("CONCEPT")) {
      setShowDetails(true);
    }
  }, [concept]);

  const handleFinish = () => {
    // Trigger file download
    const link = document.createElement("a");
    link.href = badgeImage;
    link.download = "badge.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onClose();
  };

  return (
    <div className="concept-type">
      <div className="concept-type-content">
        <h2>{concept.title}</h2>
        {showDetails ? (
          <>
            <p>
              Did you know that carbon footprint includes emissions from
              everyday activities like driving a car, using electricity, and
              even the food we consume! Reducing our carbon footprint can be as
              simple as using energy-efficient appliances, opting for public
              transportation, and incorporating more plant-based meals into our
              diets. Small changes can make a big difference in combating
              climate issues!
            </p>
            <button onClick={onClose} className="close-button">
              Close
            </button>
            <button onClick={handleFinish} className="finish-button">
              Collect your badge!
            </button>
          </>
        ) : (
          <>
            <p>{concept.description}</p>
            <button
              onClick={() => setShowDetails(true)}
              className="learn-more-button"
            >
              Learn more
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ConceptType;
