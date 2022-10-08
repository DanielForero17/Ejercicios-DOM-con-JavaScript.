function circuloarea(){
    const valor = document.getElementById("valorarea").value
    const resultado = valor*valor*3.14;
    alert("El area del circulo es:"+resultado)
}
function circuloperi(){
    const valorperimetro = document.getElementById("valorperimetro").value
    const resultado = 2*3.14*valorperimetro;
    alert("El perimetro del circulo es:"+resultado)
}
function cuadradoarea(){
    const valorcuadrado = document.getElementById("areacuadrado").value
    const resultado = valorcuadrado*valorcuadrado;
    alert("El area del cuadrado es:"+resultado);
}
function cuadradoperi(){
    const valorcuadrado = document.getElementById("pericuadrado").value
    const resultado = valorcuadrado*4;
    alert("El perimetro del cuadrado es:"+resultado)
}
function areatriangulo(){
    const base = document.getElementById("basetriangulo").value
    const altura = document.getElementById("alturatriangulo").value
    const resultado = base*altura/2;
    alert("El area del triangulo es:"+resultado)
}
function areatriangulo(){
    const lado1 = document.getElementById("1").value
    const lado2 = document.getElementById("2").value
    const lado3 = document.getElementById("3").value
    const resultado = lado1+lado2+lado3;
    alert("El perimetro del triangulo es:"+resultado)
}
function perirectangulo(){
    const largo = document.getElementById("largo").value
    const ancho = document.getElementById("ancho").value
    const resultado = largo*ancho;
    alert("El area del rectangulo es:"+resultado)
}
function rectanguloperi(){
    const lado1 = document.getElementById("l1").value
    const lado2 = document.getElementById("l2").value
    const lado3 = document.getElementById("l3").value
    const lado4 = document.getElementById("l4").value
    const resultado = lado1+lado2+lado3+lado4;
    alert("El area del rectangulo es:"+resultado)
}