{
// 

// parent start
class Parent {
    name: string
    address: string
    age:number
    constructor(name: string,address: string,age:number){
        this.name = name
        this.address = address
        this.age = age
    }
    getSleep(numberOfHours: number){
        console.log(`${this.name} will be sleep for ${numberOfHours} h`)
    }
}

// parent end 
// student start 
class Student extends Parent {
    constructor(name: string,address: string,age:number){
        super(name,address,age)
    }
}
const student = new Student("anis","dhaka",18)
student.getSleep(7)
// student end 
// teacher start 
class Teacher extends Parent {
    designation: string
    constructor(name: string,address: string,age:number,designation: string){
        super(name,address,age)
        this.designation =designation
    }
   getClasses(numberOfClasses:number){
    console.log(`${this.name} take total num of class is ${numberOfClasses} `)
   }
}
const teacher = new Teacher("Mr.Ahad","dhaka",23,"professor")
teacher.getSleep(7)
teacher.getClasses(6)
// teacher end
    // 
}