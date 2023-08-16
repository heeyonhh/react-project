import React, { useEffect } from 'react';

function OAuthHandler() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      // 발급된 인가 카카오 백엔드로 넘겨주기 위해 꺼내오는 작업 처리
      // code -> dispatch(userAction.kakaoLoginAC(code)); 미들웨어를 통해 백엔드로 넘겨주면 됨
      // 로그인 완료 후 홈페이지로 리다이렉트
      window.location.href = '/';
    }
  }, []);

  return (
    <div>
      로그인 처리 중...
    </div>
  );
}

export default OAuthHandler;