const students = [
    { fN: "Ashreek", rN: 1, marks: 100 }, { fN: "Akash", rN: 2, marks: 90 }, 
    { fN: "Chinmay", rN: 3, marks: 75 }, { fN: "Ruchith", rN: 4, marks: 49 }, 
    { fN: "Sagar", rN: 5, marks: 22 }, { fN: "Parikshith", rN: 6, marks: 70 }, 
    { fN: "Pranay", rN: 7, marks: 52 }, { fN: "Suhani", rN: 8, marks: 61 }, 
    { fN: "Shivani", rN: 9, marks: 45 }
]

// ans = 90+100+75+69+70+72+61+65=

//Print total marks of students whise markjs id >60 after adding 20 to those who are having less than 60

// add 20 to who marks < 60
// shortlist marks > 60 students
// add sum of shortlisted students marks

//console.log(students)
// step 1
const grace_marks=students.map(student=>{
    if(student.marks < 60){
        student.marks += 20;
    }
    return student;
})
//console.log(grace_marks)

// step 2
const shortlisted=grace_marks.filter(student => student.marks > 60);
//console.log(shortlisted)

// step 3
const sumofstudentsmarks=shortlisted.reduce((acc,curr)=>{
    acc += curr.marks;
    return acc;
},0)

console.log(sumofstudentsmarks)

// or we can do by chaingin at once
// like

const sumOfStudentsMarksWhoseMarksIsGreaterThan60=students.map(student=>{
    if(student.marks < 60){
        student.marks += 20;
    }
    return student;
}).filter(student => student.marks > 60).reduce((acc,curr)=>{
    acc += curr.marks;
    return acc;
},0);

console.log(sumOfStudentsMarksWhoseMarksIsGreaterThan60);

const sumOfStudentsMarksWhoseMarksIsGreaterThan_60=students.map(student=>{
    if(student.marks < 60){
        student.marks += 20;
    }
    return student;
}).filter(student => student.marks > 60).reduce((acc,curr)=>{
    acc += curr.marks;
    return acc;
},0)
console.log(sumOfStudentsMarksWhoseMarksIsGreaterThan_60)