var formulario = document.forms.formulario_tiempo
var resultado = document.getElementById("res-anualidades-tiempo")

formulario.monto.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let m = parseFloat(formulario.monto.value)
    let r = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = ((Math.log10((m*i)+r))-Math.log10(r))/Math.log10(1+i)

    resultado.innerHTML = total.toFixed(2)
}
