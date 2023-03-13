// ожидаем загрузки страницы
$(document).ready(() => {
  // проходим циклом по каждому элементу с классом .countup
  $('.countup').each(function() {
    // передаём переменной текущий элемент
    // записываем в переменную конечное значение счётчика из атрибута data-end
    const that = $(this),
        countTo = that.attr('data-end');

    // создаём jQuery функцию animate()
    // которой передаём параметры
    // в первом параметре:
    // countNum - значение, на котором будет остановка счётчика
    $({ countNum: 0 }).animate({
      countNum: countTo
    },
    // второй параметр: объект со значениями
    // 1. длительности анимации,
    // 2. плавности анимации,
    // 3. функции, что должно выполняться на каждом шаге
    // 4. функции, что должно выполнится при завершении
    {
      duration: 8000,
      easing: 'linear',
      step: function() {
        that.text(Math.floor(this.countNum));
      },
      complete: function() {
        that.text(this.countNum);
      }
    });
  });
});
