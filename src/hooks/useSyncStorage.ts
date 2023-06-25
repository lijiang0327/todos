import { useEffect, useRef } from 'react';
import { shallow } from 'zustand/shallow';

import { useToDoListStore } from '../store';
import { setItem, getItem } from '../utils';

export const useSyncStorage = () => {
  const initRef = useRef(false);

  const { todos, setTodos } =
    useToDoListStore(({ todos, setTodos }) => ({ todos, setTodos }), shallow);

  useEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      return;
    }

    setItem('todos', todos);
  }, [todos]);

  useEffect(() => {
    const savedTodos = getItem('todos');

    setTodos(savedTodos || []);
  }, []);
};
