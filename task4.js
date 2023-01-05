// Вы, наверное, знаете о Function.prototype.bindметоде в JavaScript. Он возвращает копию исходной функции, но эта функция всегда будет вызываться в указанном контексте. Проблема в том, что вы больше не можете перепривязать другой контекст.

// var func = function () {
//   return this.prop;
// };
// var obj1 = {prop: 1},
//     obj2 = {prop: 2};

// func = func.bind(obj1);
// func(); // Will produce 1

// func = func.bind(obj2);
// func(); // Will also produce 1 :(
// Ваша задача — переопределить собственный Function.prototype.bindметод новым, который позволит вам повторно связывать контекст несколько раз. В этом ката вам не нужно беспокоиться о каррировании, функция тестирования никогда не получит параметры.

Function.prototype.bind = function (ctx) {
  const func = this;
  return function (...args) {
    const rightCtx = this === global ? ctx : this;
    return func.apply(rightCtx, args);
  };
};
