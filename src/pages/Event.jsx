// src/pages/Event.jsx
import React from 'react';

export default function Event() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f4f6', padding: 0, margin: 0 }}>
      <div style={{
        maxWidth: '420px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <div>
          <img src="/images/4주년.png" alt="4주년 페스 배너" style={{ width: '100%', display: 'block' }} />
        </div>

        <div style={{ padding: '16px' }}>
          <h2 style={{ margin: 20, fontSize: '1.4em' }}>4주년 페스</h2>
          <p style={{ margin: '4px 0', color: '#666' }}>2025-07-15 ~ 2025-07-22</p>
          <p style={{ margin: '4px 0', color: '#666' }}>★ 픽업 확률 한정된 65포인트 상향</p>
        </div>

        <div style={{ padding: '16px', borderTop: '1px solid #eee' }}>
          <h3 style={{ fontSize: '1.1em' }}>픽업 모집 학생</h3>
          {[
            { name: '네루(교복)', img: '/images/student/교복네루.png', count: 188 },
            { name: '리오', img: '/images/student/리오.png', count: 218 },
            { name: '호시노(무장)', img: '/images/student/임시노.png', count: 84 },
            { name: '시로코*테러', img: '/images/student/쿠로코.png', count: 92 },
            { name: '하나코(수영복)', img: '/images/student/수나코.png', count: 121 },
            { name: '히나(드레스)', img: '/images/student/드히나.png', count: 80 },
            { name: '미카', img: '/images/student/미카.png', count: 69 },
            { name: '와카모', img: '/images/student/와카모.png', count: 43 },
            { name: '호시노(수영복)', img: '/images/student/수시노.png', count: 98 },
          ].map((student, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              backgroundColor: '#fafafa'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={student.img}  // 여기 수정됨
                  alt={student.name}
                  style={{ width: '40px', height: '40px', borderRadius: '6px', marginRight: '10px' }}
                />
                <span style={{ fontWeight: 'bold' }}>{student.name}</span>
              </div>
              <div style={{
                backgroundColor: '#eee',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '0.85em'
              }}>
                {student.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}