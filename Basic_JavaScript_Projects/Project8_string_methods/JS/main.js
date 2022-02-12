// concat() method example
function conCatFunc()
{
    var a = "This is ";
    var b = "an example of ";
    var c = "concatenation in ";
    var d = "use to put together ";
    var e = "string variables.";
    var f = a.concat(b, c, d, e);
    document.getElementById("concatPrint").innerHTML = f;
}

// slice() method example
function sliceFunc()
{
    var sentence = "Today was a day unlike any other.";
	var section = sentence.slice(10);
	document.getElementById("slicePrint").innerHTML = section;
}

// toUpperCase() method example
function upperFunc()
{
    var originalText = document.getElementById("userText").value;
    var newText = originalText.toUpperCase();
    document.getElementById("upperPrint").innerHTML = newText;
}

// search() method example
function searchFunc()
{
    var searchSentence = "To find a value, one may utilize the search method.";
    var foundWord = searchSentence.search("utilize");
    document.getElementById("search").innerHTML = foundWord;    
}

// toString() method example
function stringFunc()
{
    var number = document.getElementById("userNumber").value;
    var stringNumber = number.toString();
    document.getElementById("toString").innerHTML = stringNumber;
}

// toPrecision() method example - NOT WORKING
function precisionFunc()
{
    var unchangedNumber = document.getElementById("userInput").value;
    var preciseNumber = unchangedNumber.toPrecision(8);
    document.getElementById("funcOutput").innerHTML = preciseNumber;
}

// toFixed() method example - NOT WORKING
function fixedFunc()
{
    var unchangedFixed = document.getElementById("userFixed").value;
    var changedFixed = unchangedFixed.toFixed(3);
    document.getElementById("fixedOutput").innerHTML = changedFixed;
}

// valueOf() method example
function valueFunc()
{
    var userPrimitive = document.getElementById("userWord").value;
    var primitive = userPrimitive.valueOf();
    document.getElementById("valueOutput").innerHTML = primitive;
}