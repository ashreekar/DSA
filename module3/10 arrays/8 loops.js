const fruits=["Apple","Banana","Dragonfruit","Guava","Grapes","Jackfruit","Mango","Orange"];

// for loop
// for(let i=0;i<fruits.length;i++){
//     console.log(`Fruit at index ${i} is `,fruits[i]);
// }

// for...of
for(let fruit of fruits){
    console.log(`fruit at index ${fruit.indexOf(`${fruit}`)} is `,fruit)
}

// for..in
for(let x in fruits){
    console.log(`FRUIT AT INDEX ${x} is `,fruits[x]);
}