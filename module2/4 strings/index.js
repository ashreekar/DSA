let firstName="Anshika2@";

console.log(typeof(firstName));

let secondName='Ashreek';
console.log(typeof(secondName));

let sentance="My name is 'Anshika' and my faviroite color is reds";
console.log(sentance);

let sentance1="My name is \"Anshika\" and my faviroite color is reds";
console.log(sentance1);

let words='Its\'s alright'
console.log(words)


// lenght property
// length of string
console.log(firstName.length)
console.log(sentance1.length)

// strings as object
let fullnamelit="Anshika Ahgarwal";
let fullName=new String("Anshika Ahgarwal");  // not recomended way
console.log(fullName);
console.log(typeof fullName);


console.log(fullnamelit == fullName)  // true
console.log(fullnamelit === fullName)  // false


let color1=new String("Red");
let color2=new String("red");

console.log(color1 == color2) // false bcs 2 objects is always false

// I js 2 objects comparing is always false