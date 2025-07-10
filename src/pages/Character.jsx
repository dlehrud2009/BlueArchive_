import React from 'react';

export default function Character() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: 600, margin: '20px auto', backgroundColor: '#fff', borderRadius: 8, boxShadow: '0 0 10px rgba(0,0,0,0.1)', padding: 20 }}>
      
      <h2>주요 캐릭터 업데이트</h2>

      <img
        src="/images/업데이트.png"
        alt="주요 캐릭터"
        width={300}
        height={1100}
        style={{ display: 'block', margin: '20px auto', borderRadius: 12 }}
      />

      <p>더 많은 정보를 곧 업데이트합니다.</p>
    </div>
  );
}