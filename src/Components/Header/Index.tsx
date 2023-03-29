import React, { useEffect } from 'react';
import { useHeaderContext } from '../../App';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { leftContent, menuLinks, rightActions } = useHeaderContext();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeftContainer}>{leftContent}</div>
      <div className={styles.headerMiddleContainer}>{menuLinks}</div>
      <div className={styles.headerRightContainer}>{rightActions}</div>
    </div>
  );
};

export default Header;
