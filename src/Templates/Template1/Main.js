import React from 'react';
import {Drawer} from './Drawer';
import {Body} from './Body';
import {Footer} from './Footer';
export const Main = ({userdata}) => {
  return (
    <>
      <Drawer/>
      <Body userdata={userdata}/>
      <Footer email={{'mail': userdata.email}}/>
    </>
  );
}

