import { atom } from 'recoil';

export const isLoggedInAtom = atom({
  key: 'isLoggedIn',
  default: false, // 초기값은 로그아웃 상태
});