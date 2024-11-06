const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ''},
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
// 17
// let sum = numbers.reduce((a,b)=>{return a+b})
// console.log(sum);
// //////////////////////////////////////
// let cem = 0
// numbers.map(item => {
//     return cem += item
// })

// console.log(cem);
//////////////




// 16
// let GetStringLists =(arr)=>{
//     arr.map(item =>{

        
//         if(typeof item === "string"){
//             console.log(item);
//         }
//     })
// }

// GetStringLists([1,2, 5 ,"sda", "fgaspgh", 445,"aspg"]);



// 15
// let arr=[]
// let filtered = products.filter((item)=>{
//     if(item.price){
//         arr += item
//         return item
//     }
// })
// console.log(filtered);


// 14
// let arr = new Array()
// let e=names.filter((item)=>{
//     if(item.toLowerCase().startsWith("e")){
//             return item
//     }
// })
// console.log(e);



// 13
// let herf = countries.filter((item)=>{
//     return item.length>=6
    
// })
// console.log(herf);


// 12

// let herf = countries.filter((item)=>{
//     return item.length==6
    // if(item.length==6){
    //     return item
    // }
// })
// console.log(herf);


// 11
// let landd = new Array()
// let land = countries.filter (country => {
//     country=country.toLowerCase()
//     let countrys = country.endsWith("land")
    
//     if(countrys){
//         landd.push(country)
//     }
    
    
// })

// console.log(landd);





// 10
// products.map((item) =>{
//     let text = item.product + "-" + item.price
//     console.log(text)
// })



// 3
// countries.forEach(element=>{
//     console.log(element);
// } 
// )
    


// 4
// names.forEach(item =>{
//     console.log(item);
    
// })


// 5
// numbers.forEach(item=>{
//     console.log(item);
    
// })

// 6

// let olke = countries.map(item=> {
//     return  item.toUpperCase()

// })

// console.log(olke);

// 7
// let uzun=countries.map(item=>{
//     return item.length
// })
// console.log(uzun);

// 8
// let kv =numbers.map(item=> {
//     return item **2
// })
// console.log(kv);


// 9
// let boyuk= names.map(item=>{
//     return item.toUpperCase()
// })
// console.log(boyuk);

