{
    // 
    // <T extends Student1> const tent

    const createArrayWithFixProperty = <T extends Student1>(student: T) =>{
        const course = "Brain Station 23"
        return {
            ...student,course
        }
        
        }
        type Student1 = {
             id:string
             name:string
            roll:number

        }
        const student1 = createArrayWithFixProperty<Student1>({
          id:'23hdi' , name: "anis",roll:244
        
        })
        console.log(student1)



// 
}

