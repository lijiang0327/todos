import React, { type FC } from 'react';

import styles from './styles.module';

type TitleProps = {};

export const Title: FC<TitleProps> = ({}) => {
  return <div className={styles.title}>To Do List</div>;
};
