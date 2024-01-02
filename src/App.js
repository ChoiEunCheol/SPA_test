import React, { useState } from 'react';
import Left from './left';
import Right from './right';
import './App.css';
import membersData from './MembersData.json';

/**
 * App 컴포넌트는 전체 애플리케이션을 구성하며, Left와 Right 컴포넌트를 포함합니다.
 *
 * @component
 * @returns {JSX.Element} - App 컴포넌트의 JSX 요소
 */
const App = () => {
  const [selectedName, setSelectedName] = useState("");

  /**
   * 멤버의 이름이 클릭되었을 때 호출되는 핸들러 함수
   *
   * @param {string} name - 선택된 멤버의 이름
   */
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