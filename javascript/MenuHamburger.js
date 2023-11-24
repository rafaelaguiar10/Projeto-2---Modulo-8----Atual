function changeMenuMobile() {
  if (document.getElementById('menu__header').style.display == 'none') {
  document.getElementById('container__hamburger').style.display = 'grid'
  document.getElementById('container__hamburger').style.marginLeft = '40px'
  document.getElementById('parallax').style.marginBottom = '0px'
  document.getElementById('Title__Principal').style.marginTop = '1000px'
  document.getElementById('projetos__paragrafo').style.marginTop = '1000px'
  document.getElementById('botao__calculo').style.marginTop = '0px'
  }
  else {
    document.getElementById('container__hamburger').style.display = 'none'
    document.getElementById('parallax').style.marginTop = '15px'
    document.getElementById('Title__Principal').style.marginTop = '30px'
    document.getElementById('projetos__paragrafo').style.marginTop = '96px'
    document.getElementById('botao__calculo').style.marginTop = '-100px'
    document.getElementById('navbar').style.height = '100px'

  }
}

function fecharMenu(){
  document.getElementById('menu__header').style.display = 'none'
}

  