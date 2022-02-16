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

// Creating an object
let sprinkler =
{
    make: "Rain Bird ",
    model: " 5004 ",
    type: " rotor ",
    distance: " 20-60\'",
    inletSize: " ¾\" ",
    pattern: " adjustable ",
    description : 
    function()
    {
        return "The sprinkler is an " + sprinkler.pattern + sprinkler.make + sprinkler.model + sprinkler.type
                + "with an inlet size of" + sprinkler.inletSize + "and a coverage area of" + sprinkler.distance + ".";
    }
};
document.getElementById("object").innerHTML = sprinkler.description();

// Break statement utilized in function
function breakFunc()
{
    var value = "";
    for (i=0; i < 25; i++)
    {
        if (i === 19)
        {
            break;
        }
        value += i + "<br>";
    }
    document.getElementById("break").innerHTML = value;
}

// Continue statement utilized in function
function continueFunc()
{
    var value = "";
    for (i=0; i < 25; i++)
    {
        if (i === 19)
        {
            continue;
        }
        value += i + "<br>";
    }
    document.getElementById("continue").innerHTML = value;
}