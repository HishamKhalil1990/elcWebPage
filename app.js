// get the user name of the visitor
var userName = prompt('please insert your name');
var productName = prompt('what');
var time = new Date();
var myTime = time.getHours();
var message = '';
if (myTime > 18) {
    message = 'Hi';
} else if (myTime >= 15){
    message = 'good evening';
} else if (myTime >= 12) {
    message = 'good afternoon'; 
} else if (myTime >=6) {
    message = 'good morning';
} else {
    message = 'Hi';
}
alert(message + ' ' + userName);
document.write(`<h1 style="color:blue;">` + message + ' ' + userName + `</h1>`);