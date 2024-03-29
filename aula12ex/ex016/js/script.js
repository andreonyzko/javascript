function verify() {
    var yearbirth= Number(document.querySelector('#yearbirth').value)
    var datenow = new Date()
    var yearnow= datenow.getFullYear()
    var age= yearnow-yearbirth
    var gender= document.getElementsByName('gender')
    var resultcontainer= document.querySelector('#result-container')
    var txtresult= document.querySelector('#result-container p')
    var imgresult= document.createElement('img')
    resultcontainer.appendChild(imgresult)

    if(age<0){
        alert("[ERRO] Idade inválida.")
    } else {
        if(gender[0].checked){
            txtresult.innerText= `Encontramos um homem de ${age} anos.`
            if(age>=0 && age<=10){
                imgresult.setAttribute('src','media/crianca-mas.jpg')
            } else if(age<20){
                imgresult.setAttribute('src','media/jovem-mas.jpg')
            } else if(age<50){
                imgresult.setAttribute('src','media/adulto-mas.jpg')
            } else{
                imgresult.setAttribute('src','media/idoso-mas.jpg')
            }
        } else if(gender[1].checked){
            txtresult.innerText= `Encontramos uma mulher de ${age} anos.`
            if(age>=0 && age<=10){
                imgresult.setAttribute('src','media/crianca-fem.jpg')
            } else if(age<20){
                imgresult.setAttribute('src','media/jovem-fem.jpg')
            } else if(age<50){
                imgresult.setAttribute('src','media/adulto-fem.jpg')
            } else{
                imgresult.setAttribute('src','media/idoso-fem.jpg')
            }
        }
    }
}