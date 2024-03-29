{
    // 
//    type gard 
type Alphanumeric = number | string
const add = (param1: Alphanumeric,param2: Alphanumeric):Alphanumeric=>{
    // Operator '+' cannot be applied to types 'string | number' and 'string | number'
    // return param1 + param2
    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2
    }else{
        return param1.toString() + param2.toString()
    }
}
console.log(add(23,"2342"))
console.log(add(23,2))

// in gard 
type AdminUser ={
    name: string
    role: "admin"
}
type NormalUser = {
    name: string
} 
const getUser = (user: AdminUser| NormalUser) =>{
      if("role" in user){
        console.log(`my name is ${user.name} my role is ${user.role}`)
      }else{
        console.log(`my name is ${user.name}`)
      }
}
const normalUser: NormalUser = {
    name: "Anis"
}
const adminUser: AdminUser = {
    name: "Mr. Admin Anis",
    role: "admin"
}
getUser(normalUser)
getUser(adminUser)
    // 
}