// Functions - reusable block code

function greet(){
    console.log("Hello World!");
    console.log("Hello Philippines!");
}

greet();

//Function with Parameter
function greetMe(name) {
    console.log('Hello, ', name);
}

greetMe('Abudz!');


//Function with return

function sum(a,b){
    console.log("Log me please.")
    return a+b;
}

console.log('Sum:', sum(5,8))