// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//      greet(){
//         console.log(`hello my name is${this.name} and lam ${this.age} years old`);
        
//      };

//     }

// const person = new Person("alice", 25)

// person.greet()


class BankAccount{
    
    constructor(accountNumber, balance=0){
        this.accountNumber =accountNumber;
        this.balance =balance;
    }
  
    deposit(getAmount){
        console.log(`your deposit money ${getAmount} your balance ${this.balance+=getAmount}`);
        
    }
    withdraw(drawAccount){
        if(this.balance<drawAccount){
            console.log(`siz pul cixara bilmersiniz`);
            
        }else{
            console.log(`sizin cixardiginiz pul ${drawAccount} sizin balansiniz ${this.balance}`);
            
        }
        
    }
    show(){
        console.log(this.balance);
        
    }
}

let bank= new BankAccount(2005, 0)
bank.deposit(100)
bank.withdraw(150)
bank.show(100)
