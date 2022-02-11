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
    document.getElementById("test02").innerHTML = z
}

// Function utilizing the date method
function getDate()
{
    if (new Date() == 11
        document.getElementById("date").innerHTML = "Today is the 11th! Congratulations!";
}