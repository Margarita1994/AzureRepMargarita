
someObject ={};

$.post("todos", someObject, function (response) {

// это обратный вызов, выполняется при ответе сервера

console.log("Получение данных с сервера");

console.log(response);

});

setInterval(function () {

$.getJSON("/someway.json", function (fromServer) {

// Сейчас "fromServer" становится объектом, возвращаемым маршрутом someway.json

console.log(fromServer);

});

}, 5000);

app.get("/someway.json", function (req, res) {

// res.json возвращает объект coolObject целиком в виде файла JSON

res.json(coolObject);

});
