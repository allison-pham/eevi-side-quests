import React, { useState } from "react";
import SideQuestBar from "./SideQuestBar";
import ViewAllQuests from "./ViewAllQuests";
import ConceptType from "./ConceptType"; // Import the new component
import "./App.css";

const quests = [
  {
    title: "DSA",
    description: "PROBLEM - Arrays",
    link: "https://leetcode.com/problems/two-sum/description/",
    completed: false,
  },
  {
    title: "DSA + Environment",
    description: "PROJECT - Waste Management System with AI",
    link: "https://leetcode.com/problemset/all/",
    completed: true,
  },
  {
    title: "Environment",
    description: "CONCEPT - Carbon Footprint",
    link: "https://leetcode.com/problemset/all/",
    completed: false,
  },
];

const App = () => {
  const [showAllQuests, setShowAllQuests] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState(null); // State for selected concept

  return (
    <div className="app">
      <div className="main-content">
        <h1>Calendar</h1>
        <p>[Calendar here]</p>
      </div>
      {showAllQuests ? (
        <ViewAllQuests quests={quests} setShowAllQuests={setShowAllQuests} />
      ) : (
        <SideQuestBar
          quests={quests}
          setShowAllQuests={setShowAllQuests}
          setSelectedConcept={setSelectedConcept}
        />
      )}
      {selectedConcept && (
        <ConceptType
          concept={selectedConcept}
          onClose={() => setSelectedConcept(null)}
        />
      )}
    </div>
  );
};

export default App;
