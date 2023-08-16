import React from 'react';
import classes from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <p>&copy; 2023 Socailify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
