// var name = "Jack";
// var age = 23;
// var shootingScore = 45.6;
// var message = "Hi, my name is " + name + " and I am " + age + " year old! ";

// var firstName = "John";
// var lastName = "JacobJingleHeimerSmith";
// var dateOfBirth = "10-09-82";
// var age = 23;
// var profileImgUrl = 'http://coolpicks.com/johnjacob.jpg';

// var loginWelcomeMessage = "Welcome, " + firstName + ".Happy " + age + "rdbirthday!";

// console.log(loginWelcomeMessage);

// var sum = 10 + 15;
// var sub = 15 - 10;
// var mul = 10 * 3;
// var div = 10 / 3;
// var mod = 10 % 3;

// var msg = "10/3 = 3 with a remainder of " + mod;
// var result =10*((5+3)-4);

// console.log(result);

// var balances = [50.45,4000.12,-300.50];

var myAccountBalance = 300;
var nikeSBShoes = 79.23;
var coupon = 400;

var age = 23; // var val1 = 23;
var joesAge = "23"; // val2 ="23";

if (age === joesAge)  //val1 === val2
{
    console.lod("I am the same age as Joe!")
} else {
    console.log("One of these is not like orther ...");
}

if (nikeSBShoes <= myAccountBalance) {
    myAccountBalance -= nikeSBShoes; //myAccountBalance - nikeSBShoes
    console.log("We should see this");
    console.log("Account Balance: " + myAccountBalance)
} else if (nikeSBShoes - coupon <=myAccountBalance) {
    console.log("We just bought some dope shoes with a coupon");
    myAccountBalance -= nikeSBShoes - coupon;
    console.log("Account Balance: " + myAccountBalance)
}
  else {
    console.log("You too broke fo shoes bra!");
}

// Logical Operators 
if (1===1 && 2===2) {
    console.log("These are both true!")
}
if (true && true) {
    console.log("These are the same!");
}

if (1===3 || "joe"==="joe") {
    console.log("one of these are true");
}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3DisableHandicap = true;

// if (cat1 > cat2 || cat1 > cat3) {
//     console.log("Cat 1 is the cutest");
// } else if (cat2 > cat1 || cat2 > cat3) {
//     console.log("Cat 2 is the cutest!");
// } else if (cat3 > cat1 && cat3 > cat2) {
//     console.log("Cat 3 is the cutest");
// }

if ((cat1 > cat2 && cat1 > cat3) && !cat3DisableHandicap) {
    console.log("Cat 1 is the cutest");
} else if ((cat2 > cat1 && cat2 > cat3) && !cat3DisableHandicap) {
    console.log("Cat 2 is the cutest!");
} else if ((cat3 > cat1 && cat3 > cat2) || cat3DisableHandicap) {
    console.log("Cat 3 is the cutest");
}

// Javascipt arrays
var balances = [50.45, 4000.12, -300.50];

var studentNames =["Timmy","Janessa","Arun"];

// var person = ["John",12,"USA",true];

var naughtList = [];
naughtList.push(studentNames[0]);

var index = naughtList.index0f("Timmy");

if (index > -1) {
    naughtList = naughtList.splice(index,1);
}

console.log(index2);

//Javascript Loops
var someVal = 10;
for (var x = 0; x < someVal; x++) {
    //Interate until told not to
    console.log(x)
}

var students = ["John","Jacob","Jingle","Heimer", "Smith"];

for (var index = 0; index < students.length; index++) {
    console.log(students[index]);
}

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

//Javascript function
var length1 = 15;
var width2 = 14;
var area2 = length2 * width2;

console.log(area1);
console.log(area2);

function area(length,width) {
    return length * width;
}

var area1 = area(10,15);
console.log(area1);