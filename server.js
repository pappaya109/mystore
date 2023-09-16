const express = require('express');
const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());









app.listen(3030, function () {
    console.log('listening on 8080')
  }); 