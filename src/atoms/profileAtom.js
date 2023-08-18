import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const profileAtom = atom({
  key: 'profileAtom',
  default: {
    email: '',
    nickName: '',
    profileImage: '',
  },
  effects_UNSTABLE: [persistAtom],
});