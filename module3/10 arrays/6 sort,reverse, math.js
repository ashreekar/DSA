const colors=[
  'Red',       'Blue',
  'Pink',      'Grren',
  'Red',       'Blue',
  'Pink',      'Grren',
  'Bluevilet', 'Alibaque',
  'Bluevilet', 'Alibaque',
  'Pinky'
]

// sort()  // sorts original array
//colors.sort();

// toSorted() // gives new array

const newA=colors.toSorted()
console.log(newA)
console.log(colors)

// to reverse all elemts
colors.reverse();
console.log(colors)  // .reverse()  reverses the original

// toReversed()
// gives new array
const na=newA.toReversed()
console.log(newA)
console.log(na)

// include()

console.log(na.includes("Pinky"))
console.log(na.includes("Reddyky"))
