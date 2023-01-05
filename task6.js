// В объекте coffeescript нет такой вещи, как частные свойства! Но, может быть, есть?

// Реализуйте функцию, createSecretHolder(secret)которая принимает любое значение как секрет и возвращает объект ТОЛЬКО двумя методами .

// getSecret()который возвращает секрет
// setSecret()который устанавливает секрет
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

function createSecretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (n) {
      secret = n;
    },
  };
}
