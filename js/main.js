/*Vinsmoke Variable declares himself(Variables are Declared any that are repeated are listed below any exceptions
    will be written in the function).*/
    var buttercup = prompt("Welcome to Payninis! What's your name?");
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
        welcome = greeting+buttercup+ ' are you looking to join us for Dinner?'; 
    }else if (currentTime > 12){
        welcome = greeting+buttercup+' are you looking to join us for Lunch?';
    }else if (currentTime >= 0){
        welcome = greeting+buttercup+' are you looking to join us for Breakfast?';
    }
    return'<h1>' + welcome + '</h1>';}

//Function will ask customer if they have been here before
function thankYou() {
    var thankYouMessage;

    //This Logic takes the confirm prompt and issues a thank you
    if (firstTime === false){
        thankYouMessage = "Thank you for coming back " +buttercup + " you know what to do!";
    }else {
        thankYouMessage = "Thank you for deciding to try out Payninis for the first time " +buttercup + " take a look at one of our menu specials below";
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
    }if (answer =="Hearthstone"){
        alert('Correct you either know me, listened to me, or went to the Reading-Notes');
        return;
    }if (answer =='hearthstone'){
        alert('Correct you either know me, listened to me, or went to the Reading-Notes');
        return;
    }if (answer == null){
        alert("Nice Try Bet You Thought That Wold Work Try Again!")
        ask();
    }else {
        alert("Try Looking on My Reading-Notes Page for the answer");
        ask(); 
    }
}
//Creates an image of the breakfast sandwich times the amount you want
function breakfastAmount(){
    console.log(breakfastAmount)
    var element = document.getElementById('breakfastimage')
    var eggs = prompt("We see you would like a Queen of Breakfast how many? Enter a whole positive number up to 3")
     while (eggs != '1' && eggs != '2' && eggs != '3'){
         eggs = prompt("I see you didn't read the message try a number between 1 & 3");
     } 
     for (i = 0; i < eggs; i++){
         element.innerHTML = element.innerHTML + '<img src=images/foodwarsbreakfast-f.png height = 30 width = 30>' +(i+1);
    }
}

//Creates an image of the lunch sandwich times the amount you want
function lunchAmount(){
    var element = document.getElementById('lunchimage')
    var eggs = prompt("We see you would like a Queen of Breakfast how many? Enter a whole positive number up to 3")
     while (eggs != '1' && eggs != '2' && eggs != '3'){
         eggs = prompt("I see you didn't read the message try a number between 1 & 3");
     } 
     for (i = 0; i < eggs; i++){
         element.innerHTML = element.innerHTML + '<img src=images/foodwarslunch-f.png height = 30 width = 30>' +(i+1);
    }
}
//Creates an image of the lunch sandwich times the amount you want
function dinnerAmount(){
    var element = document.getElementById('dinnerimage')
    var eggs = prompt("We see you would like a Queen of Breakfast how many? Enter a whole positive number up to 3")
     while (eggs != '1' && eggs != '2' && eggs != '3'){
         eggs = prompt("I see you didn't read the message try a number between 1 & 3");
     } 
     for (i = 0; i < eggs; i++){
         element.innerHTML = element.innerHTML + '<img src=images/foodwarsdinner-f.png height = 30 width = 30>' +(i+1);
    }
}