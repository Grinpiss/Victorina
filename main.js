function startQuiz() {
  let name = prompt("Ваше имя?", "");
  alert(`Приятно познакомиться ${name}!`);

  let age = prompt('Сколько вам лет?', 100);
  alert(`ОК!`);

  let isBoss = confirm("Готовы приступить в Викторине?");
  alert( `Хорошо,приступаем.Проверим ваши знания `); 

  let year = prompt('В каком году началась Русско-Японская война?', '');

  if (year < 1904) {
    alert( 'Неверно, позже -бал' );
  } else if (year > 1905) {
    alert( 'Неверно раньше, -бал' );
  } else {
    alert( 'Верно, +бал!' );
  }

  let value = prompt('Как зовут президента Польши?', '');

  if (value == 'Дуда') {
    alert('Верно, +бал!');
  } else {
    alert('Неправильно, его зовут Дуда');
  }
  let bak = prompt('В каком году было Крещение РУСИ?', '');

  if (bak < 988) {
    alert( 'Неверно, позже -бал СПАСИБО ЗА УЧАСТИЕ!С ВАС 50 руб.ПМР.Деньги можете перевести на счёт нашей организации' );
  } else if (bak > 988) {
    alert( 'Неверно раньше, -бал СПАСИБО ЗА УЧАСТИЕ!С ВАС 50 руб.ПМР.Деньги можете перевести на счёт нашей организации' );
  } else {
    alert( 'Верно, +бал! СПАСИБО ЗА УЧАСТИЕ!С ВАС 50 руб.ПМР.Деньги можете перевести на счёт нашей организации' );
  }
}
