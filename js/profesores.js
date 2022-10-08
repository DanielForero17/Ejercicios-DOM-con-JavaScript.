function profesores(){
    let nombre = document.getElementById("nombre").value
    nombre = parseInt(nombre)
    let apellido = document.getElementById("apellido").value
    apellido = parseInt(apellido)
    let materia = document.getElementById("materia").value
    materia = parseInt(materia)

    if(nombre==1 && apellido==1 && materia==1){
        alert("Respuesta correcta")
    }else{
        alert("Respuesta incorrecta")
    }
    if(nombre==1 && apellido==1 && materia==2){
        alert("Respuesta correcta")
    }else{
        alert("Respuesta incorrecta")
    }
    if(nombre==2 && apellido==2 && materia==2){
        alert("Respuesta correcta")
    }else{
        alert("Respuesta incorrecta")
    }
    if(nombre==3 && apellido==3 && materia==3){
        alert("respuesta correcta")
    }else{
        alert("Respuesta incorrecta")
    }
    if(nombre==4 && apellido==4 && materia==4){
        alert("Respuesta correcta")
    }else{
        alert("Respuesta incorrecta")
    } 
    if(nombre==5 && apellido==5 && materia==5){
        alert("Respuesta correcta")
    }else{
        alert("Respuesta incorrecta")
    }
    if(nombre==6 && apellido==6 && materia==6){
        alert("Respuesta correcta")
    }else{
        alert("Respuesta incorrecta")
    }
}