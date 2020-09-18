const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false })



app.post('/', urlencodedParser, ( { body } , res) => {
  console.log(body);
  res.send('Przyjęto dane na serwerze');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
