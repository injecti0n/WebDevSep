// import nodejs modules
const SumModule = require('./customModule/Sum')
const DivisonModule = require('./customModule/Division')
const {a,b,c,sum,division} = require('./customModule/manyFunctions')
//react
//import {Container,Col,Row} from 'react-bootstrap'

//import {a,b,c,sum,division} from './customModule/manyFunctions'

// use here
SumModule(5,6)
DivisonModule(12,3)
a()
b()
c()
sum(10,10)
division(20,4);