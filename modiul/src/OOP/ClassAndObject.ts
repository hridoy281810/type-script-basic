{
    // 
class Animal {
    // name: string;
    // address: string;
    // age: number;
    // sound: string
    constructor(public name:string,public address: string,public age:number,public sound: string){
        // this.name = name
        // this.address =address
        // this.age = age
        // this.sound =sound

    }
    makeSound() {
        console.log(`${this.name} sound ${this.sound}`)
    }

}
const dog = new Animal("doggy","dhdaka",23,"gew gew")
const cat = new Animal("cat","trishal", 45, "meaw meaw")
dog.makeSound()
cat.makeSound()
    // 
}