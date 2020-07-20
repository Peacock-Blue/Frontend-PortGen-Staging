import React from 'react';
import {Drawer} from './Drawer';
import {Footer} from './Footer';
import {Container, Header, Grid} from 'semantic-ui-react';
import styles from './Achievements.module.css';
export const Achievements = ({userdata}) => {
  return (
    <>
      <Drawer/>
        <div className={styles.Body}>
          <Container className={styles.container}>
            {
              (userdata.metas.achievements.length!==0)?
              (
                <div>
                  <Header size='large' content='Achievements'/>
                    <Grid centered columns={2}>
                      <Grid.Row color='grey'>
                        <Grid.Column textAlign='center'>Description</Grid.Column>
                        <Grid.Column textAlign='center'>Date</Grid.Column>
                      </Grid.Row>
                    </Grid>
                    {userdata.metas.achievements.map((achievement, index)=>(
                      <Grid centered celled columns={2}>
                        <Grid.Row>
                          <Grid.Column textAlign='center'>{achievement.description}</Grid.Column>
                          <Grid.Column textAlign='center'>{achievement.date}</Grid.Column>
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
