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

var rectangle = []
ractangleAreas.push(area(10,15));
rectangleAreas.push(area (14,2));
rectangleAreas.push(area(4,5));

console.log(rectangleAreas);

var bankBalance = 500;
function makeTransaction(priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful")
    } else {
        console.log("Insufficient Funds");
    }
}

console.log(bankBalance);
makeTransaction(79.00);

console,log(bankBalance);
makeTransaction("2.32");

console.log(bankBalance);
makeTransaction(450.00);

var transaction = function(priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful")
    } else {
        console.log("Insufficient Funds");
    }
}

var printCustomerName = function(first,last) {
    console.log("First Name:" + first + "Last Name"+ last);
}

var applyForCreditCard = function(creditScore, soul) {
    //call some function to process application
}
var bankOperation = [];

bankOperation.push(transaction);
bankOperation.push(printCustomerName);
bankOperation.push(applyForCreditCard);

//Javascript Object

var student = {
    firstName: "John",
    lastName: "Parker",
    age: 7
};

function student(firstName,lastName,age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
var student0 = {
    firstName: "Jayne",
    lastName: "Looo",
    age: 7,
    greeting: function() {
        return "Hi, I'm" + this.firstName + "and I'm" + this.age + "years old.";
    }
};

console.log(student0.greeting());
//Creates a new empty object
var student1 = new Object()
student1.firstName = "John";
student1.lastName = "Parker";
student1.age = 7 ;

var student2 = new Object()
student1.firstName = "Zack";
student1.lastName = "BoBo";
student1.age = 5 ;

var students = [];
students.push(student0);
students.push(student1);
students.push(studen2);


// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student["firstName"]);
// console.log(student["lastName"]);

//var student = {firstName: "John",lastName: "Parker",age: 7};
var students = ["John", "Jacob","Jingle","Heimer","Smith"]; 

for (var index = 0; index < student.length; index ++) {
    console.log(student[index]);
}

//Javascript Bind
// Alex Brown's
this.car = "Honda Civic w/ Ugly Spoiler";

var marksGarage = {
  car :"Aston Martin",
  getCar: function() {
    return this.car;
  }
};

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;

//Now work is over and Mark want his car

console.log(storeGetCarForLater());//WTF

var theRealGetCarFuntion = marksGarage.getCar.bind(marksGarage); //.bind(this)
console.log(theRealGetCarFuntion());

