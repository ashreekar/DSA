// switch statement

let dayNumber= new Date().getDay();
let dayte= new Date().getDate();
console.log(dayte)
console.log("Day number is ",dayNumber);
// dya number is based on monday,tue,wed,thu,fri,sat,sun
let day;
switch(dayNumber){
    case 0: console.log("Sunday"); day="Sunday"; break;
    case 1: console.log("Monday"); day="Monday"; break; 
    case 2: console.log("Tuesday"); day="Tuesday"; break;
    case 3: console.log("Wednesday"); day="Wednesday"; break;
    case 4: console.log("Thursday"); day="Thursday"; break;
    case 5: console.log("Friday"); day="Friday"; break;
    case 6: console.log("Saturday"); day="Saturday"; break;
    default: console.log("Invalid day number"); day="Not a day"; break;
}

// give break as after it executes case(true) it executes all other remailnig cases so value can get changed