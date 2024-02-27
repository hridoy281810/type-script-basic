{
// Polymorphism
   class Person {
    getSleepHours(){
        console.log(`i am sleeping 8 hours`)
    }
   }
   class Student extends Person {
    getSleepHours(){
        console.log(`i am sleeping 7 hours`)
    }
   }
   class Developer extends Person {
    getSleepHours(){
        console.log(`i am sleeping 6 hours`)
    }
   }
   const getSleep =(param: Person)=>{
      param.getSleepHours() 
   }
   const intense1 = new Person()
   const intense2 = new Student()
   const intense3 = new Developer()
   intense1.getSleepHours()
   intense2.getSleepHours()
   intense3.getSleepHours()
   getSleep(intense1)
   getSleep(intense2)
   getSleep(intense3)

class Shape {
    getArea(){
        return 0
    }
}
class Circle extends Shape{
    radius: number
    constructor(  radius:number){
        super()
        this.radius = radius
    }
    getArea(){
        return (Math.PI *this.radius * this.radius)
    }
}
// height and width 
class Rectangle extends Shape{
    height: number
 width: number
    constructor(  height: number ,width: number){
        super()
        this.height =height
        this.width =width
    }
    getArea(){
        return this.height * this.width
    }
}
const area1 = new Circle(3) 
const rectangle = new Rectangle(3,5) 
area1.getArea()
rectangle.getArea
console.log(area1.getArea())
console.log(rectangle.getArea())
// 

}