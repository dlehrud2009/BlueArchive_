import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        fontSize: '14px',
        color: '#666',
      }}
    >
      <p>© 블루아카이브 BlueArchive.</p>
      <img 
      src="/images/BlueArchive.png"
      alt="블루아카이브 로고"
      style={{ width: '100px', marginBottom: '10px' }} 
      />
      <p>문의: 25_45@bsmm.hs.kr | 010-7456-0853</p>
      <p>
        <a href="/privacy" style={{ marginRight: 10 }}>개인정보처리방침</a>
        <a href="/terms">이용약관</a>
      </p>
    </footer>
  );
}