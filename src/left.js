import React from 'react';

const Left = ({ members, onNameClick }) => {
  return (
    <div className="left">
      <ul>
        {Object.values(members).map((member) => (
          <li key={member.name} onClick={() => onNameClick(member.name)}>
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Left;