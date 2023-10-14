// Primitive->Stack memory
// 7 Types-> String, Number, Boolean, null, undefined, Symbol,BigInt

//non-Primitive-> non-refernce->Heap Memory
//Array, Object ,Funtions

// let int=1;
// console.log(int,'->',typeof int)

// let boolean=true;
// console.log(boolean,'->',typeof boolean)

// let string="sanjay";
// console.log(string,'->',typeof string)

// let nullField=null;
// console.log(nullField,'->',typeof nullField)

// let undef=undefined;
// console.log(undef,'->',typeof undef)

// let Bigint=121343124334534534543n;
// console.log(Bigint,'->',typeof Bigint)

// let sym1=Symbol("111")

// let sym2=Symbol("111")
// console.log(sym1===sym2)
// console.log(sym1==sym2)

// Reference Type

// const heros=["mom","dad","powerman","Relman"];
// console.log(heros)//output in list format
// console.log(typeof heros)// return object 

// let obj={
//     name:"sanjay",
//     age:22
// }
// console.log(obj);//output in dictionary format 
// console.log(typeof obj)// return object

// const myfunction = function(){
//     console.log("Hello World");
// }
// myfunction()
// console.log(typeof myfunction)// return object function

//---------------------------------------memory------------------------
// Primitve (Stack), Non-Primitive(Heap)

// let myname="sanjay bhandari"
// let name=myname
// name="ajay Bhandari"
// console.log(myname)
// console.log(name)

// let user1={
//     name:"snajay",
//     age:22
// }

// let user2=user1
// console.log(user1)
// console.log(user2)

// user1.age=23

// console.log("after changing age------")
// console.log(user1)
// console.log(user2)
