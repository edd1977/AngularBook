const jwt = require("jsonwebtoken");

const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

// Что узнал (https://github.com/typicode/json-server#access-from-anywhere) - middleware - пормежуточное ПО,
// Скорее всего здесь - это возможность использовать свою логику в виде функций определенной сигнатуры и
// (пока моя догадка про параметр next) - строить цепочки из таких функций. Используется во время обработки запроса.
module.exports = function(req, res, next) {
    // POST разрешен только администратору.
    if(req.url == "/login" && req.method == "POST") {
        if(req.body != null && req.body.name == USERNAME && req.body.password == PASSWORD) {
            let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
            res.json({ success: true, token: token });
        } else {
            res.json({ success: false });
        }
        res.end();
        return;
    } else // далее, проверяем, если имеется попытка создать новый товар или прочитать данные из заказов,
        // то проверяем наличие маркера. если его нет, то 401 (Unauthorized).
        if((req.url.startsWith('/products') && req.method != "GET")
        || (req.url.startsWith("/orders") && req.method != "POST") ) {
        let token = req.headers["authorization"];
        if(token != null && token.startsWith("Bearer<")) {
            token = token.substring(7, token.length - 1);
            try {
                jwt.verify(token, APP_SECRET);
                next();
                return;
            } catch(err) {}
        }
        res.statusCode = 401;
        res.end();
        return;
    }
    next();
}