const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

app.get('/', function (req, res) {
  res.send('Hello World, This is Nicole Reilly!')
})

console.log('in the node console');

app.listen(PORT, () => {
    console.log('Example app listening on port 3000') 
})