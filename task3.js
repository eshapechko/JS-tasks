// Основы

// Array.prototype.fiterэто функция, которая принимает функцию - предикат и объект в качестве контекста
// Функция -предикат получает текущий элемент , индекс и сам массив
// Контекст будет внутри thisфункции предиката
// ПРИМЕЧАНИЕ

// Как всегда, примите во внимание, что массив, созданный с помощью []и new Array(elemn1, elem2...), отличается по содержимому от массива new Array(length).
// [1, 2]; // { '0': 1, '1': 2, length: 2}
// new Array(1, 2); // { '0': 1, '1': 2, length: 2}
// new Array(2); // { length: 2 }

// [1, 2].push(3); // {'0': 1, '1': 2, '2': 3, length: 3}
// new Array(1, 2).push(3);  // {'0': 1, '1': 2, '2': 3, length: 3}
// new Array(2).push(3); // { '2': 3, length: 3 }
// Тем не менее, удачного кодирования!

// Еще одно примечание

// Ваша реализация не должна изменять текущий массив:

// var base_array = [1, 2, 3, 4, 5];
// var mapped_array = base_array.filter(function(item) { return item < 3 });

// console.log(base_array); // [1, 2, 3, 4, 5]
// console.log(mapped_array); // [1, 2]

Array.prototype.filter = function (fun, that) {
  let out = [];

  if (that) {
    fun = fun.bind(that);
  }

  let t = this;
  let len = t.length;
  for (let i = 0; i < len; i++) {
    if (i in t) {
      if (fun(t[i], i, t)) {
        out.push(t[i]);
      }
    }
  }
  return out;
};
