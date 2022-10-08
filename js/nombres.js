function mostrar(){
    nombre=document.getElementById('nombre').value
    alert("Tu nombre es"+nombre)
}

function longitud(){
    nombre=document.getElementById('nombre').value
    alert("la longitud de la palabra es"+nombre.length)
}
function mayus(){
    let nombre = document.getElementById("nombre").value
    alert("Su nombre se ha convertido en mayúsculas "+nombre.toUpperCase())
}
function min(){
    let nombre = document.getElementById("nombre").value
    alert("Su nombre se ha convertido en minusculas "+nombre.toLowerCase())
}
function inicial(){
    let nombre = document.getElementById("nombre").value
    let caracter = nombre.charAt(0);
    alert("Su primer caracter es: "+caracter)
}
    
