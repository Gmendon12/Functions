//Create on function with zero parameters having a console statement

function gautam() {
    console.log("HELLO");
}
gautam()

//Create one function which takes 2 parameters as values and print the dum of them

function sum(a,b){
    let result = 0;
    result = a+b;
    console.log(result);
}
sum(4,5)

//Create an arrow function
eve = (x,y) => {
    var f = x+y;
    console.log(f);
}
eve(2,5);



//5
var x = 21;
var girl =function(){
    console.log(x);
    var x = 20
}
girl()


//6 
var x = 21;
girl();
console.log(x);
function girl(){
    console.log(x);
    var x = 20;
}


//7
var x = 21;
// a();
// b();
console.log(a);
function a(){
    x=20;
    console.log(x);
};
b = () => {
    x=40;
    console.log(x);
};
console.log(x);


//write a function that accepts parameters n and return factorial of n

function factorial(n) {
if(n == 0 || n == 1)
return 1;
for( var i = (n - 1); i >=1; i--){
    n *= i;
}
return n;
}
console.log(factorial(5));




