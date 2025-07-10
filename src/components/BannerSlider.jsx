import React, { useState, useEffect } from 'react';

const slides = [
  {
    imageUrl: '/images/4주년캐릭터.png',
    text: '최신 캐릭터 업데이트! 지금 확인하세요.',
    link: '/character'
  },
  {
    imageUrl: '/images/4주년.png',
    text: '특별 이벤트 진행 중! 놓치지 마세요.',
    link: '/event'
  }
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 4000); // 4초마다 슬라이드 변경

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div style={{
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      cursor: 'pointer',
      position: 'relative',
    }}
      onClick={() => window.location.href = currentSlide.link}
    >
      <img
        src={currentSlide.imageUrl}
        alt={currentSlide.text}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '15px',
        left: '20px',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '8px 12px',
        borderRadius: '8px',
        fontSize: '16px',
        userSelect: 'none'
      }}>
        {currentSlide.text}
      </div>
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '20px',
        display: 'flex',
        gap: '6px'
      }}>
        {slides.map((_, idx) => (
          <div key={idx}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: idx === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer'
            }}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
