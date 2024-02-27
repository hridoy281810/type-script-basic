// // nion And Intersection Types
// type FrontDeveloper = {
//     skills: string[];
//     designation: "front end developer"
// }
// type BackhandDeveloper = {
//     skills: string[];
//     designation2: "backhand developer"
// }
// type CombineDeveloper = FrontDeveloper & BackhandDeveloper 

// const developer: CombineDeveloper = {
//     skills: ['html','css','javascript'],
//     designation:'front end developer',
//     designation2:  "backhand developer"
// }
// console.log(developer)


// let anything: any;
// anything = "Next Level Developer"
// anything = 3434;
// (anything as number)

// const kgToGram = (value: string | number) : string | number | undefined =>{
//     if(typeof value === "string"){
//         const convertToNumber = parseFloat(value) * 1000
//         return `converted value is: ${convertToNumber}` 
//     }
//     else if(typeof value === "number"){
//         return value * 1000
//     }
// }
// const result2 = kgToGram("2") as string
// const result4 = kgToGram("2sdf") as string
// const result3 = kgToGram(345) as number
// console.log(result2)
// console.log(result3)
// console.log(result4)

interface User1 {
    name:string;
    phone:string
} 

interface User2{
    name: string;
    phone: string
}

const user1: User1 ={
    name: "Ansi",
    phone: "01766836468"
}
const user2: NewUser2 ={
    name: "Ansi",
    phone: "01766836468",
    role: "admin"
}

type User3 = {
    name:string;
    phone:string
} 
type User4 = {
    name:string;
    phone:string
} 
const user3: User3 ={
    name: "Ansi",
    phone: "01766836468"
}
const user4: newUser ={
    name: "Ansi",
    phone: "01766836468",
    role:"admin"
}

type newUser = User3 &  {
    role: string
}
interface NewUser2 extends User1  {role: string}

type Roll = number[]
const rollNumber:Roll1 = [232,3534,5456,4565,6]
interface Roll1 {
    [index: number] : number
}

// function 
type Add = (number1: number,number2: number)=> number
interface Add2 {
    (number1: number,number2: number):number
}
const add:Add2 = (number1,number2)=>number1 + number2
console.log(add(19,9))


// generic type 
type GenericArray <T> = Array<T>;
const regNumber : GenericArray<number> = [232,345,3544,5345]
const studentName:GenericArray<string> = ['Anis','anis2','anis4']
const trueFalse:GenericArray<boolean> = [true,false,true]

type UserType ={
    name:string;
    age:number
}
interface UserType2 {
    name:string;
    age:number
}
const user: GenericArray<UserType2> =[
    {
        name:'anis',
        age: 123
    },
    {
        name:'anis2',
    age: 1263
    },
]
console.log(user)

type GenericTupleArray <X,Y> = [X,Y]
const myInfo: GenericTupleArray<string,string> = ["MR,X","MR,I"] 
const myInfo2: GenericTupleArray<string,{myName: string, phone:number,age:number}> = [

    "anis",
    {
        myName:'ansi',
        phone:9374,
        age:734
    }
]
