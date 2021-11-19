

var moneda = [ "Dolar","Peso mexicano","Peso colombiano", "Euro", "Libra Esterlina"];
var valormercadomoneda = [ "3920", "188.88", "1" , "4462", "5298"];
cargaMonedas();




function cargaMonedas(){
    for (i=0 ; i < moneda.length; i++){
        let lmoneda = moneda[i];
        let valmoneda = valormercadomoneda[i];
        var option = document.createElement("option");
            option.text = `${lmoneda}`;
            option.value = `${i}`;
            var select = document.getElementById("divisasIn");
            select.add(option);
                    var option1 = document.createElement("option");
                    option1.text = `${lmoneda}`;
                    option1.value = `${i}`;
                    var select1 = document.getElementById("divisasOut");
                    select1.add(option1);
}}




capturaMoneda();
function capturaMoneda (){
    let btnConv = document.getElementById("btnConv");
    btnConv.addEventListener('click',buscarValorDivisaIn);
    btnConv.addEventListener('click',buscarValorDivisaOut);
    btnConv.addEventListener('click',calculoDivisa);
}
//para buscar el valor de la moneda segun el nombre
function buscarValorDivisaIn(){
    let posi = document.getElementById("divisasIn");
    var pose = posi.options[posi.selectedIndex].value;
    let posIn = valormercadomoneda[pose]; //valor de la divisa escogida en la entrada
    return posIn;
}
function buscarValorDivisaOut(){
    let posi = document.getElementById("divisasOut");
    var pose = posi.options[posi.selectedIndex].value;
    let posOut = valormercadomoneda[pose]; //valor de la divisa escogida en la salida
    return posOut;
}
function calculoDivisa (){
    
    let valorMoneda = document.querySelector('#inMoneda').value;
    if(valorMoneda <= 0 || isNaN(valorMoneda)){
        document.querySelector('#cajonAlerta').textContent = "Ingrese un valor invalido";
    }else{
        valorcalculado = (buscarValorDivisaIn() / buscarValorDivisaOut()) * valorMoneda;
        mostrarResultado(valorcalculado);
    }  
}

function mostrarResultado(valorResultado) {
    document.querySelector('#cajonAlerta').textContent = valorResultado;
}

//Revisar mejor estos metodos porque no me funcionaron
/*divisas.innerHTML = ''; 
Object.keys(moneda).forEach(key => {
moneda.forEach(divisa => {
    const {nomDivisa, valorDivisa} = divisa;
    alert(nomDivisa)
    divisas.innerHTML += `
    <option value="${}">${nomDivisa}</option>

    `
})
console.log(Object.values(moneda).length);
for (i=0 ; i < Object.values(moneda).length; i++){ */

    /*Object.keys(moneda).forEach(key => {
        var option = document.createElement("option");
        let i = 1
        option.text = `${key}`;
        option.value = `${i}`;
        var select = document.getElementById("divisas");
        select.appendChild(option);
        var select1 = document.getElementById("divisas1");
        select1.appendChild(option);
      });*/
    
  
    

/*
listarDivisas();
function listarDivisas (){
    for (i=0 ; i < moneda.length; i++){
    var divName = document.createElement("option");                 
    var divContent = document.createTextNode(moneda.keys);  
    alert(divName)       
    divName.appendChild(divContent);                              
    document.getElementById("divisas").appendChild(divName);
    var currentDiv = document.getElementById("divisas");
    document.body.insertBefore(divName, currentDiv);
    }
} 
*/