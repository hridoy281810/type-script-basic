{
    // Abstraction In OOP
    // Abstraction with interface 
    interface Vehicle {
    getStartEng(): void;
    getStopEng(): void;
    move(): void

  }
  class Car implements Vehicle {
    getStartEng(): void {
        console.log("start eng in my car")
    }
    getStopEng(): void {
        console.log('stop eng in my car')
    }
    move(): void {
        console.log('my car is moving')
    }
  }

  const car = new Car()
  car.getStartEng()
  car.getStopEng()
  car.move()
//   Abstraction with abstract class 
  abstract class Car2  {
    abstract getStartEng(): void 
    abstract getStopEng(): void 
    abstract  move():void
test(){
    console.log("first")
}
  }
  
class Vehicle2 extends Car2 {
    getStartEng(): void {
        console.log("toyota start")
    }
    getStopEng(): void {
        console.log("toyota stop")
    }
    move(): void {
        console.log("car move now")
    }
}

const car3 = new Vehicle2()
car3.getStartEng()
car3.getStopEng()
    // 
}