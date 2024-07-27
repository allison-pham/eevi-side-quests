import React from "react";
import "./QuestItem.css";

const QuestItem = ({ quest }) => {
  return (
    <li className="quest-item">
      <h3>{quest.title}</h3>
      <p>{quest.description}</p>
      <p>Status: {quest.completed ? "Completed" : "Incomplete"}</p>
    </li>
  );
};

export default QuestItem;
