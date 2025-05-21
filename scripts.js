const buttons = document.querySelectorAll('.carousel-btn');
const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card-item');
const cardsPerSlide = 3;
const totalSlides = Math.ceil(cards.length / cardsPerSlide);

// Ajusta a largura do container de cards para acomodar todos os slides
carousel.style.width = `${totalSlides * 100}%`;

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Calcula o deslocamento baseado no índice do slide
    const offset = index * -100 / totalSlides;
    carousel.style.transform = `translateX(${offset}%)`;

    // Atualiza o botão ativo
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Ativa o primeiro botão inicialmente
buttons[0].classList.add('active');