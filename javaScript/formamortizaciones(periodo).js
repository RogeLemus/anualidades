var formulario = document.forms.formula_amortizaciones
var resultado = document.getElementById("res-amortizaciones")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let v = parseFloat(formulario.renta.value)
    let r = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = (Math.log10 (r) -Math.log10(r-i*v))/Math.log10(1+i)

    resultado.innerHTML = total.toFixed(2)
}