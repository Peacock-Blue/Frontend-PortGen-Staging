import React from 'react';
import {Drawer} from './Drawer';
import {Footer} from './Footer';
import {Container, Header, Grid} from 'semantic-ui-react';
import styles from './Qualification.module.css';
export const Qualification = ({userdata}) => {
  return (
    <>
      <Drawer/>
        <div className={styles.Body}>
          <Container className={styles.container}>
            {
              (userdata.metas.qualifications.length!==0)?
              (
                <div>
                  <Header size='large' content='Education'/>
                    <Grid centered columns={6}>
                      <Grid.Row color='grey'>
                        <Grid.Column textAlign='center'>Name</Grid.Column>
                        <Grid.Column textAlign='center'>Institution</Grid.Column>
                        <Grid.Column textAlign='center'>Field</Grid.Column>
                        <Grid.Column textAlign='center'>Start Date</Grid.Column>
                        <Grid.Column textAlign='center'>End Date</Grid.Column>
                        <Grid.Column textAlign='center'>Grade</Grid.Column>
                      </Grid.Row>
                    </Grid>
                    {userdata.metas.qualifications.map((qualification, index)=>(
                      <Grid centered celled columns={6}>
                        <Grid.Row>
                          <Grid.Column textAlign='center'>{qualification.name}</Grid.Column>
                          <Grid.Column textAlign='center'>{qualification.institution}</Grid.Column>
                          <Grid.Column textAlign='center'>{qualification.field}</Grid.Column>
                          <Grid.Column textAlign='center'>{qualification.startdate}</Grid.Column>
                          <Grid.Column textAlign='center'>{qualification.enddate}</Grid.Column>
                          <Grid.Column textAlign='center'>{qualification.grade}</Grid.Column>
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
