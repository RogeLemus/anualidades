var formulario = document.forms.formula_amortizaciones
var resultado = document.getElementById("res-amortizaciones")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.Capitalizaciones.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let m = parseFloat(formulario.Capitalizaciones.value)
    let j = parseFloat((formulario.interes.value)/100)

    let simp = j/m

    let indice = (1+simp)

    //hasta aqui todo bien
    let primera_parte = r * indice**m
    console.log(primera_parte)

    let b = (indice**(m*n))-1
    let segunda_parte = b/simp
    console.log(segunda_parte)

    let c = simp / ((indice**m)-1)
    console.log(c)

    

    let total = primera_parte*segunda_parte*c

    resultado.innerHTML = total.toFixed(2)
}