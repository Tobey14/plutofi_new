export function getLocalStorage(): Storage | null {
    if (typeof window !== 'undefined') {
      return window.localStorage;
    }
    return null;
}

export const getLocalStorageItem = <T>(key: string): T | null => {
  try {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  } catch (error) {
    console.error(`Error reading key "${key}" from local storage:`, error);
  }
  return null;
};