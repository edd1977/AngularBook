export class Name {
    first: string; // аннотирование свойств класса
    second: string;
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    get nameMessage(): string {
        return `Hello, ${this.first} ${this.second}`;
    }
}

export class WeatherLocation {
    // сокращенное определение полей класса через параметры конструктора + модификатор доступа (private, public, protected)
    // модификатор static в параметрах не используется.
    constructor(private weather: string, private city: string, protected somePar: number = 111) {
        this.weather = weather;
        this.city = city;
    }

    get weatherMessage(): string { // аннотирование типа результата функции
        return `it is ${this.weather} in ${this.city}`;
    }
}