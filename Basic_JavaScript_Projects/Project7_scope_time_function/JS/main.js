// Intentional error visible in the console
function errorFunc()
{
    var a = 20;
    var b = 10;
    console.log(a + b + c);
}
errorFunc();

// Global variable declaration and initialization
const x = 500;

// Function utilizing global variable
function globalFunc()
{
    var a = x + 500;
    document.getElementById("test01").innerHTML = a;
}

// Function utilizing local variables only
function localFunc()
{
    var w = 10;
    var x = 10;
    var y = 10;
    var z = w + x + y;
    document.getElementById("test02").innerHTML = z;
}

// Function utilizing the date method
function getDate()
{
    var day = new Date();
    if (day.getDate() == 11)
    {
        var eleventh = "It's the eleventh. You're a winner!";
    }
    document.getElementById("test03").innerHTML = eleventh;
}

// TA sample if-else statement
function voteFunc()
{
    var age = document.getElementById("userAge").value;
    if (age >= 18)
    {
        var vote = "You're able to vote.";
    }        
    else
    {
        var vote = "You're unable to vote.";
    }
    document.getElementById("voteAble").innerHTML = vote;     
}

// Brady sample if-else statement
function guessFunc()
{
    var number = document.getElementById("guessInput").value;
    if (number == 7)
    {
        document.getElementById("guessOutput").innerHTML = "You win!";
    }
    else
    {
        document.getElementById("guessOutput").innerHTML = "You didn't win!";
    }
}

// TA sample else-if statement
function timeFunc()
{
    var time = new Date().getHours();
    var reply;
    if (time < 12 && time > 0)
    {
        reply = "It's the morning.";
    }
    else if (time >= 12 && time < 18)
    {
        reply = "It's the afternoon.";
    }
    else
    {
        reply = "It's the evening.";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}

// Brady sample else-if statement
function oldFunc()
{
    var userAge = document.getElementById("userOld").value;
    var answer;
    if (userAge <= 20)
    {
        answer = "You are young!";
    }
    else if (userAge > 20 && userAge <= 35)
    {
        answer = "You're still pretty young!";
    }
    else if (userAge > 35 && userAge <= 50)
    {
        answer = "You're middle age!";
    }
    else if (userAge > 50 && userAge <= 75)
    {
        answer = "You're up there!";
    }
    else
    {
        answer = "Damn! You're old!";
    }
    document.getElementById("areOld").innerHTML = answer;
}