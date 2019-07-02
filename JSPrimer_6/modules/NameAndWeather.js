"use strict";
var Name = (function () {
    function Name(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Name.prototype, "nameMessage", {
        get: function () {
            return "Hello, " + this.first + " " + this.second;
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
var WeatherLocation = (function () {
    // сокращенное определение полей класса через параметры конструктора + модификатор доступа (private, public, protected)
    // модификатор static в параметрах не используется.
    function WeatherLocation(weather, city, somePar) {
        if (somePar === void 0) { somePar = 111; }
        this.weather = weather;
        this.city = city;
        this.somePar = somePar;
        this.weather = weather;
        this.city = city;
    }
    Object.defineProperty(WeatherLocation.prototype, "weatherMessage", {
        get: function () {
            return "it is " + this.weather + " in " + this.city;
        },
        enumerable: true,
        configurable: true
    });
    return WeatherLocation;
}());
exports.WeatherLocation = WeatherLocation;
