import React from "react";
import "./QuestItem.css";

const QuestItem = ({ quest, onConceptClick }) => {
  const handleClick = () => {
    if (quest.description.startsWith("CONCEPT")) {
      onConceptClick(quest);
    } else {
      window.open(quest.link, "_blank");
    }
  };

  return (
    <li className="quest-item">
      <h3>{quest.title}</h3>
      <p>{quest.description}</p>
      {quest.description.startsWith("CONCEPT") ? (
        <button className="learn-more-button" onClick={handleClick}>
          Learn More
        </button>
      ) : (
        <a href={quest.link} target="_blank" rel="noopener noreferrer">
          Go to Problem
        </a>
      )}
    </li>
  );
};

export default QuestItem;
