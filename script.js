function calc() 
{
    var a = parseFloat(document.getElementById("nr1").value);
    var b = parseFloat(document.getElementById("nr2").value);
    var op = document.getElementById("opr").value;

    if (op === "+") {
        document.getElementById("rez").value = a + b;
    }

    else if (op === "-") {
        document.getElementById("rez").value = a - b;
    }

    else if (op === "/") {
        document.getElementById("rez").value = a / b;
    }

    else if (op === "*") {
        document.getElementById("rez").value = a * b;
    }
}