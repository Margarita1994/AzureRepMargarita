var http = require("http"),
port = process.env.PORT || 1337,
express = require("express"),
server,
coolObject = new Object(my: 12345),
app = express(),
toDos = [];



//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));

// создадим HTTP-сервер на базе Express
http.createServer(app).listen(port);

app.get("/someway.json", function (req, res) {
res.json(coolObject);
});



// app.post("/todos", function (req, res) {
//   // сейчас объект сохраняется в req.body
//   var newToDo = req.body;
//   console.log(newToDo);
//   toDos.push(newToDo);
//   // отправляем простой объект
//   res.json({"message":"Вы разместили данные на сервере!"});
// });

console.log("Server running on port 3000");
