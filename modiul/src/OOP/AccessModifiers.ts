{
    // 
    // private proparty name er age _ deya valo  
   class BankAccount {
     public readonly id: string
      public name: string
      protected _balance: number

      constructor(id:string,name:string,_balance:number){
        this.id = id
        this.name = name
        this._balance = _balance
      }
      
addBalance(newBalance: number){
    this._balance = this._balance + newBalance
}

getBalance(){
    return this._balance
}
   }

   class StudentAccount extends BankAccount {
           constructor(id:string,name:string,_balance:number){
            super(id,name,_balance)
           }

   }

   const goribManuserAccount = new BankAccount('23bd',"Mohammad Ansiur Rahman", 500)

   goribManuserAccount.addBalance(800)
   console.log(goribManuserAccount)
   const newBalance = goribManuserAccount.getBalance()
   console.log(newBalance)
   const studentAccount = new StudentAccount("BS1477","Nowsad Jahan", 1000)
   studentAccount.addBalance(500)
  const getBalance =   studentAccount.getBalance()
  console.log(studentAccount,getBalance)
    // 
}