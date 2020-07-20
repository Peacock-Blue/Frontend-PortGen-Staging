import React from 'react';
import {Icon} from 'semantic-ui-react';
import styles from './Footer.module.css';

export const Footer = ({email}) => {
  return (
    <>
      {
        (email.mail)?(
          <div className={styles.footer}>
            <Icon name='mail'/>
            {email.mail}
          </div>
        ):
        (<div/>)
      }
    </>
  );
}
