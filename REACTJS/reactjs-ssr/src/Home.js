import React from 'react';
import ChildComponent from './ChildComponent';

class Home extends React.Component {

  state = {
    id:1,
    username:'root'
  }

  render() {
    return (
      <div className="Home">
       <h1>Hello world</h1>
       <ChildComponent userdata={this.state}/>
      </div>
    );
  }
}

export default Home;
