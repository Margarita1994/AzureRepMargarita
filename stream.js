var ntwitter = require("ntwitter"),

credentials = require("./credentials.json"),

twitter;

// настроим наш объект twitter

twitter = ntwitter(credentials);

// настроим поток twitter с тремя параметрами, разделенными запятыми

twitter.stream(

// первый параметр — строка

"statuses/filter",

// второй параметр — объект, содержащий массив со словами, к. мы ищем

{ "track": ["awesome", "cool", "rad", "gnarly", "groovy" }

// третий параметр — обратный вызов, срабатывающий, когда поток создан

function(stream) {

stream.on("data", function(tweet) {

console.log(tweet.text);

});

}

);