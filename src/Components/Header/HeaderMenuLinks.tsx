import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderMenuLinksProps {
  links: Link[];
}

interface Link {
  name: string;
  url: string;
}

const HeaderMenuLinks: React.FC<HeaderMenuLinksProps> = (props) => {
  const { links = [] } = props;
  return (
    <div className={styles.headerMenuLinksContainer}>
      <ul className={styles.headerMenuLinks}>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink to={link.url}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenuLinks;
