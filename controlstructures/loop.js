// loops are used to execute a block of code multiple times or repeat a block of code until a certain condition is met.

for (let i = 0; i < 100; i++) {
    console.log("i have a crush" + i);
};

const colors = ["red", "green", "blue", "yellow", "orange", "purple"];

for (let i = 0; i < colors.length; i++) {
    console.log("color:", colors[i]);
};


// i means index    
// colors.length means the length of the array

const fruits = ["apple", "banana", "orange", "grape", "kiwi", "mango"]

for (let i = 0; i < fruits.length; i++) {
    console.log("fruit:", fruits[i]);
};

const students = [
    { name: "john", age: 20 },
    { name: "jane", age: 21 }, 
    { name: "joe", age: 22 }
     ];

for (let i = 0; i < students.length; i++) {
    console.log("student:", students[i].name, "Age:", students[i].age);
}

// [] means array
// {} means object
// . means dot notation
// [] means bracket notation
// . and [] are used to access the properties of an object or array
// [] is used to access the elements of an array
// . is used to access the properties of an object
// joe is the name of the object
// age is the property of the object
// students[i] is the index of the array
// students[i].name is the name of the student
// students[i].age is the age of the student
// 20 is the age of the student(number)

const info = [ {name: "rosemary", age: 20, school: "new horizon", grade: "a"}]
// info is the array
for (let i = 0; i < info.length; i++) {
    console.log(
                "student:", info[i].name,
                "Age:", info[i].age,
                "school:", info[i].school,
                "grade:", info[i].grade 
               );
}

// while loop
let i = 0;
while (i < 10) {
    console.log("count is:" + i);
    i++;
}
// while loop is used to execute a block of code as long as a specified condition is true

// i is the counter

for(let i = 0; i < mySelf.length; i++) {
    console.log(mySelf[i])
}

    

