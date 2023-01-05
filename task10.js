// История
// Ваш интернет-магазин любит раздавать купоны для особых случаев. Некоторые клиенты пытаются обмануть систему, вводя неверные коды или используя купоны с истекшим сроком действия.

// Задача
// Ваша миссия:
// Напишите вызываемую функцию checkCoupon, которая проверяет, что код купона действителен и не просрочен.

// Купон перестает быть действительным на следующий день ПОСЛЕ истечения срока действия. Все даты будут переданы в виде строк в следующем формате: "MONTH DATE, YEAR".

// Примеры:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  );
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));
