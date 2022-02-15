// Practice "while" loop
function whileLoopFunc()
{
    digit = "";
    var x = 1;
    while (x < 11)
    {
        digit += "<br>" + x;
        x++;
        
    }
    document.getElementById("whileLoop").innerHTML = digit;
}

// String.length property
function stringLength()
{
    var input = document.getElementById("userSentence").value;
    var charLength = input.length;
    document.getElementById("length").innerHTML = "The character count is " + charLength;
}

// Practice "for" loop
function forLoopFunc()
{
    var letter = "";
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
                    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (i = 0; i < alphabet.length; i++)
    {
        letter += alphabet[i] + "<br>";
    }
    document.getElementById("forLoop").innerHTML = letter;
}

// Array practice
function arrayFunc()
{
    var boy = []
    boy[0] = "happy";
    boy[1] = "mad";
    boy[2] = "sad";
    boy[3] = "glad";
    boy[4] = "anxious";
    boy[5] = "fearful";
    document.getElementById("array").innerHTML = "The boy is " + boy[5] + " today.";
}

// Constant practice
function constantFunc()
{
    const coffee = {origin: "South America", type: "Arabica", roast: "medium"}
    coffee.origin = "Vietnam";
    coffee.type = "Robusta";
    document.getElementById("constant").innerHTML = "Our new coffee is from " + coffee.origin + " and is "
                                                    + coffee.type + " beans.";
}

// Let keyword
function letFunc()
{
    var w = 10;
    {
        let x = 10;
        let y = 10;
        let z = w + x + y;
        document.getElementById("letKeyword").innerHTML = z;
    }    
}

// Return statement
function getRectArea()
{
    var side01 = document.getElementById("num01");
    var side02 = document.getElementById("num02");
    if (side01 > 0 && side02 > 0)
    {
        return side01 * side02 = document.getElementById("area");
    }
    return 0; // Return 0 means false; exits program due to error (in this case the conditional statement not being met)
}