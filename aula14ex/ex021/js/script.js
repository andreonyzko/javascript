function table() {
    let num = Number(document.querySelector('#number').value)
    let resultfield= document.querySelector('#resultfield')
    let select= document.createElement('select')
    resultfield.appendChild(select)

    for(let i=0; i<=10; i++){
        let opt = document.createElement('option')
        select.appendChild(opt)
        opt.innerText= `${num}x${i} = ${num*i}`
    }
}