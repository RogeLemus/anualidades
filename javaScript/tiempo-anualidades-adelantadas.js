var formulario = document.forms.formula_amortizaciones
var resultado = document.getElementById("res-amortizaciones")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let s = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = (((Math.log10(((s*i)+r)*(1+i))-Math.log10(r*(1+i)))/(Math.log10(1+i))))*r

    resultado.innerHTML = total.toFixed(2)
}