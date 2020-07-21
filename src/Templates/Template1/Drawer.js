import React, {useState} from 'react';
import {Sidebar, Menu, Icon, Divider} from 'semantic-ui-react';
import styles from './Drawer.module.css';

export const Drawer = ({userdata}) => {
  const [visible, setVisible] = useState(0);
  let link = '/portfolio/'+userdata.uname;
  return (
    <>
      <div className={(visible===1)?styles.show:styles.hide}>
        <Sidebar.Pushable className={styles.drawer}>
          <Sidebar
            as={Menu}
            icon='labeled'
            inverted
            vertical
            visible={true}
            width='thin'
            className={styles.drawer}
          >
            <Menu.Item onClick={()=>{setVisible(0)}}>
              <Icon name='close'/>
            </Menu.Item>
            <Menu.Item as='a' href={link}>
              <Icon name='home' />
              Home
            </Menu.Item>
            {((userdata.metas.works.length!==0))?(<Menu.Item as='a' href={link+'/works'}>
              <Icon name='github' />
              Projects
            </Menu.Item>):<div/>}
            {(userdata.metas.qualifications.length!==0)?(<Menu.Item as='a' href={link+'/education'}>
              <Icon name='graduation cap' />
              Qualifications
            </Menu.Item>):<div/>}
            {(userdata.metas.achievements.length!==0)?(<Menu.Item as='a' href={link+'/achievement'}>
              <Icon name='winner' />
              Achievements
            </Menu.Item>):<div/>}
          </Sidebar>
        </Sidebar.Pushable>
      </div>
      <div className={(visible===0)?styles.menu:styles.hide}>
        <Icon name='bars' size='large' onClick={()=>{setVisible(1)}} className={styles.menuicon}/>
      </div>
      <Divider className={styles.divider}/>
    </>
  );
}
