const accountId=122333//not mutable

let accountState;//undefined
let accountEmail="sanjaybhandari@gmail.com"//best 
var accountPassword ="1234"//dont use var
accountCity="virar"

// mutation check-------------
// accountId=2//not-allowed
accountEmail="sanjay@gmail.com"
accountPassword="sanjay"
accountCity="Banglore"//valid but don't use


// dont use var
// because issue of block scope and functional scope

console.log([accountId,accountEmail,accountPassword,accountCity,accountState]);

