// String methods

// length
let text="      Hello John !!     ";

console.log("Lenght of \"text\" is :",text.length);


// Note: strings are immutable
// So original string doesn't change
// so if we change have to stroe in new var

//replace
const replaced=text.replace("Hello","Hii");
console.log(text);
console.log(replaced);

//replaceAll
let textt="Hello Hello HelloHello Hello Not replace part"
const repall=textt.replaceAll("Hello","Hii")
console.log(textt)
console.log(repall) 


// split -- splits string gives an array
let words=textt.split(" ");
console.log(words)

let rand="    Anshika,     internshala, colour";
let ranwrd=rand.split(",");
console.log(ranwrd)

//repeat
console.log(text.repeat(4))

//trim
const trimmed=text.trim()
console.log(trimmed)

//trimStart
const trimStar=text.trimStart();
console.log(trimStar)

console.log(trimmed.length)
console.log(trimStar.length)

//trim end
const trimendd=text.trimEnd();
console.log(trimendd)


// concat

let a="Ashreek";
let b="A R";

let fullName=a.concat(b);
console.log(fullName)