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

function howManyEggs(){
    console.log(howManyEggs)
    var element = document.getElementById('face')
    var eggs = prompt("We see you would like a Queen of Breakfast how many? Enter a whole positive number up to 3")
     while (eggs != '1' && eggs != '2' && eggs != '3'){
         eggs = prompt("I see you didn't read the message try a number between 1 & 3");
     } 
     for (i = 0; i < eggs; i++){
         element.innerHTML = element.innerHTML + '<img src=images/foodwarslunch-f.jpg height = 30 width = 30>' +(i+1);
    }
}



/*let getItem = function () {
    console.log(getItem)
    let order = prompt('What would you like to order?')
    let item;

    while (order !== 'Burger' && order !== 'Steak') {
        order = prompt('Pleaes enter "Burger" or "Steak"');
    }
    if (order === 'Burger') {
        item = '<img src="">';
    } else if (order === 'Steak') {
        item = '<img src=';
    }
    let howMany = function () {
        let count = prompt('How many do you want to order?');
        while (count === "1" || isNaN(count)) {
            count = prompt('Please enter a number. How many do you want?');
        }
    }
    let showOrder = function () {
        let item = getItem();
        let total = howMany();
        let result = "";
        for (let i =0; i < total; i++) {
            result = result + '<p>Model #' + i + " " + item + '</p>';
        }
        return result;
    }
}
/*var howMany = document.getElementById('howMany')
for (var i = 0; i < 8; i++) {
    var i = parseInt(prompt("How people are Joining you today"));
    var howMany_img_src = "images/face.png";
    
} */

//Function for getting into the website by validating an answer
/*function validationRequest() {
    
    //logic for the above function
    if (validationTest === "Hearthstone"){
        alert("correct answer!");
    }else if (validationTest === "HearthStone"){
        alert("correct answer!");
    }else if (validationTest === "hearthstone"){
        alert("correct answer!");
    }else if (validationTest === null);{
        alert("Wow You don't Remember Check the Reading-Notes to find out!");
    }*/
