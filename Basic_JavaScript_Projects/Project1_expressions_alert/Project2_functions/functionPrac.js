function multFunc(a, b)
{
    var input1 = document.getElementById("firstNumber").value;
    var input2 = document.getElementById("secNumber").value;
    product = input1 * input2;
    document.getElementById("multiply").innerHTML = product;
}