import React, { useState, useEffect } from 'react';

const initialCharacterInfo = {
  시로코: {
    소개: "시로코 - 아비도스 소속. 은행 털이범1.",
    이름: "스나오오카미 시로코 (Shiroko)",
    학년: "2학년",
    성격: "말수가 적고 차분한 성격이지만, 학원에 대한 애정이 깊습니다.",
    특징: "조깅과 사이클 라이딩을 즐기며, 체력 단련에 힘씁니다.",
    imageUrl: "/images/student/시로코.png"
  },
  호시노: {
    소개: "호시노 - 아비도스 소속. 대책위원회의 회장.",
    이름: "타카나시 호시노 (Takanashi Hoshino)",
    학년: "3학년",
    역할: "대책위원회의 회장으로, 리더십을 발휘하여 팀을 이끌고 있습니다.",
    특징: "게으른 듯 보이지만, 책임감이 강한 성격입니다.",
    imageUrl: "/images/student/호시노.png"
  },
  코코나: {
    소개: "코코나 - 산해경 소속. 조숙한 어린 교관.",
    이름: "스노하라 코코나 (Sunohara Kokona)",
    학년: "1학년",
    성격: "어른스럽게 행동하려 하지만, 여전히 어린아이다운 면모를 지닌 진지한 성격.",
    특징: "어린 나이에 뛰어난 학업 능력으로 교관 권한을 부여받음. 원생들에게 '코코나 쨩'이라 불리지만 그 호칭을 그다지 좋아하진 않음.",
    유머: "문O혁이라는 사람이 좋아한다고...",
    imageUrl: "/images/student/코코나.png"
  },
  이부키: {
    소개: "이부키 - 게헨나 학원 소속. 만마전의 마스코트 격인 소녀.",
    이름: "탄가 이부키 (Tanga Ibuki)",
    학년: "1학년",
    성격: "성실하고 예의 바르며, 항상 선배들에게 폐가 되지 않도록 노력하는 바른생활 어린이.",
    특징: "본래 초등부 소속이었으나, 그 능력을 인정받아 만마전에 입부함. 특유의 귀여움과 성실함으로 모두에게 사랑받고 있음.",
    유머: "장O석이라는 사람이 좋아한다고...",
    imageUrl: "/images/student/exam.png"
  },
  히카리: {
    소개: "히카리 - 하이랜더 철도학원 소속. 열차 운전의 천재.",
    이름: "타치바나 히카리 (Tachibana Hikari)",
    학년: "1학년",
    성격: "열차 운전에는 굉장한 재능을 가지고 있지만, 서류나 관리 업무에는 서투릅니다.",
    특징: "하이랜더 철도학원 중앙관제센터(CCC)의 간부로, 열차 운전에는 뛰어난 실력을 보입니다. 쌍둥이 동생 노조미와 함께 활동하며, 때때로 사고를 일으키기도 합니다.",
    유머: "장O석이라는 사람이 좋아한다고...",
    imageUrl: "/images/student/exam.png"
  },
  노조미: {
    소개: "노조미 - 하이랜더 철도학원 소속. 쾌활한 중앙관제센터 간부.",
    이름: "타치바나 노조미 (Tachibana Nozomi)",
    학년: "1학년",
    성격: "쾌활하고 발랄한 성격이지만, 사소한 것은 신경 쓰지 않는 타입입니다.",
    특징: "하이랜더 철도학원 중앙관제센터(CCC)의 간부로, 열차 운행에 대해서는 책임감을 발휘합니다. 쌍둥이 언니 히카리와 함께 활동하며, 흥미 본위로 움직이는 경우가 많습니다.",
    유머: "장O석이라는 사람이 좋아한다고...",
    imageUrl: "/images/student/exam.png"
  },
  히요리: {
    소개: "히요리 - 아리우스 분교 소속. 소심하고 우울한 성격의 저격수.",
    이름: "츠치나가 히요리 (Tsuchinaga Hiyori)",
    학년: "2학년",
    성격: "낮은 자존감과 네거티브한 성격을 지니며, 세상만사를 염세적으로 바라보는 소심한 성격입니다.",
    특징: "대물 저격총을 사용하여 원거리 지원을 담당하며, 아리우스 스쿼드의 일원으로서 전투에 참여합니다.",
    imageUrl: "/images/student/exam.png"
  }
};

export default function Favorite() {
  const [characterInfo, setCharacterInfo] = useState(initialCharacterInfo);
  const [name, setName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 새 캐릭터 입력 상태
  const [newIntro, setNewIntro] = useState('');
  const [newName, setNewName] = useState('');
  const [newGrade, setNewGrade] = useState('');
  const [newPersonality, setNewPersonality] = useState('');
  const [newFeature, setNewFeature] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem('likes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  // 캐릭터 정보 조회
  const handleClick = () => {
    if (name.trim() === '') {
      setSelectedCharacter(null);
      alert('캐릭터 이름을 입력해주세요!');
      return;
    }
    const info = characterInfo[name];
    if (info) {
      setSelectedCharacter(info);
    } else {
      alert(`${name} 캐릭터 정보를 찾을 수 없습니다.`);
      setSelectedCharacter(null);
    }
    if (name.trim() === '/likes') {
      alert(
        likes.length === 0
          ? '❤️ 좋아요한 캐릭터가 없습니다.'
          : `❤️ 좋아요한 캐릭터:\n${likes.join(', ')}`
      );
      return;
    }
  };

  // 캐릭터 추가
  const handleAddCharacter = () => {
    if (
      !newIntro.trim() ||
      !newName.trim() ||
      !newGrade.trim() ||
      !newPersonality.trim() ||
      !newFeature.trim()
    ) {
      alert('이미지 URL을 제외한 모든 항목을 입력해주세요!');
      return;
    }
    if (characterInfo[newName]) {
      alert('이미 존재하는 캐릭터 이름입니다.');
      return;
    }

    const newCharacter = {
      소개: newIntro,
      이름: newName,
      학년: newGrade,
      성격: newPersonality,
      특징: newFeature,
      imageUrl: newImageUrl.trim() || null,
    };

    setCharacterInfo(prev => ({
      ...prev,
      [newName]: newCharacter,
    }));

    // 입력 초기화
    setNewIntro('');
    setNewName('');
    setNewGrade('');
    setNewPersonality('');
    setNewFeature('');
    setNewImageUrl('');
    setShowModal(false);
    alert(`${newName} 캐릭터가 추가되었습니다!`);
  };

  const toggleLike = (charName) => {
  setLikes(prev =>
    prev.includes(charName)
      ? prev.filter(name => name !== charName)
      : [...prev, charName]
    );
  };


  return (
    <section style={{ padding: '20px' }}>
      <h2>
        최애 캐릭터를 입력하세요{' '}
        <button onClick={() => setShowModal(true)} style={{ marginLeft: '10px' }}>
          추가
        </button>
      </h2>

      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="캐릭터 이름 입력"
        style={{ padding: '8px', width: '200px', marginRight: '8px' }}
      />
      <button onClick={handleClick} style={{ padding: '8px 12px' }}>
        확인
      </button>

      {selectedCharacter && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '12px',
          backgroundColor: '#fdfdfd',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          maxWidth: '500px'
        }}>
          {selectedCharacter.imageUrl && (
            <img
              src={selectedCharacter.imageUrl}
              alt={selectedCharacter.이름 || '캐릭터 이미지'}
              style={{ maxWidth: '300px', borderRadius: '12px', marginBottom: '12px', objectFit: 'cover' }}
            />
          )}
          
          {/* 좋아요 버튼 */}
          {name && characterInfo[name] && (
            <div style={{ marginBottom: '12px', textAlign: 'right' }}>
              <button onClick={() => toggleLike(name)}
                style={{
                  backgroundColor: likes.includes(name) ? '#ffccd5' : '#ffaad5',
                  padding: '#8px 12px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontsize: '14px'
                }}>
                {likes.includes(name) ? '💔 좋아요 취소' : '❤️ 좋아요'}
              </button>
            </div>
          )}

          <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
            {Object.entries(selectedCharacter)
              .filter(([key]) => key !== 'imageUrl')
              .map(([key, val]) => (
                <div key={key} style={{ marginBottom: '6px' }}>
                  <strong>{key}</strong>: {val}
                </div>
              ))}
          </div>
        </div>
      )}
      
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '10px',
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '400px',
              boxSizing: 'border-box',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            <h3 style={{ marginBottom: '12px' }}>새 캐릭터 추가</h3>

            {[
              { value: newIntro, set: setNewIntro, placeholder: "소개" },
              { value: newName, set: setNewName, placeholder: "이름" },
              { value: newGrade, set: setNewGrade, placeholder: "학년" },
              { value: newPersonality, set: setNewPersonality, placeholder: "성격" },
              { value: newFeature, set: setNewFeature, placeholder: "특징" },
              { value: newImageUrl, set: setNewImageUrl, placeholder: "이미지 URL (선택)" }
            ].map((input, idx) => (
              <input
                key={idx}
                type="text"
                value={input.value}
                onChange={e => input.set(e.target.value)}
                placeholder={input.placeholder}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '8px',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
              />
            ))}

            <div style={{ textAlign: 'right' }}>
              <button onClick={handleAddCharacter} style={{ marginRight: '8px' }}>
                추가
              </button>
              <button onClick={() => setShowModal(false)}>취소</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}