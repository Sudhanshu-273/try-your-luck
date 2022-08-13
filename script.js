var boy = document.getElementById('fname');
var girl = document.getElementById('sname');

var output = document.getElementById('result');

var calc = document.getElementById('fetch');


calc.addEventListener('click', function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", `https://love-calculator.p.rapidapi.com/getPercentage?sname=${girl.value}&fname=${boy.value}`, true);

    xhr.setRequestHeader("X-RapidAPI-Host", "love-calculator.p.rapidapi.com");
    
    xhr.setRequestHeader("X-RapidAPI-Key", "072876a913msh70bf0defda6b0cfp1ae030jsna27607acd9d7");
    
    xhr.send();

    xhr.onload = function(){
        var res = JSON.parse(xhr.response);
        console.log(res);
        output.innerText = `${girl.value} and ${boy.value}\n\n${res.percentage} %\n\n${res.result}`;
    }
});