import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Slide from './widgets/Slide'

function Home() {
    return (
        <div>
            <Slide />
            <Container fluid={true}>
                <Row>
                    <Col md="3">Sidebar</Col>
                    <Col md="9">Blog Listing</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
