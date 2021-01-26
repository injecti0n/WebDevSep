import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'

let number = 10
let studentNames=['Mikail','Priya','Susan','Adnan']
let myDB = [
    {
        id:1,
        title:'Lorem',
        body:'Ipsum'
    },
    {
        id:2,
        title:'Lorem1',
        body:'Ipsum'
    },
    {
        id:3,
        title:'Lorem2',
        body:'Ipsum'
    }
]

function sum(a,b){
    return a+b
}

function App() {
    return (
        <div>
            <Header />
            <Home companyname='intecbrussel' webdevclass={myDB} mathSum={sum} />
            {/* {alert('Hello world')} */}
            {console.log(number)}
            {/* {console.log(studentNames)} */}
            {/* {
               studentNames.map((student,index)=>(
                  <p className="lead" key={index}>{student}</p>
               )) 
            } */}
            {/* {
               myDB.map((obj,index)=>(
                   <p>{obj.title}</p>
               )) 
            } */}
            <Footer />

        </div>
    )
}

export default App
