import React, { useState, useEffect } from "react";
import "./App.css";

/**
 * Right 컴포넌트는 사용자에게 멤버 정보를 표시하고,
 * 검색 기능을 제공합니다.
 *
 * @component
 * @param {Object} props - Right 컴포넌트에 전달되는 프로퍼티 객체
 * @param {Object} props.membersData - 멤버 데이터 객체
 * @param {string} props.selectedName - 선택된 멤버의 이름
 * @returns {JSX.Element} - Right 컴포넌트의 JSX 요소
 */
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

  /**
   * 검색어를 초기화하고 검색을 수행하는 핸들러 함수
   *
   * @param {Event} e - 폼 제출 이벤트
   */
  const handleSearch = (e) => {
    setSearchName("");
  };

  return (
    <>
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
          <button name="button" type="submit">
            Delete
          </button>
        </form>
      </div>
    </>
  );
};

export default Right;