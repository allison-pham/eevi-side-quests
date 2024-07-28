import React from "react";
import "./QuestItem.css";

const QuestItem = ({ quest, onConceptClick }) => {
  const handleClick = () => {
    if (quest.description.startsWith("CONCEPT")) {
      onConceptClick({
        ...quest,
        detailedDescription:
          "Did you know that carbon footprint includes emissions from everyday activities like driving a car, using electricity, and even the food we consume! Reducing our carbon footprint can be as simple as using energy-efficient appliances, opting for public transportation, and incorporating more plant-based meals into our diets. Small changes can make a big difference in combating climate issues!",
      });
    } else if (quest.title === "DSA + Environment") {
      // Do nothing or handle differently if needed
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
      ) : quest.title !== "DSA + Environment" ? (
        <a href={quest.link} target="_blank" rel="noopener noreferrer">
          Go to Problem
        </a>
      ) : null}
    </li>
  );
};

export default QuestItem;
