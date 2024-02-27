{
    // 
// create promis function 
const createPromise = ()=> {
    return new Promise((resolve,reject)=>{
        const data:string = "My name is Khan"
        if(data){
            resolve(data)
        }else{
            reject("Data not found please try again")
        }
    })
}

const newData = async()=>{
    const data = await createPromise()
    console.log(data)
}
newData()
type User = {
    name: string
    age: number
    city: string
    bankAccount: string
}

const createNewPromise = ():Promise<User>=>{
    return new Promise<User>((resolve,reject)=>{
            const data2: User = {
                name: "anis",
                age: 23,
                city: "Dhaka",
                bankAccount: "City-Bank"
            }
       if(data2){
        resolve(data2)
       }else{
     reject("data not found please try again thank you")
       }
    })
}

type TodoData = {
    userId: number, id: number, title: string
}

const getToDo = async():Promise<TodoData>=>{

    const response= await fetch("https://jsonplaceholder.typicode.com/albums")
    const res:TodoData  = await response.json()
    console.log(res)
    return res
}
const getData2 = async():Promise<User>=>{
    const data2= await createNewPromise();
    console.log(data2)
    return data2
}
// getData2()
getToDo()
    // 
}