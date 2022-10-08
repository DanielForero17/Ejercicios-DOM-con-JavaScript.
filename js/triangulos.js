function lados(){
    const lado1 = document.getElementById("l1").value
    const lado2 = document.getElementById("l2").value
    const lado3 = document.getElementById("l3").value
    if(lado1==lado2 && lado1==lado3 && lado2==lado3){
        alert("Triangulo equilatero")
    }else if(lado1==lado2 || lado1==lado3 || lado2==lado3){
        alert("Triangulo isóceles")
    }else{
        alert("Triangulo escaleno")
    }
    }
    