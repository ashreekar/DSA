// Other methods

// to extract a charcter

let text="Hello@ bb Gg&mn";

// 1) charAt(place)
console.log(text.charAt(0));
console.log(text.charAt(12))

// 2) ASCII CODES
// str.charCodeAt(pos)
console.log(text.charCodeAt(12))

// 3)  .at()  can give negative indexing also
console.log(text.at(-14));
console.log(text.at(14));


// can use like array
console.log(text[12])

// strings are immutable
text[12]="-" // will not change
console.log(text)  // not changed



// Now for part pieces
// 1) slice
// string index, ending index but not included
console.log(text.slice(2));
console.log(text.slice(2,8));

console.log(text.slice(-5));

// 2) substring
// negative indexing is 0
console.log(text.substring(2,9))
console.log(text.substring(2))

// 3) substr(starting index, lenght)

console.log(text.substr(0,5))

/// lowercasse and uppercase
console.log(text.toLowerCase())
console.log(text.toLocaleUpperCase())