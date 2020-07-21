import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Main} from './Main';
import {Works} from './Works';
import {Qualification} from './Qualification';
import {Achievements} from './Achievements';
import 'semantic-ui-css/semantic.min.css';

export const App = ({userdata}) => {
  /*userdata = {
    'email': 'kanrar.pratim@gmail.com',
    'metas': {
      'name': 'Pratim Kanrar',
      'about': 'Passionate, eager to learn new things and willing to work on challenging projects.',
      'achievements': [{
        'description': 'blah award',
        'date': '2020-07-03'
      }],
      'qualifications': [{
        'name': 'blah',
        'institution': 'lol',
        'grade': 'f',
        'startdate': '2020-07-01',
        'enddate': '2020-07-02',
        'field': 'blah'
      }],
      'works': [{
        'institution': 'lol',
        'startdate': '2020-07-01',
        'enddate': '2020-07-02',
        'description': 'blah'
      }],
      'photoURI': 'pratim.jpg'
    }
  };*/
  let link = '/portfolio/'+userdata.uname;
  userdata.metas = userdata.meta;
  userdata.email = userdata.emails[0];
    return (
        <Router>
          <Switch>
            <Route path={link+'/education'} exact>
              <Qualification userdata={userdata}/>
            </Route>
            <Route path={link+'/works'} exact>
              <Works userdata={userdata}/>
            </Route>
            <Route path={link+'/achievement'} exact>
              <Achievements userdata={userdata}/>
            </Route>
            <Route path={link} exact>
              <Main userdata={userdata}/>
            </Route>
          </Switch>
        </Router>
    );
}
