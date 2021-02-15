import React, { useRef, useState } from 'react'
import { Form,Button, Container } from 'react-bootstrap'
import ProxyComponent from './ProxyComponent'
// useRef
function App() {
  const [contact,setContact] = useState()

  const emailRef = useRef();
  const genderRef = useRef();
  const countryRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
   // console.log('hello submit')
    //console.log(emailRef.current.value)
    const obj = {
      email:emailRef.current.value,
      gender:genderRef.current.value,
      country:countryRef.current.value,
      messsage:messageRef.current.value
    }
    setContact(obj)
  }

  return (
    <div>
      <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Gender</Form.Label>
          <Form.Control ref={genderRef} as="select">
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Example multiple select</Form.Label>
          <Form.Control ref={countryRef} as="select" multiple>
            <option>Belgium</option>
            <option>Germany</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control ref={messageRef} as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      </Container>
      {console.log(contact)}
      <ProxyComponent/>
    </div>
  )
}

export default App
