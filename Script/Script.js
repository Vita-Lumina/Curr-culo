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
});