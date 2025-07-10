import React from 'react';

export default function TermsOfService() {
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
          이용 약관
        </h1>

        <section style={{ marginBottom: '24px' }}>
          <h2>1. 목적</h2>
          <p>본 약관은 사용자(이하 "회원")가 당사(이하 "서비스")에서 제공하는 모든 기능을 이용함에 있어 필요한 조건과 책임을 규정함을 목적으로 합니다.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2>2. 이용 계약의 성립</h2>
          <p>회원은 본 약관에 동의함으로써 서비스 이용 계약이 성립됩니다.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2>3. 서비스 제공</h2>
          <p>서비스는 연중무휴 24시간 제공되나, 시스템 점검 등의 사유로 일부 기능이 제한될 수 있습니다.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2>4. 회원의 의무</h2>
          <ul>
            <li>타인의 정보를 도용하거나 허위 정보를 제공하지 않아야 합니다.</li>
            <li>서비스 운영을 방해하거나 불법적인 활동을 해서는 안 됩니다.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2>5. 저작권 및 콘텐츠</h2>
          <p>서비스에 포함된 모든 콘텐츠는 당사 또는 제휴사의 지적 재산이며, 무단 복제 및 배포를 금지합니다.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2>6. 면책 조항</h2>
          <p>당사는 서비스 오류 또는 사용자의 손해에 대해 법적으로 정해진 범위 내에서만 책임을 집니다.</p>
        </section>

        <section>
          <h2>7. 약관의 변경</h2>
          <p>약관은 필요 시 변경될 수 있으며, 변경 시 홈페이지를 통해 공지합니다.</p>
        </section>
      </div>
    </div>
  );
}
