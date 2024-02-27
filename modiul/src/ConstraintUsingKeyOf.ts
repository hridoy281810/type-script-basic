{
// eta khobi interesting subject
type Vehicle= {
    bike:string
    car:string
    ship:string
}

type owner1 = "bike" | "car" | "ship"
type owner2 = keyof Vehicle
// const person1: owner2 =""

const getKeyOfProperty = <T,X extends keyof T>(obj: T, key: X) => {
   return obj[key]
}

const user ={
    name: "anis",
    roll:234,
    city: "Dhaka"
}

const result2 = getKeyOfProperty(user,"roll")
console.log(result2)


const getValueUseKey = <X,Y extends keyof X>(value: X, key: Y)=>{
    return value[key]
}
const personData = {
    name: "Mohammad Anisur Rahman",
    age: 23,
    gender: "male",
    blood: "A+",
    Phone: "0139458048"
}
const result12 = getValueUseKey(personData,"age")
console.log(result12)
// 

}