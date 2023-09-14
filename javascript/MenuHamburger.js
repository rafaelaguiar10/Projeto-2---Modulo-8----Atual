function changeMenu() {
    if (document.getElementById('menu__header').style.display == 'none') {
    document.getElementById('menu__header').style.display = 'flex' 
    document.getElementById('parallax').style.marginTop = '60px'
    document.getElementById('Title__Principal').style.marginTop = '80px'
    document.getElementById('projetos__paragrafo').style.marginTop = '150px'
    document.getElementById('botao__calculo').style.marginTop = '-90px'
    }
    else {
      document.getElementById('menu__header').style.display = 'none'
      document.getElementById('parallax').style.marginTop = '15px'
      document.getElementById('Title__Principal').style.marginTop = '30px'
      document.getElementById('projetos__paragrafo').style.marginTop = '96px'
      document.getElementById('botao__calculo').style.marginTop = '-100px'

    }
  }
  