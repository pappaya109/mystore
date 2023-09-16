import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <h1 className={styles.logo}>Papaya's Shop</h1>
            <nav className={styles.navContainer}>
                <ul className={styles.categoryNav}>
                    <Link to="#" className={styles.navLink}>카테고리1</Link>
                    <Link to="#" className={styles.navLink}>카테고리2</Link>
                    <Link to="#" className={styles.navLink}>카테고리3</Link>
                    <Link to="#" className={styles.navLink}>카테고리4</Link>
                </ul>
                <ul className={styles.userNav}>
                    <Link to="#" className={styles.navLink}>검색</Link>
                    <Link to="#" className={styles.navLink}>마이페이지</Link>
                    <Link to="#" className={styles.navLink}>카트</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header