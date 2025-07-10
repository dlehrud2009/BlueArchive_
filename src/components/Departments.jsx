import React from 'react';
import { useNavigate } from 'react-router-dom';
import students from '../data/students';

export default function Departments() {
  const navigate = useNavigate();

  return (
    <section>
      <h2>학원별 주요 학생</h2>
      {Object.entries(students).map(([academy, studentList]) => (
        <div key={academy} style={{ marginBottom: 30 }}>
          <h3>{academy} 주요 인물</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {studentList.map(student => (
              <li
                key={student.id}
                style={{
                  cursor: 'pointer',
                  padding: '8px 12px',
                  marginBottom: '6px',
                  backgroundColor: '#eaf6ff',
                  borderRadius: '8px',
                  fontWeight: '600',
                  color: '#005bbb',
                }}
                onClick={() => navigate(`/student/${encodeURIComponent(student.id)}`)}
              >
                {student.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
