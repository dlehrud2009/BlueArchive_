import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import students from '../data/students';

export default function StudentDetail() {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const decodedId = decodeURIComponent(studentId);

  const allStudents = Object.values(students).flat();

  const student = allStudents.find(s => s.id === decodedId);

  if (!student) {
    return <p>학생 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => navigate(-1)}>← 뒤로가기</button>
      <h2>{student.name} 프로필</h2>
      {student.imageUrl ? (
        <img
          src={`/images/student/${student.name}.png`}
          alt={student.name}
          style={{ maxWidth: 300, borderRadius: 12 }}
        />
      ) : (
        <p>이미지 정보가 없습니다.</p>
      )}
      <p><strong>학원:</strong> {student.academy}</p>
      <p>{student.description || '설명 정보가 없습니다.'}</p>
    </div>
  );
}