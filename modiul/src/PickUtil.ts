{
    // 
// utility 
// pick 

type Person = {
    name:string
    address:string
    age: number
    email?: string
    phoneNumber: string
}
// pick dia jei koita info type lagbe seta result dibe and omit dia jei koita bad dite cai type theke segolo bad dia bakita output dibe

type AgeName = Pick<Person,"name"|"age">
type ContactNumber = Omit<Person,"name"|"age">
// jodi optional property gula require kore new type convert korte cy
// email is req
type PersonRequire = Required<Person>
// Partial sob gulake optional banai dibe
type PersonPartial = Partial<Person>
// readonly
type PersonReadOnly = Readonly<Person>
const person3 : PersonReadOnly = {
    name:"anis",
    address:"dhaka",
    age: 34,
    email:" adu@gmail.com",
    phoneNumber: "0172886348"
}

// record 
type MyObj = {
    a: string,
    b:string
}
type Obj = Record<string,string>
const objRecord : Obj = {
    a:"hello",
    b: "hi",
    name: "abjsd",
    number: "2343"
}



const person2: ContactNumber = {
    address: "Dhaka",
    phoneNumber:"02934907"
}
console.log(person2)

const person1:AgeName = {
    name: "anis",
    age: 34}
    // 
}
