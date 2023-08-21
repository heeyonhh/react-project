import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
//매장선택값 유지

export const LocationidAtom = atom({
  key: 'Locationid',
  default: {
    id: '',
    name: ''
  },
  effects_UNSTABLE: [persistAtom],
});