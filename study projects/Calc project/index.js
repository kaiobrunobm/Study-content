function insert(number) {
    var secondNumber = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML =  secondNumber + number;
} 

function clean() {
    document.getElementById('result').innerHTML = " ";
}

function del() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1)
}

function calculate() {
    var result = document.getElementById('result').innerHTML;
    if(result) {
        document.getElementById('result').innerHTML = eval(result);
    }
    else {
        document.getElementById('result').innerHTML = ""
    }
}