var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resulfField = document.getElementById('resultField');
// document.getElementById('xIsWhatPercentOfY').addEventListener('submit',function() {

// })
var form = document.getElementById('xIsWhatPercentOfY');

// var myCalFuntion = funtion() {

// }
// form.addEventListener('submit',myCalFuntion());
// form.addEventListener('submit',function() {
//     alert("We clickerclacked something!");
// });

// form.addEventListener('submit', function() {

//     if (!numField1.value || !numField2.value) {
//         alert("Please enter value in the fields");
//     } else {
//         // var x = numField1.value;
//         // var y = numField2.value;

//         var x = parseFloat(numField1.value);
//         var y = parseFloat(numField2.value);

//         // console.log(x + y);

//         alert(x + y);
//     }

// });

//Percentage Calculator - Algorithm and Prevent Default
form.addEventListener('submit', function() {

    if (!numField1.value || !numField2.value) {
        alert("Please enter value in the fields");
    } else {
        // var x = numField1.value;
        // var y = numField2.value;

        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        // console.log(x + y);

        var result = x / y;
        var percent = result * 100;

        resulfField.innerText = "Answer:" + percent + "%";
        envent.precentDefault();

    }

});