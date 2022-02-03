"use strict";

//Проверка на число
const isNumber = function(num) {
 return !isNaN(parseFloat(num)) && isFinite(num);
};

//Игра в угадайку

function gameBot()
{
 //Задание переменных
 let attempts = 10;
 let number = prompt(`Угадай число от 1 до 100. Количество попыток: ${attempts}`);
 let hiddenNumber = Math.ceil(Math.random() * 100);

  //Проверка условий
  function answer()
  {
    //Если попытки закончились
    if (attempts <= 1)
    {
      number = confirm("Попытки закончились, хочешь сыграть еще?");
      if (number === false)
        {
        number = alert("Игра окончена");
        }
        else if (number == true)
        {
          gameBot();
        }   
    }
    else
    {
      //Проверка введенного числа с загаднным числом
      if (number === null)
      {
        number = alert("Игра окончена");
      }
      else if (!isNumber(number)) //Если введена фраза а не число
      {
        number = prompt("Введите число!");
        answer();
      }
      else if (number == hiddenNumber)
      {
        number = confirm("Поздравляю, ты угадал! Хочещь сыграть еще?");
        if (number === false)
        {
        number = alert("Игра окончена");
        }
        else if (number == true)
        {
          gameBot();
        }        
      }
      else if (number > hiddenNumber)
      {
        attempts--;
        number = prompt(`Загаданное число меньше! Попробуй еще раз! Осталось попыток: ${attempts}`);
        answer();
      }
      else if (number < hiddenNumber) 
      {
        attempts--;
        number = prompt(`Загаданное число больше! Попробуй еще раз! Осталось попыток: ${attempts}`);
        answer();
      }
    }
  }
  answer();

}
gameBot();