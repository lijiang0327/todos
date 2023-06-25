const LOCALSTORAGE_KEY = 'todo-list-';

export const setItem = (key: string, item: any) => {
  try {
    const itemString = JSON.stringify(item);
    localStorage.setItem(LOCALSTORAGE_KEY + key, itemString);
  } catch (error) {
    console.error((error as Error).message);
  }
};

export const getItem = (key: string) => {
  try {
    const itemString = localStorage.getItem(LOCALSTORAGE_KEY + key);
    return itemString !== null ? JSON.parse(itemString) : undefined;
  } catch (error) {
    console.error((error as Error).message);
  }
};
