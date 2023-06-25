import React, { type FC, type ChangeEvent } from 'react';
import { shallow } from 'zustand/shallow';

import styles from './styles.module.scss';
import type { ToDoItem as ToDoItemProps } from '../../store';
import { useToDoListStore } from '../../store';
import { DeleteIcon } from '../../icons';

export const ToDoItem: FC<ToDoItemProps> = ({
  content,
  checked,
  id
}) => {
  const { setTodoChecked, deleteTodoItem } =
    useToDoListStore(
      ({ setTodoChecked, deleteTodoItem }) =>
        ({ setTodoChecked, deleteTodoItem }),
      shallow);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoChecked({ content, checked: event.target.checked, id });
  };

  const onDeleteClickHandler = () => {
    deleteTodoItem(id);
  };

  return <div className={styles.container}>
        <input onChange={onChangeHandler} checked={checked} type="checkbox" />
        <div className={styles.content}>{content}</div>
        <DeleteIcon
            size={20}
            onClick={onDeleteClickHandler}
            className={styles.deleteButton}
        />
    </div>;
};
