log=console.log

// resizable array
// heterogenies data 

const array=[1,23,4,5,6,7,6]
log(array)

// log("Index 3: ",array[3])//indexing

// array.push(7)
// log("after Push:",array)

// array.pop()
// log("after pop:",array)

// array.unshift(10)
// log("after unshift:",array)//add at 0th index

// array.shift()
// log("after shift:",array)//remove at 0th index

// log(array.includes(1))//check element is present or not


// const newArr= array.join()
// log(newArr,' -> ',typeof newArr)//array to string convertion

// splice and slice
log(array.slice(0,4))
log(array)
log(array.splice(1,5))//change original array and include last element
log(array)//updated array
