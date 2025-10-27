// modal.js
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function() {
    // Получаем данные из карточки
    const title = card.querySelector('h3').textContent;
    const imageSrc = card.querySelector('img').src;
    const description = card.querySelector('p').textContent;
    const tags = Array.from(card.querySelectorAll('.tech-tags .tag')).map(tag => tag.textContent);
    const demoLink = card.querySelector('.project-links a').href;
    const codeLink = card.querySelector('.project-links a.btn-secondary').href;

    // Заполняем модальное окно
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalDescription').textContent = description;

    const modalTech = document.getElementById('modalTech');
    modalTech.innerHTML = '';
    tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      modalTech.appendChild(span);
    });

    document.getElementById('modalDemo').href = demoLink;
    document.getElementById('modalCode').href = codeLink;

    // Показываем модальное окно
    document.getElementById('projectModal').style.display = 'block';
  });
});

// Закрытие модального окна
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('projectModal').style.display = 'none';
});
