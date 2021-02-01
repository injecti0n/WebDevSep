import React, { Component } from 'react'
import { Container } from 'reactstrap'
import fetch  from 'node-fetch'
/*

npm install reactstrap bootstrap faker

*/


class FakePersonGenerator extends Component {

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Hello</h1>
                    {/* {console.log(this.props.fakepeople)} */}
                    {
                        this.props.fakepeople.map((people, index) => (

                            <p className="lead">
                                Name:{people.name}<br />
                                Username:{people.username}
                            </p>


                        ))
                    }
                </Container>
            </div>
        )
    }
}

export default FakePersonGenerator