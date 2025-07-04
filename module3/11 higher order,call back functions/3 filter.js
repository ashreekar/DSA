// filetrs in an array based on condition

// eg 1
// const num=[2,3,4,5,6,7,8,9,10];

// function even(num){
//     return num%2 === 0;
// }

// const even_no=num.filter(even);
// console.log(even_no)

// eg 2
// no greater than 5
// const greater=num.filter(num=>num>=5);
// console.log(greater)

// eg 3 
// object of students passed above 50 marks

const students=[
    {
        fN:"Ashreek",
        rN:1,
        marks:100
    },
     {
        fN:"Akash",
        rN:2,
        marks:90
    },
     {
        fN:"Chinmay",
        rN:3,
        marks:75
    },
     {
        fN:"Ruchith",
        rN:4,
        marks:49
    },
     {
        fN:"Sagar",
        rN:5,
        marks:22
    },
     {
        fN:"Parikshith",
        rN:6,
        marks:70
    },
     {
        fN:"Pranay",
        rN:7,
        marks:52
    },
     {
        fN:"Suhani",
        rN:8,
        marks:61
    },
     {
        fN:"Shivani",
        rN:9,
        marks:45
    }
]

const passed=students.filter(student=>student.marks >= 50)
console.log(passed)