export class TempConverter {
    static converFtoC(temp: number|string): string {
        let val = (<number>temp).toPrecision? temp as number: parseFloat(temp as string);
        return ((parseFloat(val.toPrecision(2)) - 32)/ 1.8).toFixed(1);
    }
}

// автор книги применяет следующий прием для определения типа в TS:
// (val as number).toFixed - переменная приводится к типу (number), а далее проверяется наличие уникального для типа свойства (toFixed для числа)
// и оно проверяется на undefined или null. можно использовать конструкцию: <number>val.
// Зачем приведение?! А чтобы "обмануть" компилятор TS. И сделать допустимым обращение к тестовой функции или свойству (toFixed в данном случае).
// Если компилятор не знает точно типа, он пометит обращение к методу как ошибка. А в случае приведение - спокойно пропустит.
// Классическая проверка типа это: (typeof val === "number")

