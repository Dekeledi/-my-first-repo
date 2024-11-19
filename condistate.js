
//    if, else, else if

let age = 25;
if(age > 18){
    console.log("you are an adult")
} else if(age < 18){
    console.log("you are a minor")
} else{
    console.log("you are a teenager")
}

let fruit = "berry"
if(fruit === "orange"){
    console.log("we have oranges in the store")
} else if(fruit === "bannana"){
     console.log("we have banannas in the store")
} else if( fruit === "coconut"){
    console.log("we have coconut in the store")
} else if( fruit === "apple"){
    console.log("we have apples in the store")
} else{
    console.log("we don't have that fruit in the store")
}
     
// switch statement
// case - else if
// default - else


let fruit1 = "apple";

switch (fruit1) {
    case "orange":
        console.log("it is orange")
        break;
    case "bannana":
        console.log("it is bannana")
        break;
    case "coconut":
        console.log("it is coconut")
        break;
    case "apple":
        console.log("it is apple")
        break;
    default:
        console.log("we dont have that fruit in the store")
        break;
}

let age1 = 17;

switch(age1){
    case 18:
        console.log("you are an adult")
        break;
    case 17:
        console.log("you are a minor")
        break;
    default:
        console.log("you are a teenager")
}

const actions = ["walk", "stop", "pause"];
let userAction = "walk";
let isLoggedIn = true;

switch(true){
    case actions.includes(userAction) && isLoggedIn:
        console.log("Action permitted:" + userAction);
        break;

    case actions.includes(userAction) && !isLoggedIn:
        console.log("Please login to perform action:");
        break;

    default:
        console.log("Invalid action");
}

if age = 20;
