import React, { useMemo, useState, type FC, type ReactNode } from 'react';
import { v4 } from 'uuid';
import classnames from 'classnames';

import styles from './styles.module.scss';

type TabComponentProps = {
  tabHeaders: ReactNode[]
  tabContents: ReactNode[]
};

export const TabComponent: FC<TabComponentProps> =
    ({ tabHeaders, tabContents }) => {
      const [currentIndex, setCurrentIndex] = useState(0);

      const tabsIds = useMemo(() => {
        return tabHeaders.map(() => {
          return v4();
        });
      }, [tabHeaders]);

      const onTabHeaderClickHandler = (index: number) => {
        setCurrentIndex(index);
      };

      return <div className={styles.container}>
        <div className={styles.headers}>
            {tabHeaders.map((tabHeader, index) => {
              return <div
                key={tabsIds[index]}
                onClick={() => { onTabHeaderClickHandler(index); }}
                className={classnames(styles.header, {
                  [styles.active]: index === currentIndex
                })}>
                    {tabHeader}
                </div>;
            })}
        </div>
        <div className={styles.contents}>
            {tabContents[currentIndex]}
        </div>
    </div>;
    };
