function sumFunc()
{
    var add = 2309572 + 235978235;
    document.getElementById("sum").innerHTML = "The sum is " + add + ".";
}

function subFunc()
{
    var diff = 65432432089 - 65422306854;
    document.getElementById("sub").innerHTML = "The difference is " + diff + ".";
}

function multFunc()
{
    var prod = 9574302987689 * 430289572390846;
    document.getElementById("mult").innerHTML = "The product is " + prod + ".";
}

function divFunc()
{
    var quo = 94857362556 / 3;
    document.getElementById("div").innerHTML = "The quotient is " + quo + ".";
}

function randomFunc()
{
    var rand = 500 + 500 * 333 / 111 - 200;
    document.getElementById("random").innerHTML = "The answer is " + rand + ".";
}

function modFunc()
{
    var modulus = 92718294 % 38201932;
    document.getElementById("mod").innerHTML = "The remainder is " + modulus + ".";
}

document.getElementById("squarert").innerHTML = Math.sqrt(144);