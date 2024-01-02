import React from 'react';
import './App.css';

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