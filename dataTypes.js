// alert("hello js class")

console.log("welocme to my js class")



// three key to hold data
// var
// let
// const

var name = "dekeledi";
console.log(name);

let age = 40;
console.log("age");

const email = "dekeledi@gmail.com";
console.log(email);

// datatypes
// premitive datatype
// non-premitive datatype


// primitive
// string
let name2 = "dekeledi";
// number
// integer
let age2 = 25;                             
// float
let myNumber = 0.94;
// booolean
let isMarried = true;
// undefined
let notAssigned;
// null
let isActive = null;

// non-premitive
// array
let myArray = ["bag", "shoes", "hat", "jacket", "socks"];
console.log(myArray[3][2]);

//object
let user={
    name:"dekeledi",
    age:20,
    email:"rosemary@gmail.com",
    isStudent:false
};

console.log(user)

const user2 = {
    id :1,
    firstName: "john",
    lastName: "Doe",
    userName:"dekeledi",
    email: "john.doe@example.com",
    password:"unknowodinak123@34#$%^^",
    phone: "+1234567890",
    address:{
        street:"123 Main St",
        city:"New York",
        state:"NY",
        postalCode:"1000001",
        country:"canada"
    },

    dateOfBirth:"1990-01-01",
    isActive:true,
    roles:["admin","user"],
    lastLogin: "2024-10-14T10:30:00Z"
};

console.log(user2)


let age = 25;
if(age > 18){
    console.log("you are an adult")
} else if(age < 18){
    console.log("you are a minor")
} else{
    console.log("you are a teenager")
}