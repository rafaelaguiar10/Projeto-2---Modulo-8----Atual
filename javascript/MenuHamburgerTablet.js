function changeMenuTablet() {
    if (document.getElementById('menu__header').style.display == 'none') {
    document.getElementById('menu__header').style.display = 'flex' 
    document.getElementById('menu__header').style.marginTop = '60px'
    document.getElementById('menu__header').style.marginLeft = '50px'
    document.getElementById('parallax').style.marginTop = '430px'
    document.getElementById('Title__Principal').style.marginTop = '60px'
    document.getElementById('projetos__paragrafo').style.marginTop = '130px'
    document.getElementById('botao__calculo').style.marginTop = '-115px'
    document.getElementById('cloce__hamburger').style.display = 'flex'
    }
    else {
      document.getElementById('menu__header').style.display = 'none'
      document.getElementById('parallax').style.marginTop = '15px'
      document.getElementById('Title__Principal').style.marginTop = '30px'
      document.getElementById('projetos__paragrafo').style.marginTop = '96px'
      document.getElementById('botao__calculo').style.marginTop = '-100px'
      document.getElementById('navbar').style.height = '72px'

    }
  }

  function fecharMenu(){
    document.getElementById('menu__header').style.display = 'none'
  }

