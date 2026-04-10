import type { StorageEnum } from "@/types/enum";

export const getStringItem = (key: StorageEnum): string | null => {
  return localStorage.getItem(key);
};

export const setStringItem = <T>(key: StorageEnum, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: StorageEnum): void => {
  localStorage.removeItem(key);
};

export const clear = (): void => {
  localStorage.clear();
};
