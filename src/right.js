import React, { useState, useEffect } from "react";

const Right = ({ membersData, selectedName }) => {
  const [searchName, setSearchName] = useState("");
  const [memberInfo, setMemberInfo] = useState(null);

  useEffect(() => {
    const targetName = searchName || selectedName;

    const foundMember =
      membersData &&
      Object.values(membersData).find((member) => member.name === targetName);

    if (foundMember) {
      setMemberInfo(foundMember);
    } else {
      setMemberInfo(null);
    }
  }, [membersData, searchName, selectedName]);

  const handleSearch = (e) => {
    setSearchName("");
  };

  return (
    <div className="input-form">
      <div className="member-info">
        {memberInfo ? (
          <>
            <h3>{memberInfo.name} 소개</h3>
            <p>자기 소개: {memberInfo.mainParagraph}</p>
            <p>별명: {memberInfo.subParagraph}</p>
          </>
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
