const barraInicio = document.querySelector('#inicio')
const barraFim = document.querySelector('#fim')
const barraPassos = document.querySelector('#passos')
const resultado = document.querySelector('#resultado')

function contar() {
    if (barraInicio.value.length == 0 || barraFim.value.length == 0 || barraPassos.value.length == 0) {
        resultado.innerHTML = 'Verifique os dados inseridos e tente novamente!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        var inicioValor = Number(barraInicio.value)
        var fimValor = Number(barraFim.value)
        var passosValor = Number(barraPassos.value)
        if (passosValor <= 0) {
            alert('Não é possível que o valor de passos seja zero ou um número negativo, considerando passos = 1')
            passosValor = 1
        }
        // CONTANDO SUBINDO
        if (inicioValor < fimValor) {
            for (var contador = inicioValor; contador <= fimValor; contador += passosValor) {
                resultado.innerHTML += ` ${contador} \u{27A1}`
            }

        // CONTADO DESCENDO
        } else {
            for (var contador = inicioValor; contador >= fimValor; contador -= passosValor) {
                resultado.innerHTML += ` ${contador} \u{27A1}`
            }
        }
        resultado.innerHTML += `\u{2705}`
    }
}