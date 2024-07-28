import React from "react";
import "./ConceptType.css";

const ConceptType = ({ concept, onClose }) => {
  return (
    <div className="concept-type">
      <div className="concept-type-content">
        <h2>{concept.title}</h2>
        <p>{concept.description}</p>
        <a
          href={concept.link}
          target="_blank"
          rel="noopener noreferrer"
          className="learn-more-button"
        >
          Learn more
        </a>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default ConceptType;
