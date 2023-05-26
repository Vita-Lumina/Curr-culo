// código para alternar entre as abas
const navLinks = document.querySelectorAll('nav a');
const articles = document.querySelectorAll('article');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tabId = e.target.getAttribute('data-tab');
    articles.forEach((article) => {
      article.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    // Selecionar os elementos
    const expItems = document.querySelectorAll('#exp-slider .exp-item slick-slide');

    // Definir a largura dos itens
    expItems.forEach(item => {
      item.style.width = `calc(100% / ${expItems.length})`;
    });

    $('.exp-item slick-slide').slick('reinit');
  });
});

// Obtém o elemento do botão de alternância
var toggleButton = document.getElementById('toggleMode');
// Obtém o elemento do ícone
var icon = document.getElementById('toggleMode');

// Adiciona um ouvinte de eventos para o clique no botão
toggleButton.addEventListener('click', function() {
    // Obtém o elemento de folha de estilo
    var styleSheet = document.getElementById('styleSheet');

    // Verifica qual folha de estilo está sendo usada atualmente
    if (styleSheet.getAttribute('href') === 'Style/estilo.css') {
        // Alterna para o estilo dark
        styleSheet.setAttribute('href', 'Style/estilodark.css');
        // Alterna para o ícone da lua
        icon.setAttribute('src', 'IMG/Moon.ico');
        icon.setAttribute('alt', 'Moon Icon');
    } else {
         // Alterna para o estilo padrão
         styleSheet.setAttribute('href', 'Style/estilo.css');
         // Alterna para o ícone do sol
         icon.setAttribute('src', 'IMG/Sun.ico');
         icon.setAttribute('alt', 'Sun Icon');
    }
});



//Slides de experiencia
$(document).ready(function(){
  $('.exp-slider').slick({
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1, // definindo 1 slide por vez
    slidesToScrool:1,
    adaptiveHeight: true,
    adaptivewidth: true
  });
});


$(document).ready(function(){
  $('#exp-item slick-slide').slick({
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

//Slide de certificado

$(document).ready(function(){
  $('.cert-slider').slick({
    dots: true,
    centerMode: false,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true
  });

  $('.cert-slider').on('init', function(event, slick){
    $('.cert-item.slick-current').addClass('active'); // Adiciona a classe 'active' ao primeiro slide
  });

  $('.cert-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.cert-item').removeClass('active'); // Remove a classe 'active' de todos os slides
  });

  $('.cert-slider').on('afterChange', function(event, slick, currentSlide){
    $('.cert-item[data-slick-index="' + currentSlide + '"]').addClass('active'); // Adiciona a classe 'active' ao slide atual
  });
});

$(document).on('click', '.cert-item', function(e){
  e.preventDefault();
  var slideIndex = $(this).data('slick-index');
  $('.cert-slider').slick('slickGoTo', slideIndex); // Navega para o slide correspondente ao clicar em um item
  });
});
