let Button = document.querySelectorAll("#Btn");
let input = document.querySelectorAll("#Input")
let date = input[0].value;
let dados = String(date)


function conversion(){
    console.log(dados)
}
Button[0].addEventListener("click",conversion)