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