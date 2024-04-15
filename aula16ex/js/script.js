var values= [], resultfield = document.querySelector('#result')

function adicionar() {
    let number = document.querySelector('#number').value
    let numberinp = document.querySelector('#number')
    resultfield.innerHTML = ``

    if(number.length == 0){
        alert('Informe um número entre 1 a 100')
    } else if(number < 1 || number > 100){
        alert('O número deve ser entre 1 e 100')
    } else if(values.indexOf(number) != -1) {
        alert('Valor já adicionado, informe outro')
    } else{
        let valuesfield = document.querySelector('#values')
        values.push(number)
        valuesfield.innerHTML += `<option>Valor ${number} adicionado</option>`
    }
    numberinp.value = ''
}

function finalizar() {
    values.sort()
    let soma=0;
    for(let i = 0; i < values.length; i++){
        soma += Number(values[i])
    }
    resultfield.innerHTML = `<p>Ao todo, temos ${values.length} números cadastrados.</p>`
    resultfield.innerHTML += `<p>O maior valor informado foi ${values[values.length-1]}</p>`
    resultfield.innerHTML += `<p>O menor valor informado foi ${values[0]}</p>`
    resultfield.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    resultfield.innerHTML += `<p>A média dos valores digitados é ${soma/values.length}</p>`
}