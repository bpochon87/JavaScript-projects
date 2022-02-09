// Function that adds two static numbers.
function sumFunc()  
{
    var add = 2309572 + 235978235;
    document.getElementById("sum").innerHTML = "The sum is " + add + ".";
}

// Function that subtracts two static numbers.
function subFunc() 
{
    var diff = 65432432089 - 65422306854;
    document.getElementById("sub").innerHTML = "The difference is " + diff + ".";
}

// Function that multiplies two static numbers.
function multFunc() 
{
    var prod = 9574302987689 * 430289572390846;
    document.getElementById("mult").innerHTML = "The product is " + prod + ".";
}

// Function that divides two static numbers.
function divFunc() 
{
    var quo = 94857362556 / 3;
    document.getElementById("div").innerHTML = "The quotient is " + quo + ".";
}

// Function that adds, subtracts, multiplies, and divides five static numbers.
function randomFunc() 
{
    var rand = 500 + 500 * 333 / 111 - 200;
    document.getElementById("random").innerHTML = "The answer is " + rand + ".";
}

// Function that provides the remainder to two static numbers.
function modFunc() 
{
    var modulus = 92718294 % 38201932;
    document.getElementById("mod").innerHTML = "The remainder is " + modulus + ".";
}

// Using built-in object Math to print to screen square root of 144.
document.getElementById("sqrt").innerHTML = Math.sqrt(144);

// Using buit-in object Math to generate random number between 0 and 1,000,000
document.getElementById("random_1").innerHTML = Math.random()*1000000;

// Function incrementing user-input number by one.
function incFunc(x)
{
    var i = document.getElementById("addOne").value;
    i++;
    document.getElementById("increment").innerHTML = i;
}

// Function decrementing user input by one
function decFunc(x)
{
    var d = document.getElementById("subOne").value;
    d--;
    document.getElementById("decrement").innerHTML = d
}