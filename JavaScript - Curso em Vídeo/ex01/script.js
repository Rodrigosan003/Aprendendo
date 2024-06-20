//manha e7cc9f
//tarde 89552d
//noite 142829

function carregar() {
  let msg = document.getElementById('msg');
  let img = document.getElementById('imagem');
  let data = new Date()
  let hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 0 && hora < 12) {
    //Bom dia...
    img.src = './img/manha.png'
    document.body.style.background = '#e7cc9f'

  } else if (hora >= 12 && hora < 18) {
    //Boa tarde...
    img.src = './img/tarde.png'
    document.body.style.background = '#89552d'
  } else {
    //Boa noite...
    img.src = './img/noite.png'
    document.body.style.background = '#142829'
  }

}
