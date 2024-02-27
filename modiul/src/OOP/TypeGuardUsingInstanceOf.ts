{
    // 
// type gard with interface 
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
    makeMeawe(){
console.log(`i am meaw`)
    }
}


// 
}
