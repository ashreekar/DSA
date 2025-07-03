let namme=["Ashreek","Darshan","Shivakumar","Manoj","Hanumanthappa","Sharath"];
//console.log("Before delete nammer[3] ",namme)

// delete arr[index]
// delete namme[3];
// console.log("After delete nammer[3] ",namme)

// After delete nammer[3] [
//   'Ashreek',
//   'Darshan',
//   'Shivakumar',
//   <1 empty item>,
//   'Hanumanthappa',
//   'Sharath'
// ] 

// Splice

// tyoe 1 wanna delete something one thing
// console.log("Before splice ",namme)
// namme.splice(3,1)
// console.log("After splice ",namme)

// tyoe 2 wanna delete many thing
// console.log("Before splice ",namme)
// namme.splice(3,2)
// console.log("After splice ",namme)

// tyoe 3 wanna add something with deleting something
// console.log("Before splice ",namme)
// namme.splice(3,2,"Dhanalksmi","Prajwal","Madhura")
// console.log("After splice ",namme)

// tyoe 4 wanna add something withou deleting something
// console.log("Before splice ",namme)
// namme.splice(3,0,"Dhanalksmi","Prajwal","Madhura")
// console.log("After splice ",namme)

// splice also returns
// console.log("Before splice ",namme)
// let namme_ret=namme.splice(2)
// console.log("returned array ",namme_ret)
// console.log("After splice ",namme)


// slice
// returns modufued array and not modifies original arrya

// console.log("Before slice ",namme)
// let namme_ret=namme.slice(2)
// console.log("returned array ",namme_ret)
// console.log("After slice ",namme)

// console.log("Before slice ",namme)
// let namme_ret=namme.slice(2,4)
// console.log("returned array ",namme_ret)
// console.log("After slice ",namme)

// console.log("Before slice ",namme)
// let namme_ret=namme.slice(2,5,"Ashreek")  // last arg is not considered
// console.log("returned array ",namme_ret)
// console.log("After slice ",namme)


// toSpilced
// donot splice modify original array

const arr=[1,2,3,4,5,6,7]
console.log(arr)

const na=arr.toSpliced(2,0,1,2,3,4)
console.log(arr)
console.log(na)