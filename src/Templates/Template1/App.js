import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Main} from './Main';
import {Works} from './Works';
import {Qualification} from './Qualification';
import {Achievements} from './Achievements';
import 'semantic-ui-css/semantic.min.css';

class App extends Component{
  userdata = {
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
  };
  render(){
    return (
        <Router>
          <Switch>
            <Route path="/" exact>
              <Main userdata={this.userdata}/>
            </Route>
            <Route path="/education">
              <Qualification userdata={this.userdata}/>
            </Route>
            <Route path="/work">
              <Works userdata={this.userdata}/>
            </Route>
            <Route path="/achievement">
              <Achievements userdata={this.userdata}/>
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
