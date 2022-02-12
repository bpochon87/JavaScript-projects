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

// toPrecision() method example
function precisionFunc()
{
    var num1 = 5235093246;
    var num2 = num1.toPrecision(8);
    document.getElementById("toPrecision").innerHTML = num2;
}

// toFixed() method example
function fixedFunc()
{
    var num1 = 651583.156483;
    var num2 = num1.toFixed(3);
    document.getElementById("fixedOutput").innerHTML = num2;
}

// valueOf() method example
function valueFunc()
{
    var userPrimitive = document.getElementById("userWord").value;
    var primitive = userPrimitive.valueOf();
    document.getElementById("valueOutput").innerHTML = primitive;
}