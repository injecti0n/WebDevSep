import React, { Component } from 'react'
import FakePersonGenerator from './components/FakePersonGenerator'
import Faker from 'faker'
import { Button } from 'reactstrap'
export default class App extends Component {
  state = {
    people: [],
    blogposts: []
  }


  FakePerson = () => {
    let people = this.state.people;

    for (let index = 0; index < 10; index++) {
      let name = Faker.name.findName()
      let username = Faker.internet.userName()
      let avatar = Faker.internet.avatar();
      let obj = {
        name: name,
        username: username,
        avatar: avatar
      }
      //  console.log(obj)
      people.push(obj) // 10 times
    }

    this.setState({
      people: people
    })
  }

  render() {
    return (
      <div>
        <FakePersonGenerator />
        <Button onClick={this.FakePerson}>Generate Fake Data</Button>
        {console.log(this.state.people)}
      </div>
    )
  }
}
