{
    // 
type A = null
type B = undefined
type X = A extends null ? true: false
type Y = B extends undefined ? undefined: false
type Sheik ={
    tea : string
    coffee: string
    hotWater: string
}
type CheckFood<T> = T extends keyof Sheik ? true :false
type Hllo = CheckFood<"coffee">


    // 
}