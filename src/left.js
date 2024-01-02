import React from 'react';
import './App.css';

/**
 * Left 컴포넌트는 이름 목록을 표시하고,
 * 선택된 멤버의 스타일을 변경합니다.
 *
 * @component
 * @param {Object} props - Left 컴포넌트에 전달되는 프로퍼티 객체
 * @param {Object} props.members - 멤버 목록 객체
 * @param {Function} props.onNameClick - 멤버 이름 클릭 시 실행되는 콜백 함수
 * @param {string} props.selectedName - 선택된 멤버의 이름
 * @returns {JSX.Element} - Left 컴포넌트의 JSX 요소
 */
const Left = ({ members, onNameClick, selectedName }) => {
  return (
    <div className="left">
      <ul>
        {Object.values(members).map((member) => (
          <li
            key={member.name}
            onClick={() => onNameClick(member.name)}
            style={{
              listStyleType: member.name === selectedName ? 'disc' : 'none', // 기호 표시
              textAlign: member.name === selectedName ? 'right' : 'left', // 우측 정렬
              opacity: member.name === selectedName ? '1' : '0.5', // 투명도 설정
            }}
          >
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Left;