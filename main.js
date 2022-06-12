import {logger2} from "./logger/index.js"
import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from "./constants.js"
import * as constants from "./constants.js"

// Arrow function
const a = (log) => {
    return log
}
console.log(a('Hello'))

const b = (log) => ({log:log})
console.log(b('Hi'))

const obj = {
    obj_name: "Object basic",
    getObjectName: function(){
        return this.obj_name
    }
}
console.log(obj.getObjectName())

logger2("Message !!!", TYPE_WARN)
console.log(constants)
logger2("Mesage 2 !!!", constants.TYPE_LOG)

let str_name = "Javascript"
let str_price = 100
const course = {
    str_name,
    str_price,
    getName() {
        return `${str_name}: ${str_price}`
    }
}
console.log(course.getName())

// Dinh nghia key cho object duoi dang bien
let fieldName = "str_name"
let fieldPrice = "str_price"
const fieldCourse = {
    [fieldName]: "ReactJS",
    [fieldPrice]: 200
}
console.log(fieldCourse)

// Destructuring"
var array_course = ["Javascript", "PHP", "Golang"];
// var [c_js, d_php, e_go ] = array_course;
var [c_js, ...rest] = array_course;
console.log(c_js)
console.log(rest)

// Spread
var course2 = {
    name: "Javascript",
    price: 100,
    image: "no-image",
    child: {
        name: "ReactJS"
    },
    // description: "description value"
}
// var {name, price} = course2
var {name: parent_name, child:{name}, description = "default description"} = course2
console.log(parent_name)
console.log(name)
console.log(rest)
console.log(description)

// rest
let log_test = (...params) => {
    return params
}
console.log(log_test(1,2,3,4,5,6,7,8))

// destructuring
let log_test2 = ({name, ...rest}) => {
    return name
}
console.log(log_test2({
    name: "React Native",
    price: 1000,
    description: "default"
}))

// Spread
var array_1 = ["JS", "PHP", "Golang"];
var array_2 = ["React", "Ruby"];
var array_3 = [...array_2, ...array_1];
console.log(array_3);

var obj1 = {
    name: "js"
}
var obj2 = {
    name: "php",
    price: 5000
}
var obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3)

let log_spread = (...rest) => {
    for(var i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }
}
log_spread(...array_1)