import React, {useEffect, useState} from 'react';
import styles from './navbar.module.scss'
import classNames from "classnames";

const NavBar = () => {
    const [isImgPage, setIsImgPage] = useState(false)

    useEffect(() => {
        if (window.location.href.includes('img')) setIsImgPage(true)
        if (!window.location.href.includes('img')) setIsImgPage(false)
    }, [])

    return (
        <ul className={styles.navbar}>
            <li className={classNames(styles.navbar__item, {[styles.navbar__item_active] : !isImgPage})}>
                <a className={styles.navbar__link} href='/'>
                    <h3>Список</h3>
                </a>
            </li>
            <li className={classNames(styles.navbar__item, {[styles.navbar__item_active] : isImgPage})}>
                <a className={styles.navbar__link} href='/img/1'>
                    <h3>Постраничный вывод</h3>
                </a>
            </li>
        </ul>
    );
};

export default NavBar;