console.log("Hello");
console.log("Apples");
// определение 2-х функций с одинаковыми именами:
function sayHello() {
    console.log("Hello, anybody!!!");
}
function sayHello(name) {
    if (name === void 0) { name = "You"; }
    console.log("Hello, " + name + "!!!");
} //
sayHello(); // да, действительно, будет выполнена вторая функция, а не первая, хотя мы не передаем ни одного параметра.
// остаточные параметры:
function restParamasFunction() {
    var restParams = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        restParams[_i - 0] = arguments[_i];
    }
    console.log("restParams: " + "(" + (typeof restParams) + ") " + restParams); // restParams: 1,2,three,true,false,90
    console.log("arguments: " + "(" + (typeof restParams) + ") " + arguments); // arguments: [object Arguments]
}
restParamasFunction(1, 2, "three", true, false, 90);
// Лямбда-выражения:
// Одно действие:
var oneAction = function (name) { return console.log("hello! " + name + "!!!"); };
oneAction("Denis");
// Более одного действия и возможный return:
var moreThanOneAction = function (name) {
    var n = name.toUpperCase();
    console.log("hello! " + n + "!!!");
    return n;
};
console.log(moreThanOneAction("Anya"));
// Шаблоны строк:
var weather = "raining";
var mess = "It is " + weather + " today.";
console.log(mess);
// вычисление отатка (чтоб запомнить):
console.info(23 % 5); // 3
// Преобразование в строку:
//5.toString() // Ошибка! Надо:
(5).toString(); // почему так? Просто 5 - это литерал числа. Чтобы вызвать функцию toString(), литерал надо преобразовать в число: (5).
// Другой вариант:
String(11); // "11"
// методы массивов (которые я редко использую):
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var copyArr = function (arr) {
    var newArr = [];
    arr.forEach(function (element) {
        newArr.push(element);
    });
    return newArr;
};
console.info(arr);
//
console.log("slice(4, 6) = " + arr.slice(4, 6)); // ind1, ind2
console.log("splice(4, 3) = " + copyArr(arr).splice(4, 3)); // ind1, count
var copy1 = copyArr(arr);
copy1.unshift(0);
console.log("unshift(0) = " + copy1);
console.log("every( \"> 0\") = " + arr.every(function (el) {
    return el > 0;
})); // true
console.log("some( \"=== 5\") = " + arr.some(function (el) {
    return el === 5;
})); // true
console.log("findIndex( === 6) = " + arr.findIndex(function (el) { return el === 6; }));
console.info("map( el + 1) = " + arr.map(function (el) { return el + 1; })); // возвращается новый массив! Старый остается без изменений.
console.log("reduce(вычисляем сумму всех элементов) = " + arr.reduce(function (sum, el) {
    return sum + el;
}, 0));
