import React from 'react';
import { useNavigate } from 'react-router-dom';
import academies from '../data/academies';
import Academy from '../components/Academy';
import FadeInSection from '../components/FadeInSection'; // 추가

function Home() {
  const navigate = useNavigate();

  const handleAcademyClick = (id) => {
    navigate(`/academy/${id}`);
  };

  return (
    <main>
      <h2>학원도시 키보토스</h2>
      <img src="/images/키보토스.png" alt="지도" className="map" />
      <h2>학원 목록</h2>
      {academies.map((academy) => (
        <FadeInSection key={academy.id}>
          <div>
            <Academy data={academy} onClick={() => handleAcademyClick(academy.id)} />
          </div>
        </FadeInSection>
      ))}
    </main>
  );
}

export default Home;