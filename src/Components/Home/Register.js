import React, {useState} from 'react';
import {Container, Header, Divider, Icon, Form, Button} from 'semantic-ui-react';
import {Footer} from './Footer';
import styles from './Register.module.css';

export const Register = () => {
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [confirm, setConfirm] = useState('');
  return (
    <div className={styles.body}>
      <Container className={styles.Body}>
        <a href='/'>
          <Icon name='arrow left' className={styles.back}/>
        </a>
        <div className={styles.link}>
          <a href='/login'>Already Registered? Login</a>
        </div>
        <Header size='huge' textAlign='center' content='Registration Form' className={styles.header}/>
        <Divider/>
        <div className={styles.form}>
          <Form>
            <Form.Field required>
              <label className={styles.label}>Username</label>
              <input placeholder='Username' onChange={(e)=>{setUname(e.target.value)}} required/>
            </Form.Field>
            <Form.Field required>
              <label className={styles.label}>Email</label>
              <input placeholder='Email Id' type='email' onChange={(e)=>{setEmail(e.target.value)}} required/>
            </Form.Field>
            <Form.Field required>
              <label className={styles.label}>Password</label>
              <input placeholder='Password' type='password' onChange={(e)=>{setPasswd(e.target.value)}} required/>
            </Form.Field>
            <Form.Field required>
              <label className={styles.label}>Confirm Password</label>
              <input placeholder='Confirm Password' type='password' onChange={(e)=>{setConfirm(e.target.value)}} required/>
            </Form.Field>
            <br/>
            <Button type='submit' onClick={()=>{
              if(passwd === confirm && uname && passwd){
                let data = {
                  'username': uname,
                  'email': email,
                  'passwd': passwd
                }
                console.log(data);
              }
            }} color='green'>Submit</Button>
          </Form>
        </div>
        <div className={(passwd===confirm)?styles.hide:styles.alert}>
          Passwords don't match
        </div>
      </Container>
      <Footer/>
    </div>
  );
}
