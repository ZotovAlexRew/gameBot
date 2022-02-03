"use strict";

const isNumber = function(num) {
 return !isNaN(parseFloat(num)) && isFinite(num);
};


function gameBot(x) {
  let attempts = 10;
  let number = prompt(`Угадай число от 1 до 100. Количество попыток: ${attempts}`);

  function answer() {
    if (attempts <= 1){
      number = alert("Попытки закончились, хочешь сыграть еще?");
      if (number === undefined){
        gameBot(Math.ceil(Math.random() * 100) + 1);
      }
    } else {
      if (number === null){
        number = alert("Игра окончена");
      } else if (!isNumber(number)){
        number = prompt("Введите число!");
        answer();
      } else if (number == x) {
        number = alert("Поздравляю, ты угадал! Хочещь сыграть еще?");
        if (number === undefined){
        gameBot(Math.ceil(Math.random() * 100) + 1);
        }
      } else if (number > x) {
        attempts--;
        number = prompt(`Загаданное число меньше! Попробуй еще раз! Осталось попыток: ${attempts}`);
        answer();
      } else if (number < x) {
        attempts--;
        number = prompt(`Загаданное число больше! Попробуй еще раз! Осталось попыток: ${attempts}`);
        answer();
      }
    }
  }
  answer();
}

let work = gameBot(10);