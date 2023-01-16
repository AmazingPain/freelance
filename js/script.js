// делаем переменную и присваиваем ей класс кнопки
const btnDarkMode = document.querySelector('.dark-mode-btn');


// проверка темной темы на уровне системных настроек

if (window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches) {
  btnDarkMode.classList.add('dark-mode-btn__icon--active');
  document.body.classList.add('dark');
}

// проверка темной темы в localStorage

if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn__icon--active');
  document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
  btnDarkMode.classList.remove('dark-mode-btn__icon--active');
  document.body.classList.remove('dark');
}

// включаем ночной режим по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle('dark-mode-btn__icon--active');

  const isDark = document.body.classList.toggle('dark');


  if (isDark) {
    localStorage.setItem('darkMode', 'dark')
  }
  else {
    localStorage.setItem('darkMode', 'light')
  }
}


// если меняются системные настройки со временем, меняем тему
 












