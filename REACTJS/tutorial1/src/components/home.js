import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Slide from './widgets/Slide'
function Home({ companyname, webdevclass,mathSum }) {
    return (
        <div>
            <Slide />
            <Container fluid={true}>
                <Row>
                    <Col md="3">Sidebar</Col>
                    <Col md="9">Blog Listing
                    {console.log(companyname)}
                        {
                            webdevclass.map((obj, index) => (
                                <p key={index}>{obj.title}</p>
                            ))
                        }
                        {console.log("result=>",mathSum(5,6))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
