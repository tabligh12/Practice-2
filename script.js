let numb = document.getElementsByClassName("rate");

function myfunction(parameter) {
    for (i = 0; i < numb.length; i++) {

        numb[i].className = numb[i].className.replace(" active", "");

    }

    parameter.currentTarget.className += " active";

    var input = document.getElementById("text").value = parameter.currentTarget.innerHTML;
    ;}

function sendvalue(){
    let setvalue =document.getElementById("text").value;
    localStorage.setItem("textvalue",setvalue);
    location.href="result.html";

};

