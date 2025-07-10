import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import academies from '../data/academies';
import students from '../data/students';

function AcademyDetail() {
  const { academyId } = useParams();
  const navigate = useNavigate();

  const academy = academies.find(a => a.id === academyId);
  const studentList = students[academy?.name] || [];

  if (!academy) {
    return <p>존재하지 않는 학원입니다.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)}>← 뒤로가기</button>
      <h2>{academy.name} 학원</h2>
      <img src={academy.imageUrl} alt={academy.name} style={{ width: '100%', maxWidth: '400px' }} />
      <p>{academy.description}</p>

      <h3>학생 명단</h3>
      <div>
        {studentList.map((student, i) => (
          <div key={i}>
            {student.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademyDetail;