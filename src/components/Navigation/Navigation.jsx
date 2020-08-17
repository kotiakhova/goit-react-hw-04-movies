import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';


const Navigation = () => (
  <ul className={styles.container}>
    <li className={styles.item}>
      <NavLink
        exact
        to={routes.homePage}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink
        to={routes.moviePage}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;