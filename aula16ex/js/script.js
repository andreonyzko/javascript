var values= [], resultfield = document.querySelector('#result')

function adicionar() {
    let number = document.querySelector('#number').value
    let numberinp = document.querySelector('#number')
    resultfield.innerHTML = ``

    if(verifyNumber(number) && verifyInList(number)){
        let valuesfield = document.querySelector('#values')
        values.push(number)
        valuesfield.innerHTML += `<option>Valor ${number} adicionado</option>`
    } else{

    }
    numberinp.value = ''
}

function verifyNumber(number) {
    if(number.length == 0){
        alert('Informe um número entre 1 a 100')
        return false
    } else if(number < 1 || number > 100){
        alert('O número deve ser entre 1 e 100')
        return false
    } else{
        return true
    }
}

function verifyInList(number){
    if(values.indexOf(number) != '-1'){
        alert('Valor já adicionado, informe outro')
        return false
    } else{
        return true
    }
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