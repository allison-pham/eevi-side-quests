import React from "react";
import QuestItem from "./QuestItem";
import "./SideQuestBar.css";

const SideQuestBar = ({ quests, setShowAllQuests, setSelectedConcept }) => {
  return (
    <div className="side-quest-bar">
      <h2>Side Quests</h2>
      <ul>
        {quests.map((quest, index) => (
          <QuestItem
            key={index}
            quest={quest}
            onConceptClick={setSelectedConcept}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideQuestBar;
