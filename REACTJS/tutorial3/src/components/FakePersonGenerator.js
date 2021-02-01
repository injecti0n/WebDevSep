import React, { Component } from 'react'
import {Container} from 'reactstrap'
/*

npm install reactstrap bootstrap faker

*/

class FakePersonGenerator extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Hello</h1>
                    {console.log(this.props.fakepeople)}
                </Container>
            </div>
        )
    }
}

export default FakePersonGenerator