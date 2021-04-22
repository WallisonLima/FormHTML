const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/'));

app.get('/', async (req, res) => {
    res.sendFile('index.html')
})


app.listen(port, () =>{
	console.log(`Servidor rodando em: http://localhost:${port}`)
})