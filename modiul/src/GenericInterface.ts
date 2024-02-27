{
    

    interface Developer<T,X,Z=null> {
        name:string;
        age: number;
        technology: string
        salary?:number
        computer: {
            brand: string
            model: string
            publishYear: number
        },
        smartPhone?:T
        smartWatch?:X
        bike?: Z
    }
    type Ttype = {phoneName: string,phoneModel:string,price:number}
    const porDeveloper :Developer<Ttype,null> = {
        name: "Anis",
        age:24,
        technology: "React",
        computer: {
            brand: "Hp",
            model: "XYEVJ-797",
            publishYear: 1998
        } ,
        smartPhone: {
            phoneName: "POCO",
            phoneModel: "pocoM3",
            price: 16000
        }

    }
    console.log(porDeveloper)
type Bike ={
    bikeBrand: string
    model: string
    price: number
}
const poorDeveloper: Developer<null,SmartWatch,Bike>={
    name:"MOhammad Anisur Rahman",
    age: 26,
    technology: "react",
    salary: 200000,
    computer: {
        brand: "Apple",
        model: "Apple-5376",
        publishYear: 1987,
    },
    smartWatch:{
        brand:"apple",
        model: "apple-8697",
        price: 2354
    },
    bike: {
        bikeBrand: "yamaha",
        model: "yamaha-62983",
        price: 30897879
    }
}  
console.log(poorDeveloper)

interface PoorDeveloper<T> {
    name:string;
    age: number;
    technology: string;
    salary: number
    computer: {
        brand: string
        model: string
        publishYear: number
    },
    smartWatch:T
}
interface SmartWatch  {
    brand:string
    model: string
    price: number
}
}