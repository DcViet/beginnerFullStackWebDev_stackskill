var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resulfField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');

// var myCalFuntion = funtion() {

// }
// form.addEventListener('submit',myCalFuntion());
// form.addEventListener('submit',function() {
//     alert("We clickerclacked something!");
// });

form.addEventListener('submit',function() {

    if (!numField1.value || !numField2.value) {
        alert("Please enter value in the fields");
    } else {
    var x = numField1.value;
    var y = numField2.value;
    }

})