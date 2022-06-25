var express = require('express')
var app = express()

var Client = require('mongodb').MongoClient;
var db;

Client.connect('mongodb://localhost:27017/', function(error, database){
  if(error) {
    console.log(error);
  } else {
    console.log('데이터베이스에 연결됨');
    db = database.db('todolist');
  }
});

//데이터를 POST 방식으로 전송가능
const bodyParser = require('body-parser');
const { request } = require('express');
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

  var id = req.body.id;
  var pw = req.body.pw;

  db.collection('user').insertOne({id:id, pw:pw});
});

app.listen(3000);