import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div>Copyright © {new Date().getFullYear()} All rights reserved</div>
        <div>Made with ❤️ by <a className={styles.nameLink} href="https://www.linkedin.com/in/ivana-maksimovic-870108225" target="_blank" rel="noopener noreferrer">
            Ivana Maksimovic
        </a></div>
    </footer>
);

export default Footer;

/*
<div>
    Give this website a <a style={{ textDecoration: 'none' }} href="https://github.com/SheLearningCode" target="_blank" rel="noopener noreferrer">
        ⭐ <span style={{ color: 'white' }}>on</span> GitHub
    </a>
</div>
*/
