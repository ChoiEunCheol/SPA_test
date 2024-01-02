import React from 'react';

const MemberList = ({ members }) => {
  return (
    <div className="member-list">
      <ul>
        {Object.keys(members).map((key) => (
          <li key={key}>
            <strong>{members[key].name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;