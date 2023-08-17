import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
//로그인 유지

export const isLoggedInAtom = atom({
  key: 'isLoggedIn',
  default: false, // 초기값은 로그아웃 상태
  effects_UNSTABLE: [persistAtom],
});