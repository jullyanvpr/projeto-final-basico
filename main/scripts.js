const buttons = document.querySelectorAll('.carousel-btn');
const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card-item');
const cardsPerSlide = 3;
const totalSlides = Math.ceil(cards.length / cardsPerSlide);

carousel.style.width = `${totalSlides * 100}%`;

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const offset = index * -100 / totalSlides;
    carousel.style.transform = `translateX(${offset}%)`;

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

buttons[0].classList.add('active');

fetch('../header/header.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('header').innerHTML = html;

    if (!document.querySelector('link[href="../header/header.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '../header/header.css';
      document.head.appendChild(link);
    }
  });

  fetch('../footer/footer.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('footer').innerHTML = html;

    if (!document.querySelector('link[href="../footer/footer.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '../footer/footer.css';
      document.head.appendChild(link);
    }
  });
