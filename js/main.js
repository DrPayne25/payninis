    var userId = prompt("Welcome to Payninis! What's your name?");
    var firstTime = confirm("Is this your first time at Payninis");
    var day = new Date();
    var currentTime = day.getHours();
    
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

    return'<h1>' + welcome + '</h1>';}

    //Function will ask customer if they have been here before
function thankYou() {
    var thankYouMessage;
//This Logic takes the confirm prompt and issues a thank you
    if (firstTime === false){
        thankYouMessage = "Thank you for coming back " +userId + " you know what to do!";
    }else {
        thankYouMessage = "Thank you for deciding to try out Payninis " +userId + " take a look at one of our menu specials below";
    }

    return'<h1>' +thankYouMessage + '</h1>'
}


