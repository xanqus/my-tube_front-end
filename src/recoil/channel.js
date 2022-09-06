import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const videoState = atom({
  key: "videoState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const modalActiveState = atom({
  key: "modalActiveState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const isEditingState = atom({
  key: "isEditingState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
