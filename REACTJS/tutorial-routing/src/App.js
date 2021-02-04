import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Blog from './pages/Blog';
import Home from './pages/Home';

/*

npm install react-router-dom

*/
export default class App extends Component {
  render() {

    const myLocalDB = [
      {
        id: 1,
        title: 'Lorem Ipsum',
        body: 'Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. '
      },
      {
        id: 2,
        title: 'Lorem Ipsum1',
        body: 'Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. '
      },
      {
        id: 3,
        title: 'Lorem Ipsum2',
        body: 'Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. '
      }
    ]


    return (
      <Router>
        <div>
          <NavigationBar />
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={() => <Blog data={myLocalDB} />} />
        
      </Router>
    )
  }
}
