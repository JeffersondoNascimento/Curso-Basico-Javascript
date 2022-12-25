function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'manha001.jpg'
        document.body.style.background = '#d2c4b9'
    }else if (hora < 18 ) {
        img.src = 'tarde002.jpg'
        document.body.style.background = '#ffb15c'
    } else {
        img.src = 'noite003.jpg'
        document.body.style.background ='#1b343c'
    }
}