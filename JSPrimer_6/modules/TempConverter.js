"use strict";
var TempConverter = (function () {
    function TempConverter() {
    }
    TempConverter.converFtoC = function (temp) {
        var val = temp.toPrecision ? temp : parseFloat(temp);
        return ((parseFloat(val.toPrecision(2)) - 32) / 1.8).toFixed(1);
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
// автор книги применяет следующий прием для определения типа в TS:
// (val as number).toFixed - переменная приводится к типу (number), а далее проверяется наличие уникального для типа свойства (toFixed для числа)
// и оно проверяется на undefined или null. можно использовать конструкцию: <number>val.
// Зачем приведение?! А чтобы "обмануть" компилятор TS. И сделать допустимым обращение к тестовой функции или свойству (toFixed в данном случае).
// Если компилятор не знает точно типа, он пометит обращение к методу как ошибка. А в случае приведение - спокойно пропустит.
// Классическая проверка типа это: (typeof val === "number")
