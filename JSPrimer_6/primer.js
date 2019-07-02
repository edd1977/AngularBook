"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// объявить зависимость для содержимого модуля можно так:
var NameAndWeather_1 = require('./modules/NameAndWeather'); // описывается зависимость относительно от файла, в котором зависимость определена.
//import { Component } form '@angular/core' // абсолютный путь к модулю. Не начинается с './'. Путь отсчитывается с папки node_modules.
// если я правильно понимаю - это настройки по умолчанию для загрузчика модулей и их можно настраивать.
// Автор пишет, что в главе 11 мы будем настраивать загрузчик на загрузку модулей с использованием запросов HTTP.
// Вопрос - а вообще... по каким протоколам работает компоновка модулей через загрузчики???
// Псевдонимы имен помогают решить коллизию одноименных классов:
var DuplicateName_1 = require('./modules/DuplicateName');
// импортирование вссех имен из модуля:
var NameAndWeatherLocation = require('./modules/NameAndWeather');
// import "путь к файлу js без расширения" // заставляет загрузчик выполнить содержимое модуля. Есть модули, которые не имепортируют типы, но должны
// внести дополнительную функциональность или выполнить какие-то действия.
require("./modules/CurrentTimeModule");
var TempConverter_1 = require('./modules/TempConverter');
console.log("primer.ts start...");
var myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";
//
console.log("Hello, " + myData.name + "! Today is " + myData.weather + "."); // Hello, Adam! Today is sunny.
// небольшое отступление к литералам и значениям (навел на мысль пример из главы 5: (5).toString()):
// Литерал - это еще не значение, чтобы он стал значением, он должен быть присвоен переменной или преобразован
// с помощью заключения в скобки: (...)
// {}.toString() - ошибка. Т.к. у литерала нетникаких методов.
({}).toString(); // [object Object]
var __a = {};
__a.toString(); // [object Object]
myData.printMessages = function () {
    // При вызове метода, сам объект неявно передается в метод в перемнной this.
    console.log("Hello, " + this.name + "! Today is " + this.weather + ".");
};
myData.printMessages(); // Hello, Adam! Today is sunny.
// class используется в TS/JS для создания объектов с идентичной функциональностью.
var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this._weather = weather;
    }
    Object.defineProperty(MyClass.prototype, "weather", {
        get: function () {
            return "Hello, " + this.name + "! Today is " + this._weather + ".";
        },
        set: function (val) {
            this._weather = val;
        },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.printMessages = function () {
        // При вызове метода, сам объект неявно передается в метод в перемнной this.
        console.log("Hello, " + this.name + "! Today is " + this._weather + ".");
    };
    return MyClass;
}());
var myData2 = new MyClass("Denis", "rainy");
myData2.printMessages(); // Hello, Denis! Today is rainy.
// get, set:
console.log(myData2.weather); // Hello, Denis! Today is rainy. Но уже как обращение к переменной с геттером.
// Оказалось интересным, как для ES5 компилятор TS преобразует геттеры и сеттеры:
// Object.defineProperty(MyClass.prototype, "weather", {
//     get: function () {
//         return "Hello, " + this.name + "! Today is " + this._weather + ".";
//     },
//     set: function (val) {
//         this._weather = val;
//     },
//     enumerable: true,
//     configurable: true
// });
// Наследование в TS:
var MySubClass = (function (_super) {
    __extends(MySubClass, _super);
    function MySubClass(name, weather, city) {
        _super.call(this, name, weather);
        this.city = city;
    }
    MySubClass.prototype.printMessages = function () {
        _super.prototype.printMessages.call(this);
        console.log("You are in the city: " + this.city + "!");
    };
    return MySubClass;
}(MyClass));
var andr = new MySubClass("Andrey", "nice", 'Moscow');
andr.printMessages(); // все то же самое + новая функциональность.
// обращение к зависимостиям из другого модуля:
var roman = new NameAndWeather_1.Name('Roman', 'Ivanov');
var tver = new NameAndWeather_1.WeatherLocation('Tver', 'sunny');
//
console.log(roman.nameMessage); // Hello, Roman Ivanov
console.log(tver.weatherMessage); // it is Tver in sunny
// использование одноименного класса Name через псевдоним:
var otherName = new DuplicateName_1.Name();
console.log("other name = " + otherName.message);
// обращение к классам из модуля через общее имя модуля (экспорт всего):
roman = new NameAndWeatherLocation.Name('Ivan', 'Sidorov');
console.log(roman.nameMessage);
console.log(TempConverter_1.TempConverter.converFtoC("44")); // 6.7
console.log(TempConverter_1.TempConverter.converFtoC("44")); // 6.7
// индексируемые типы в TS:
var cities = {};
cities['London'] = ["raining", TempConverter_1.TempConverter.converFtoC("38")];
cities['Paris'] = ["sunny", TempConverter_1.TempConverter.converFtoC("52")];
cities['Berlin'] = ["snowing", TempConverter_1.TempConverter.converFtoC("23")];
//
for (var key_1 in cities) {
    console.log(key_1 + ": " + cities[key_1][0] + ", " + cities[key_1][1]);
}
// Чтобы определить коллекцию в виде ассоциативного массива надо в качестве типа определить
// объект {}, у которого есть массив [] с одним полем типа number или string, которому соответствует
// какой-то другой тип. В данном случае - кортеж [strin, string].
// { [k: string]: [string, string] }
// В чистом JS это делается на раз-два - с помощью [] добавляется новое свойство у объекта.
// Но в рамках TS, мы должны определить "самуу такую возможность", чтобы использовать проверку типов компилятором TS.
// Поэтому такая форма записи.
// cities[1] = ["London"]; // ошибка!
// cities[1] = "London"; // ошибка!
cities[1] = ["London", "333"]; // это пропустил! Т.е. индексный тип по умолчанию проверяется не строго. Допускается и число и строка,
// не зависимо от того, что установлено в определении. Возможно в настройках компилятора есть более строгий пункт насчет этого.
// индексный тип может быть или number или string.
var key = 1;
console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
