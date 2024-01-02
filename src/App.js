import React, { useState } from 'react';
import Left from './left';
import Right from './right';
import './App.css'; 
import membersData from './MembersData.json';


const App = () => {
  const [selectedName, setSelectedName] = useState("");

  const handleNameClick = (name) => {
    setSelectedName(name);
  };

  return (
    <div className="app">
      <div className="container">
        <Left members={membersData} onNameClick={handleNameClick} selectedName={selectedName} />
        <Right membersData={membersData} selectedName={selectedName} />
      </div>
    </div>
  );
};

export default App;