{
    // Statics In OOP
    // 2.Bubble Sort
    // 1.Repeat Steps 2 and 3 for K=1 to N-1
    // 2.Set PTR =1 [Initializes Pass Pointer]
    // 3.Repeat while PTR>=N-K[Execute Pass]
    // (a)If A[PTR+1]<A[PTR] then
    // Interchange A[PTR] and A[PTR+1][End of If structure]
    // (b) Set PTR=PTR+1[End of Inner loop]
    // [End of step 1 outer loop]
    // 4.Exit

    class Counter {
      static count: number = 0
       static increment(){
            // static kore dile this er poriborte class er nam hobe 
           return Counter.count= Counter.count + 1
        }
     static decrement(){
       return Counter.count= Counter.count - 1
        }
    }

    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.decrement())

    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.increment())
    // 
}