document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('messageBox');
    const charCount = document.getElementById('charCount');
    const maxChars = 450;

    // Atualiza o contador de caracteres enquanto o usuário digita
    textarea.addEventListener('input', function() {
      const remaining = maxChars - textarea.value.length;
      charCount.textContent = `${remaining} caracteres restantes`;
    });
});

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
