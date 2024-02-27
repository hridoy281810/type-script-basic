{
    // 
// type gard with instanceof 
class Animal {
    name: string
    species: string 
    constructor(name:string,species:string){
        this.name = name
        this.species =species
    }
   makeSound(){

   }
}
class Dog extends Animal {
    constructor(name: string,species:string){
        super(name,species)
    }
    makeBark(){
console.log(`i am bark`)
    }
}
class Cat extends Animal {
    constructor(name: string,species:string){
        super(name,species)
    }
    makeMeaw(){
console.log(`i am meaw`)
    }
}

// to handle smart way 
const isDog = (animal: Animal): animal is Dog=>{
    return animal instanceof Dog
}
const isCat = (animal: Animal): animal is Cat=>{
    return animal instanceof Cat
}
const getAnimal = (animal:Animal)=>{
    animal.makeSound()
    if(isDog(animal)){
        animal.makeBark()
    }else if(isCat(animal)){
        animal.makeMeaw()
    }else{
        animal.makeSound()
    }

}
const dog = new Dog("Dog Bhai", "dog")
const cat = new Cat("Cat Bhai", "cat")
getAnimal(cat)
// 
}
