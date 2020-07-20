import React from 'react';
import {Drawer} from './Drawer';
import {Footer} from './Footer';
import {Container, Header, Grid} from 'semantic-ui-react';
import styles from './Works.module.css';
export const Works = ({userdata}) => {
  return (
    <>
      <Drawer/>
        <div className={styles.Body}>
          <Container className={styles.container}>
              {
                (userdata.metas.works.length!==0)?
                (
                  <div>
                    <Header size='large' content='Projects'/>
                      <Grid centered columns={4}>
                        <Grid.Row color='grey'>
                          <Grid.Column textAlign='center'>Institution</Grid.Column>
                          <Grid.Column textAlign='center'>Start Date</Grid.Column>
                          <Grid.Column textAlign='center'>End Date</Grid.Column>
                          <Grid.Column textAlign='center'>Description</Grid.Column>
                        </Grid.Row>
                      </Grid>
                      {userdata.metas.works.map((work, index)=>(
                        <Grid centered celled columns={4}>
                          <Grid.Row>
                            <Grid.Column textAlign='center'>{work.institution}</Grid.Column>
                            <Grid.Column textAlign='center'>{work.startdate}</Grid.Column>
                            <Grid.Column textAlign='center'>{work.enddate}</Grid.Column>
                            <Grid.Column textAlign='center'>{work.description}</Grid.Column>
                          </Grid.Row>
                        </Grid>
                      ))}
                  </div>
                ):(<div/>)
              }
            </Container>
        </div>
      <Footer email={{'mail': userdata.email}}/>
    </>
  );
}
