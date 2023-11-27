

$('.single-item').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
});

// Получаем текущее количество просмотров из local storage
let views = localStorage.getItem('pageViews');

// Проверяем, есть ли уже значение в local storage
if (views) {
  views = parseInt(views);
  views++;  // Увеличиваем количество просмотров
  localStorage.setItem('pageViews', views);  // Обновляем значение в local storage
} else {
  views = 1;
  localStorage.setItem('pageViews', views);  // Устанавливаем начальное значение в local storage
}

// Отображаем количество просмотров на странице
console.log('Количество просмотров: ' + views);

