{
    // 
const arrayOfNumber : number[]= [23,4,4,43,435,53,53]
const arrayOfString : string[] = arrayOfNumber.map(number => number.toString())
console.log(arrayOfNumber,arrayOfString)

type AreaNumber = {
    height: string,
    width:number
}
// how to works = ====   [key in keyof T] : T[key]
// T = { height: string, width:number}
//   T["height"]
//   T["width"]
type Height  = AreaNumber["height"] // look up 
type AreaType<T> = {
    [key in keyof T] : T[key]
}
const array : AreaType<AreaNumber> = {
         height: "100",
         width: 34
}

console.log(array)


     // 
}