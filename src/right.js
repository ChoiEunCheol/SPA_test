import React, { useState, useEffect } from "react";

const Right = ({ membersData, selectedName }) => {
  const [searchName, setSearchName] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    const targetName = searchName || selectedName;

    if (targetName) {
      const foundMember = membersData && membersData[targetName];
      setFilteredMembers(foundMember ? [foundMember] : []);
    } else {
      setFilteredMembers(Object.values(membersData));
    }
  }, [membersData, searchName, selectedName]);

  const handleSearch = (e) => {
    setSearchName("");
  };

  return (
    <div className="input-form">
      <div className="member-info">
        {filteredMembers.length ? (
          filteredMembers.map((member) => (
            <div key={member.name}>
              <h3>{member.name} 소개</h3>
              <p>자기 소개: {member.mainParagraph}</p>
              <p>별명: {member.subParagraph}</p>
            </div>
          ))
        ) : (
          <p>멤버를 찾을 수 없습니다.</p>
        )}
      </div>
      <form onSubmit={handleSearch}>
        <label>
          Name:
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Right;