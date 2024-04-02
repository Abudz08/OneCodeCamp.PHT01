
const name = "Mario";               //constant variable

function hello(){
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
}

function printThis(){
    let powerup = "Mushroom";       //block level variable
    var hp = 100;                   //global-level variable
    console.log(powerup);
    console.log(hp);

}

hello()
printThis()