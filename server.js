const express = require('express');
const request = require('request')
// const fetch = require('node-fetch')
const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());





app.get('/api', (req, res)=>{
  const url = 'https://openapi.naver.com/v1/search/shop.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&sort=sim'
  const options = {
    url: url,
    headers: {'X-Naver-Client-Id':'GFIJm2wRn8RgcdUdZhAw', 'X-Naver-Client-Secret': '2RS1O1yUiB'}
  };
  request.get(options,(errorr, response, body)=>{
    console.log('뭐보내냐',body, response)
    res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
    res.end(body)
  })
})





app.listen(3030, function () {
    console.log('listening on 8080')
  }); 