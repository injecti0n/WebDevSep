import React, { Component } from 'react'
// import FakePersonGenerator from './components/FakePersonGenerator'
import Faker from 'faker'
import { Col, Container, Row } from 'reactstrap'
// import Weather from './components/Weather'
import Cryptocurrency from './components/Cryptocurrency'
import Mikail from './components/Mikail'
import Welcome from './components/Welcome'
export default class App extends Component {
  state = {
    people: [],
    blogposts: []
  }


  FakePerson = (howmany) => { // howmany = 19
    // document.getelementByid('howmany')
    // input element
    // function param
    let people = this.state.people;

    for (let index = 0; index < howmany; index++) {
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
    // const inputStyle = {
    //   width: '10%'
    // }
    return (
      <div>
        {/* <FakePersonGenerator fakepeople={this.state.people}/>
        <Input type="number" id="howmany" placeholder="20" style={inputStyle} />
        <Button onClick={()=>this.FakePerson(document.getElementById('howmany').value)}>Generate Fake Data</Button>
        <hr/>
        <Weather/> */}
        <Container fluid={true} >
          <Row>
            <Col md={12}>
              <Welcome />
              <Cryptocurrency />
              <Mikail/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
