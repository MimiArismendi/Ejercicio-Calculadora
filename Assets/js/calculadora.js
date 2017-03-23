function mostrarResultado(valor){
  var inputResultado = document.getElementById("resultado");
  inputResultado.value +=valor;
}

function limpiar(){
  var borrar = document.getElementById("resultado");
  borrar.value = "";
}

function sumar(num1,num2){
  return number(num1 + num2);
}

function restar(num1,num2){
  return number(num1-num2);
}

function multiplicar(num1,num2){
  return number(num1 * num2);
}

function dividir(num1,num2){
  return number(num1 / num2);
}

/*
function guardarNumero(){
  var numero1 = document.getElementById("resultado").value
}*/
