import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
  
        }

        // this.Increase = this.Increase.bind(this)
    }


    Increase = () => {
        console.log("Increase Function and non-arrow-func")
        this.setState({
            count: this.state.count + 1
        })
    }

    Decrease = () => {



        if (this.state.count <= 0) {
            this.setState({
                count: 0
            })
        } else {
            this.setState({
                count: this.state.count - 1
            })
        }


    }

   
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>{this.props.projectname}</h1>
                            <p className="lead font-weight-bold text-danger">Count: {this.state.count}</p>
                            <hr />
                            <Button className="mr-1" onClick={this.Increase} color="danger">+</Button>
                            <Button color="dark" onClick={this.Decrease}>-</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
