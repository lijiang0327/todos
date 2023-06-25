import React, { type FC, useMemo } from 'react';

import { Title, InputBar, ToDoItem, TabComponent, NoData } from './components';
import styles from './app.module.scss';
import { useToDoListStore } from './store';
import { useSyncStorage } from './hooks';

export const App: FC = () => {
  const todos = useToDoListStore(({ todos }) => todos);

  useSyncStorage();

  const headers = useMemo(() => {
    return [
      <div key="undone">Undone</div>,
      <div key="done">Done</div>,
      <div key="all">All</div>
    ];
  }, []);

  const contents = useMemo(() => {
    const undoneItems = todos.filter(({ checked }) => !checked);
    const doneItems = todos.filter(({ checked }) => checked);

    return [
      <div key="undone-contents">{
        (undoneItems.length > 0)
          ? undoneItems.map((item) => <ToDoItem key={item.id} {...item} />)
          : <NoData />
      }</div>,
      <div key="done-contents">
        {
          (doneItems.length > 0)
            ? doneItems.map((item) => <ToDoItem key={item.id} {...item} />)
            : <NoData />
        }
      </div>,
      <div key="all-contents">{
        (todos.length > 0)
          ? todos.map((item) => <ToDoItem key={item.id} {...item} />)
          : <NoData />
      }</div>
    ];
  }, [todos]);

  return <div className={styles.container}>
    <Title />
    <InputBar />
    <div className={styles.listContainer}>
      <TabComponent
        tabContents={contents}
        tabHeaders={headers}
      />
    </div>
  </div>;
};
