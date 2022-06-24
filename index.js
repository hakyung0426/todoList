var express = require('express')
var app = express()

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/todolist';
var db;

MongoClient.connect(url, function (err, database) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   db = database;
});

//데이터를 POST 방식으로 전송가능
const bodyParser = require('body-parser')
//url인코딩을 계속 적용할지
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/main.html');
})

app.get('/login', (req, res)=> {
  res.send("get");
})

app.post('/login', (req, res)=> {
  res.send("post");
})

app.listen(3000);