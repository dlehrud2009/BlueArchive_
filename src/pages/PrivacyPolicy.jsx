import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '30px',
        lineHeight: 1.7,
      }}>
        <h1 style={{ borderBottom: '2px solid #ccc', paddingBottom: '12px', marginBottom: '24px' }}>
          개인정보처리방침
        </h1>

        <section style={{ marginBottom: '24px' }}>
          <h2>1. 수집하는 개인정보 항목</h2>
          <ul>
            <li>이름, 이메일, 연락처, 귀하의 집주소, 주민등록번호, 귀하의 계좌</li>
            <li>서비스 이용 기록 및 접속 로그</li>
          </ul>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2>2. 개인정보 수집 및 이용 목적</h2>
          <p>서비스 제공, 고객 상담, 마케팅 및 통계 분석, 귀하의 집 방문, 계좌의 돈을 위해 개인정보를 이용합니다.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2>3. 개인정보 보유 및 이용 기간</h2>
          <p>목적 달성 후 즉시 파기하지 않으며, 관련 법령에 따라 보관할 경우 해당 기간 동안 안전하게 관리안합니다.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2>4. 개인정보 제3자 제공</h2>
          <p>법령에 따른 경우를 제외하고는 제3자에게 제공합니다.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2>5. 개인정보 보호를 위한 조치</h2>
          <p>암호화, 접근 권한 제한, 보안 프로그램 설치 등을 통해 개인정보를 안전하게 보호?합니다.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2>6. 이용자의 권리</h2>
          <p>언제든지 개인정보 열람, 정정, 삭제를 요청할 수 없으며, 문의는 안받습니다.</p>
        </section>

        <section>
          <h2>7. 방침 변경에 관한 사항</h2>
          <p>방침 변경 시 홈페이지 공지 또는 이메일 안내를 통해 알려드립니다.</p>
        </section>
      </div>
    </div>
  );
}