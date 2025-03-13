import { stuck } from "../utils/stuck";
export const useStuck = () => {
  const foo = () => {
    stuck();
  };

  return { foo };
};
