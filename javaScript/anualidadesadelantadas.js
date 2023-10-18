var formulario = document.forms.formula_anAdelantadas
var resultado = document.getElementById("res-anualidades-adelantadas")

formulario.monto.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let s = parseFloat(formulario.monto.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = (s*((((1+i)**n)-1)/i))*((1+i)/1)

    resultado.innerHTML = total.toFixed(2)
}