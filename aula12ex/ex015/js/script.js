function carregar() {
    var msgfield= document.querySelector('#msg')
    var imgfield= document.querySelector('#img')
    var body= document.querySelector('body')
    var now= new Date()
    // var hour= now.getHours()
    var hour= 1
    var minutes= now.getMinutes()
    msgfield.innerHTML = `<p>Agora são ${hour}h${minutes}m</p>`

    if (hour>0 && hour<12){
        imgfield.innerHTML = `<img src="media/manha.jpg" alt="fotodamanha">`
        body.style.background= '#BFC7C8'
    } else if(hour<=18){
        imgfield.innerHTML = `<img src="media/tarde.jpg" alt="fotodamanha">`
        body.style.background= '#3C2B41'
    } else if(hour>18 && hour<=23){
        imgfield.innerHTML = `<img src="media/noite.jpg" alt="fotodamanha">`
        body.style.background= 'black'
    } else{
        msgfield.innerHTML = `<p>ERRO: hora invalida</p>`
        imgfield.innerHTML= ``
    }
}