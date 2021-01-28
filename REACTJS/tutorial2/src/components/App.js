import React, { Component } from 'react'
import { Input, Label,Button } from 'reactstrap'
import Counter from './Counter'
// import ChildComponent from './ChildComponent'




class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Arne',
            password: '1234',
            age: 12,
            scores: [1, 2, 3, 4],
            nestedObj: {
                test: [1, 2]
            },
            myFunction: () => console.log('test'),
            comment: ''


        }
    }



    TestFunction = () => {
        console.log('hello world')
        this.setState({
            username: 'Oguz',
            age: this.state.age + 1

        })
        console.log(this.state.username)
    }


    inputHandler = (e) => {
        // console.log(e.target.value)
        this.setState({
            comment: e.target.value
        })
    }



    render() {
        return (
            <div>
                {/* {console.log(this.props.data)}
                <ChildComponent username="Adnan" />
                {console.log(this.state)}
                {this.state.myFunction()}
                <a href="#" onClick={this.TestFunction} >Click me!</a> */}
                <Counter projectname="Counter Project v1.0" />
                <hr />
                <Input type="text" className="bg-primary text-white" onChange={this.inputHandler} />

                <p className="lead">
                    {this.state.comment}
                </p>

                <Label>fullname: </Label>
                <Input type="text" className="bg-primary text-white" onChange={this.inputHandler} />
                <Label>age: </Label>
                <Input type="text" className="bg-primary text-white" onChange={this.inputHandler} />
                <Label>email: </Label>
                <Input type="text" className="bg-primary text-white" onChange={this.inputHandler} />
                <Button>Send Message</Button>


            </div>
        )
    }
}


export default App