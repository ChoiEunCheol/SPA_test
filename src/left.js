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
              listStyleType: member.name === selectedName ? 'disc' : 'none',
              textAlign: member.name === selectedName ? 'right' : 'left',
              opacity: member.name === selectedName ? '1' : '0.5',
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