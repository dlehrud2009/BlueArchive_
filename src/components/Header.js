import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>키보토스 안내</h1>
      <nav style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <Link to="/">홈</Link>
        <Link to="/departments">학생</Link>
        <Link to="/favorites">최애 캐릭터</Link>
      </nav>
    </header>
  );
}