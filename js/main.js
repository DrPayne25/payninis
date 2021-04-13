    var userId = prompt("Welcome to Payninis! What's your name?");
    var day = new Date();
    var currentTime = day.getHours();
    var firstTime = confirm("Is this your first time at Payninis")

    
/*Variable Vinsmoke declares himself.*/
function welcomeHere() {
    var greeting = "Welcome to <b>Payninis<b> "
    var welcome;

    //Welcome Prompt
    if (currentTime > 18){
        welcome = greeting+userId+ ' are you looking to join us for Dinner'; 
    }else if (currentTime > 12){
        welcome = greeting+userId+' are you looking to join us for Lunch';
    }else if (currentTime >= 0){
        welcome = greeting+userId+' are you looking to join us for Breakfast';
    }

    return('<h1>' + welcome + '</h1>');}

function thankYou() {
    var thankYouMessage;

    if (firstTime = true){
        thankYouMessage = 'option 1' + userId;
    }else if (firstTime = false){
        thankYouMessage = "option 2" + userId;
    }

    return'(<h1>' +thankYouMessage + '</h1>'
}


