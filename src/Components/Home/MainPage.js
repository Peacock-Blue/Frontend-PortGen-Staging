import React,{useState} from 'react';
import {Container, Header, Divider, Icon} from 'semantic-ui-react';
import Navbar from './Navbar';
import {Footer} from './Footer';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const [active, setActive] = useState('false');
  return (
    <div className={styles.body}>
      <Navbar tab='Home'/>
      <div className={styles.Body}>
        <Header size='huge' textAlign='center' className={styles.header}>
          APS<Icon name='chevron circle right' size='massive' className={styles.d}/>ev
        </Header>
        <Divider/>
        <Container className={styles.container}>
          Want to make a personal website but you don't know web development or you don't have time to design an online portfolio for yourself?
          <div onClick={()=>{(active==='true')?setActive('false'):setActive('true')}} className={(active==='false')?styles.show:styles.hide}>
            <Icon name='angle double right' className={styles.icon}/>
          </div>
          <div className={(active==='true')?styles.show:styles.hide}>
            <Icon name='angle down' onClick={()=>{(active==='true')?setActive('false'):setActive('true')}} className={styles.icon}/>
            <br/>
            We come with a platform where you don't need to know web development and spend hours for having an online portfolio.
            <br/>
            We will do that for you and that too for free of cost. You just need to register at our website and provide the details that you want to put in your portfolio.
            <br/>
            You can freely use the portfolio as your own website.
            <br/>
            Please give it a try, we will not let your expectations go down.
          </div>
        </Container>
        <Footer/>
      </div>
    </div>
  );
}
