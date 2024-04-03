function count() {
    let start = document.querySelector('#start').value
    let end = document.querySelector('#end').value
    let jump= document.querySelector('#jump').value
    let resultfield= document.querySelector('#resultfield p')

    if(Number(start) > Number(end) || Number(start)+Number(jump) > Number(end) || start.length == 0 || end.length == 0 || jump.length == 0){
        alert('[ERRO] verifique os valores e tente novamente')
    } else{
        start = Number(start)
        end = Number(end)
        jump = Number(jump)
        
        resultfield.innerText = ''
        let i=start
        do{
            resultfield.innerText+= `${i} 👉 `
            i+=jump
        }while(i<=end)

        resultfield.innerText+= `🏁`
    }
}