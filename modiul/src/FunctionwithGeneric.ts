const createArray = (param:string):string[]=>{
    return [param]
}
console.log(createArray("24234"))

const createArrayWithGeneric = <T>(param:T):T[]=>{
    return [param]
}
type Student = {
    result: boolean
    price:number
    name:string
}
const student = {result: true,price: 98,name:"anis"}
console.log(createArrayWithGeneric<Student>(student))

// creat function multiple generic parameter

const createArrayWithTuple = <T,Q>(param1: T,param2:Q): [T,Q] => {
    return [param1,param2]
}

const result1 = createArrayWithTuple<string,number>("NAis",78236)
console.log(result1)

type User ={
    name: string
    id:string
    phone: string
}
const user0 = {
    name: "mohammad anisur rahman",
    id:"234Adb",
    phone: "2739492347"
}
type User0 ={
    name: string
    id:string
    phone: string
}
const user00 = {
    name: "mohammad ",
    id:"234Adb",
    phone: "2739492347"
}
const result2 = createArrayWithTuple<User0,User>(user00,user0)
console.log(result2)


// create function wit one fix property 
const createArrayWithFixProperty = <T>(student: T) =>{
const course = "Brain Station 23"
return {
    ...student,course
}

}
type Student1 = {
    name:string
    roll:number
}
const student1 = createArrayWithFixProperty<Student1>({
    name: "anis",roll: 13535

})
console.log(student1)