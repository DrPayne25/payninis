/*Vinsmoke Variable declares himself(Variables are Declared any that are repeated are listed below any exceptions
    will be written in the function).*/
    var userId = prompt("Welcome to Payninis! What's your name?");
    var firstTime = confirm("Is this your first time at Payninis");
    //var validationQuestion = prompt("what is Payne's Addiction game?");
    
//Function name createWelcome is created and defined in the next code block    
function welcomeHere() {
    var day = new Date();
    var currentTime = day.getHours();
    var greeting = "Welcome to <b>Payninis<b> "
    var welcome;

    //Welcome Greeting Options
    if (currentTime > 18){
        welcome = greeting+userId+ ' are you looking to join us for Dinner?'; 
    }else if (currentTime > 12){
        welcome = greeting+userId+' are you looking to join us for Lunch?';
    }else if (currentTime >= 0){
        welcome = greeting+userId+' are you looking to join us for Breakfast?';
    }
    return'<h1>' + welcome + '</h1>';}

//Function will ask customer if they have been here before
function thankYou() {
    var thankYouMessage;

    //This Logic takes the confirm prompt and issues a thank you
    if (firstTime === false){
        thankYouMessage = "Thank you for coming back " +userId + " you know what to do!";
    }else {
        thankYouMessage = "Thank you for deciding to try out Payninis for the first time " +userId + " take a look at one of our menu specials below";
    }
    return'<h1>' +thankYouMessage + '</h1>'}

//This Function will validate that you looked at my Reading-Notes for my Addiction Game
//I Start off by running my function because I need this to keep popping up until I return
ask();
function ask(){
    var answer=prompt("What is Payne's Addiction game?");
    if(answer=="HearthStone"){
        alert("Correct you either know me, listened to me, or went to the Reading-Notes");
        return;
    }else if (answer =="Hearthstone"){
        alert('Correct you either know me, listened to me, or went to the Reading-Notes');
        return;
    }else if (answer =='hearthstone'){
        alert('Correct you either know me, listened to me, or went to the Reading-Notes');
        return;
    }else if (answer == null){
        alert("Nice Try Bet You Thought That Wold Work Try Again!")
        ask();
    }else {
        alert("Try Looking on My Reading-Notes Page for the answer");
        ask(); 
    }
}   
    

/*/Function for getting into the website by validating an answer
function validationRequest() {
    
    //logic for the above function
    if (validationTest === "Hearthstone"){
        alert("correct answer!");
    }else if (validationTest === "HearthStone"){
        alert("correct answer!");
    }else if (validationTest === "hearthstone"){
        alert("correct answer!");
    }else if (validationTest === null);{
        alert("Wow You don't Remember Check the Reading-Notes to find out!");
    }
}*/
