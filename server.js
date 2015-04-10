var http = require("http"),
port = process.env.PORT || 1337,
express = require("express"),
    server;
app = express();

// настроим статическую файловую папку

// для маршрута по умолчанию

// (см. также замечание о маршрутах далее)

app.use(express.static(__dirname + "/client"));

// создадим HTTP-сервер на базе Express

http.createServer(app).listen(port);

console.log("Server running on port 3000");
