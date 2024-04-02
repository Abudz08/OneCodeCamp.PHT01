//Conditional statement

let age = 15;

if (age >=18){
    console.log("You are eligible to vote.");
} 

else{
    console.log("You are not eligible to vote.")
}


//if-else else-if statement
let temperature = 32;

if (temperature < 0){
    console.log("It is freezing.");
}

else if (temperature >= 0 && temperature < 20){
    console.log("It is cold outside.")
}

else if (temperature >= 20 && temperature < 26){
    console.log("It is warm outside.")
}

else{
    console.log("It is hot outside.")
}

//Switch statement
let day = 'Monday';
switch (day){
    case 'Monday':
        console.log("It's the start of the week.")
        break;
    case 'Friday':
        console.log("It's the end of the week.")
        break;
    default:
        console.log("It's just a regular day.")
        break;
}