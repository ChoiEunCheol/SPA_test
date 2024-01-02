import React, { useState, useEffect } from 'react';
import './App.css';

const Right = ({ membersData, selectedName }) => {
  const [searchName, setSearchName] = useState("");
  const [memberInfo, setMemberInfo] = useState(null);

  useEffect(() => {
    const targetName = searchName || selectedName;
    const foundMember = membersData && Object.values(membersData).find((member) => member.name === targetName);

    if (foundMember) {
      setMemberInfo(foundMember);
    } else {
      setMemberInfo(null);
    }
  }, [membersData, searchName, selectedName]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchName("");
  };

  return (
    <div className="right-container">
      <div className="input-form">
        <div className="member-info">
          {memberInfo ? (
            <>
              <h3>{memberInfo.name} 소개</h3>
              <p>자기 소개: {memberInfo.mainParagraph}</p>
              <p>별명: {memberInfo.subParagraph}</p>
            </>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <form onSubmit={handleSearch}>
        <input
          name="input"
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button name="button" type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Right;