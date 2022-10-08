function convercion(){

    let valor =document.getElementById("valorgrado").value
    valor = parseInt(valor)
    let opcion = document.getElementById("opcion1").value
    opcion = parseInt(opcion)
    let opcion2 = document.getElementById("opcion2").value
    opcion2 = parseInt(opcion2)

    if(opcion == 1 && opcion2 == 2){
        resultado = ((valor-32)/1.8).toFixed(2)
        alert(resultado)
    }else if(opcion==1 && opcion2==3){
        resultado = ((valor-32)* 5/9 + 273.15).toFixed(2)
        alert(resultado)
    }else if(opcion==2 && v==1){
        resultado = ((valor * 9/5)+32).toFixed(2)
        alert(resultado)
    }else if(opcion==2 && opcion2==3){
        resultado = (valor + 273.15).toFixed(2)
        alert(resultado)
    }else if(opcion==3 && opcion2==1){
        resultado = (( valor - 273.15) * 9/5 + 32).toFixed(2)
        alert(resultado)
    }else if(opcion==3 && opcion2==2){
        resultado = (valor - 273.15).toFixed(2)
        alert(resultado)
    }
}
