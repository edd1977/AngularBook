module.exports = function() {
    return {
        products: [
            {id: 111, name: "Kayak", catgory: "Watersports", description: "A boat for one persson", price: 275},
            {id: 2, name: "Lifejacket", catgory: "Watersports", description: "Protective and fashionable", price: 48.95},
            {id: 3, name: "Soccer ball", catgory: "Soccer", description: "FIFA-approved size and weight", price: 19.50},
            {id: 4, name: "Corner flags", catgory: "Soccer", description: "Give your playing field a professional touch", price: 34.95},
            {id: 5, name: "Stadium", catgory: "Soccer", description: "Flat-packed 35,000-seat stadium", price: 79500},
            {id: 6, name: "Thinking Cap", catgory: "Chess", description: "Improve brain efficiency by 75%", price: 16},
            {id: 7, name: "Unsteady Chair", catgory: "Chess", description: "Secretly give your opponent a disadvantage", price: 29.95},
            {id: 8, name: "Human Chess Board", catgory: "Chess", description: "A fun game for the family", price: 75},
            {id: 9, name: "Bling Bling King", catgory: "Chess", description: "Gold-plated, diamond-studded King", price: 1200},
        ],
        orders: []
    }
}
// Изучить это приложение:
// https://github.com/typicode/json-server

// Выяснил для себя, что поиск происходит по полю id. Хотя не понятно почему - по первому полю или зарезервировано название "id"?
// Как понял - поменял в первой записи id на 111. В результате запрос "http://localhost:3500/products/1" перестал работать,
// а "http://localhost:3500/products/111" - работал и выдавал измененную запись.