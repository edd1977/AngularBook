// объявить зависимость для содержимого модуля можно так:
import {Name, WeatherLocation} from './modules/NameAndWeather' // описывается зависимость относительно от файла, в котором зависимость определена.
//import { Component } form '@angular/core' // абсолютный путь к модулю. Не начинается с './'. Путь отсчитывается с папки node_modules.
// если я правильно понимаю - это настройки по умолчанию для загрузчика модулей и их можно настраивать.
// Автор пишет, что в главе 11 мы будем настраивать загрузчик на загрузку модулей с использованием запросов HTTP.
// Вопрос - а вообще... по каким протоколам работает компоновка модулей через загрузчики???

// Псевдонимы имен помогают решить коллизию одноименных классов:
import {Name as OtherName} from './modules/DuplicateName'

// импортирование вссех имен из модуля:
import * as NameAndWeatherLocation from './modules/NameAndWeather'

// import "путь к файлу js без расширения" // заставляет загрузчик выполнить содержимое модуля. Есть модули, которые не имепортируют типы, но должны
// внести дополнительную функциональность или выполнить какие-то действия.
import "./modules/CurrentTimeModule";

import {TempConverter} from './modules/TempConverter'

console.log("primer.ts start...");

let myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";
//
console.log(`Hello, ${myData.name}! Today is ${myData.weather}.`); // Hello, Adam! Today is sunny.

// небольшое отступление к литералам и значениям (навел на мысль пример из главы 5: (5).toString()):
// Литерал - это еще не значение, чтобы он стал значением, он должен быть присвоен переменной или преобразован
// с помощью заключения в скобки: (...)
// {}.toString() - ошибка. Т.к. у литерала нетникаких методов.
({}).toString() // [object Object]
var __a = {}; __a.toString(); // [object Object]

myData.printMessages = function() {
    // При вызове метода, сам объект неявно передается в метод в перемнной this.
    console.log(`Hello, ${this.name}! Today is ${this.weather}.`);
}
myData.printMessages(); // Hello, Adam! Today is sunny.

// class используется в TS/JS для создания объектов с идентичной функциональностью.
class MyClass {

    constructor(name, weather) {
        this.name = name;
        this._weather = weather;
    }

    set weather(val) {
        this._weather = val;
    }
    get weather() {
        return `Hello, ${this.name}! Today is ${this._weather}.`;
    }

    printMessages() {
        // При вызове метода, сам объект неявно передается в метод в перемнной this.
        console.log(`Hello, ${this.name}! Today is ${this._weather}.`);
    }

}
let myData2 = new MyClass("Denis", "rainy");
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
class MySubClass extends MyClass {

    constructor(name, weather, city) {
        super(name, weather);
        this.city = city;
    }

    printMessages() {
        super.printMessages();
        console.log("You are in the city: " + this.city + "!");
    }

}
let andr = new MySubClass("Andrey", "nice", 'Moscow');
andr.printMessages(); // все то же самое + новая функциональность.

// обращение к зависимостиям из другого модуля:
let roman = new Name('Roman', 'Ivanov');
let tver = new WeatherLocation('Tver', 'sunny');
//
console.log(roman.nameMessage); // Hello, Roman Ivanov
console.log(tver.weatherMessage); // it is Tver in sunny

// использование одноименного класса Name через псевдоним:
let otherName = new OtherName();
console.log(`other name = ${otherName.message}`);

// обращение к классам из модуля через общее имя модуля (экспорт всего):
roman = new NameAndWeatherLocation.Name('Ivan', 'Sidorov');
console.log(roman.nameMessage);

console.log(TempConverter.converFtoC("44")); // 6.7
console.log(TempConverter.converFtoC("44")); // 6.7

// индексируемые типы в TS:
let cities: { [key: string]: [string, string] } = {};
cities['London'] = ["raining", TempConverter.converFtoC("38")];
cities['Paris'] = ["sunny", TempConverter.converFtoC("52")];
cities['Berlin'] = ["snowing", TempConverter.converFtoC("23")];
//
for(let key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
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
let key = 1;
console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);

