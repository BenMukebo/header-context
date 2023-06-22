import React, { useEffect } from 'react';
import { useHeaderContext } from '../../Contexts/HeaderContext';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { leftContent, menuLinks, rightActions } = useHeaderContext();
  // const { leftContent, menuLinks, rightActions } = useHeaderContext() || {}; // 3
  // use this third one if you don't wanna return an error if the context is undefined

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeftContainer}>{leftContent}</div>
      <div className={styles.headerMiddleContainer}>{menuLinks}</div>
      <div className={styles.headerRightContainer}>{rightActions}</div>
    </div>
  );
};

export default Header;
