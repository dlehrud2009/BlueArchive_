// components/Academy.js
import React from 'react';

function Academy({ data, onClick }) {
  return (
    <div className="academy" onClick={onClick} style={{ cursor: 'pointer', padding: '10px' }}>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </div>
  );
}

export default Academy;