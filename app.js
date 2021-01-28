// get the user name of the visitor
var userName = prompt('please insert your name');
// get the time and determine + write the right greetment
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
document.write('<h1 style="color:blue;">' + message + ' ' + userName + '</h1>');
// get and show the page rating from the visitor
var starRating = 0;
while (starRating != 1 && starRating != 2 && starRating != 3 && starRating != 4 && starRating != 5){
    starRating = prompt('how many stars you rate us');
}
var starImage = '';
if (starRating == 5){
    starImage = '<img src="stars/fivestars.jpg">';
}else if (starRating == 4){
    starImage = '<img src="stars/fourstars.jpg">';
}else if (starRating == 3){
    starImage = '<img src="stars/threestars.jpg">';
}else if (starRating == 2){
    starImage = '<img src="stars/twostars.jpg">';
}else {
    starImage = '<img src="stars/onestar.jpg">';
}
starImage = starImage + '<br>' + '<h3> thanks for rating </h3>';
document.write(starImage);
// define the laptop variables
var laptopSize = '';
var laptopImage = '';
var noOfLaptops = 0;
// get how many laptop does the visitor need
while (noOfLaptops <= 0 || noOfLaptops > 10){
    noOfLaptops= prompt('how many laptop choices you need (max. 10)');
}
// get the laptop size from the visitor and choose what laptop image to be used
while (laptopSize !== 'big' && laptopSize !== 'small'){
    laptopSize= prompt('what type of laptop you need (text big or small)');
}
if (laptopSize == 'big'){
    laptopImage = '<img src="laptops/lap1.jpg">';
}else if (laptopSize == 'small'){
    laptopImage = '<img src="laptops/lap2.jpg">';
}
// print the laptops
for (i=1 ; i<=noOfLaptops ; i++) {
    document.write(laptopImage);
}
