// Creating an object constructor
function Person(name, hairColor, eyeColor, height, weight)
{
    this.name = name;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.height = height;
    this.weight = weight;
}

var person01 = new Person('Brady', 'Brown', 'Brown', '5\'10', 170);
var person02 = new Person('Sara', 'Brown', 'Brown', '5\'4', 130);
function myFunc()
{
    document.getElementById("newPeople").innerHTML = "Let's welcome " + person01.name + " and " + person02.name + " to the club!";
}

// Tech Academy's example for a nested function
function countFunc()
{
    document.getElementById("counting").innerHTML = count();
    function count()
    {
        var start = 9;
        function plusOne()
        {
            start += 1;
        }
        plusOne();
        return start;
    }
}

// Brady nested function example. I need a second pair of eyes. Not working.
function greetFunc()
{
    document.getElementById("greeting").innerHTML = introFunc();
    function introFunc()
    {
        var hi = "hello ";
        var conjunction = "and ";
        function outroFunc()
        {
            var bye = "goodbye."
            full = hi + conjunction + bye;
        }
        outroFunc();
        return full;
    }
}

// Ternary example
function voteFunc()
{
    var userAge = document.getElementById("age").value;
    var canVote = (userAge >= 18) ? "You're able to vote":"You're unable to vote";
    document.getElementById("voteAble").innerHTML = canVote + " in US elections.";    
}