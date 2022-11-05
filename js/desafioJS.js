function CalcularTotal() {
    console.log("Ingresó a Calcular Total")
    let total = 0
    let entrada = 200
    let x = document.getElementById("cantidad").value
    let y = document.getElementById("categoria").value

    if(y==0){
    total = x * (entrada * 0.2)
    console.log(total)
    } else if (y==1) {
        total = x * (entrada * 0.5)
        console.log(total)
    } else if (y==2){
        total = x * (entrada * 0.85)
        console.log(total)
    }

    document.getElementById('resumen').innerHTML= "Total a pagar: $ " + total ;
}

function BorrarTotal(){
    let total = 0
    document.getElementById('resumen').innerHTML= "Total a pagar: $ ";

}