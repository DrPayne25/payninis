/*Variable Vinsmoke declares himself.*/
var userId = prompt("Welcome to Payninis! What's your name?");
var day = new Date();
var currentTime = day.getHours();
var welcome;

//Welcome Prompt
if (currentTime > 18){
    welcome = 'Thank you for coming to Payninis! Might we interest you in Dinner? '  +userId;
}else if (currentTime > 12){
    welcome = 'Thank you for coming to Payninis! Might we interest you in Lunch? '  +userId
}else if (currentTime > 0){
    welcome = 'Thank you for coming to Payninis! Might we interest you in Breakfast? '  +userId;
}

document.write('<h3>' + welcome + '</h3>');