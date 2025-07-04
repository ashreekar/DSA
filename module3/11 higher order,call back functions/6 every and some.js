// every after checking condition returns true if all elemnt met conditon

// let ages=[12,33,45,19,90];

// let all_adults=ages.every(age=>age >= 18)
// console.log(all_adults)  // false

let ages=[12,33,45,19,90];

let all_adults=ages.every(age=>age >= 18)
console.log(all_adults)   // true


// some opposite of every if one elemetn condition met returns true

let any_minor=ages.some(age=>age < 18)
console.log(any_minor)