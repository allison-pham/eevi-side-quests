import React from "react";
import SideQuestBar from "./SideQuestBar";
import "./App.css";

const quests = [
  {
    title: "Data Structures & Algorithms (DSA)",
    description: "CONCEPT - Arrays and Hashing",
    completed: false,
  },
  {
    title: "DSA + Environment",
    description: "PROJECT - Waste Management System with AI",
    completed: true,
  },
  {
    title: "Environment",
    description: "CONCEPT - Did you know...?",
    completed: false,
  },
];

const App = () => {
  return (
    <div className="app">
      <div className="main-content">
        <h1>Calendar</h1>
        <p>[Calendar here]</p>
      </div>
      <SideQuestBar quests={quests} />
    </div>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
