// Пятница 13 или Черная пятница считается несчастливым днем. Подсчитайте, сколько несчастливых дней в данном году.

// Найдите номер пятницы 13 в данном году.

// Входные данные: год по григорианскому календарю в виде целого числа.

// Выход: число черных пятниц в году в виде целого числа.

// Примеры:
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

const unluckyDays = (year) => {
  let result = 0;
  for (let month = 0; month < 12; month++) {
    result += new Date(year, month, 13).getDay() === 5 ? 1 : 0;
  }
  return result;
};

console.log(unluckyDays(2015));
console.log(unluckyDays(1986));
console.log(unluckyDays(2023));
