// const num=200
// console.log(num," ",typeof num)//number

// const balance = new Number(200)
// console.log(balance," ",typeof balance)//object

// console.log("length: ",balance.toString().length);

// let rate=12.1212121
// console.log("toFixed: ",rate.toFixed(2));//set precision

// const othernum=123.53534
// console.log("value 123.53534 : add precesion -> ",othernum.toPrecision(3));
// // suppose digit count before point is 3 but if it increase 
// othernum1=1235.53534
// console.log("value 123.53534 : add precesion -> ",othernum1.toPrecision(3));
// //use toPrecision -> when u are sure about digit cpunt 

// const hundred =10000000
// console.log(hundred.toLocaleString());//US based string
// console.log(hundred.toLocaleString('en-IN'));//indian based string

// -----------------------------Math------------------------------

// console.log(Math);

// console.log(Math.abs(-12131));
// console.log(Math.round(123.23244));
// console.log(Math.sqrt(16));
// console.log(Math.pow(2,2));
// console.log(Math.ceil(12.45456));
// console.log(Math.floor(12.45456));
// console.log(Math.min(1,3,6,3,8,1));
// console.log(Math.max(1,3,6,3,8,1));
// console.log(Math.random());//always return value between 0 and 1
// console.log(Math.round(10*Math.random())+1);//range 0-10 change start by 1

const min=1;
const max=6;

console.log(Math.floor(Math.random()*(max-min+1)+min))



