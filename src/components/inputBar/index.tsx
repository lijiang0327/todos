import React, {
  type FC,
  useState,
  type ChangeEvent,
  type KeyboardEvent
} from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import styles from './style.module.scss';
import { useToDoListStore } from '../../store';

type InputBarProps = {};

export const InputBar: FC<InputBarProps> = ({}) => {
  const addTodo = useToDoListStore((state) => state.addTodo);
  const [todoContent, setTodoContent] = useState('');

  const onAddClickHandler = () => {
    if (todoContent.length < 3) return;

    addTodo({
      content: todoContent,
      checked: false,
      id: uuidv4()
    });
    setTodoContent('');
  };

  const onKeyUpHandler = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return;

    onAddClickHandler();
  };

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoContent(event.target.value);
  };

  return <div className={styles.container}>
    <input
        onKeyUp={onKeyUpHandler}
        onChange={onInputChangeHandler}
        value={todoContent}></input>
    <span onClick={onAddClickHandler} className={classnames({
      [styles.disabled]: todoContent.length < 3
    })}>Add</span>
  </div>;
};
