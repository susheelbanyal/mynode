const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.json({ status: 'App is running' })
})

const port = 3000;

app.listen(port, ()=>{
	console.log(`app is working on ${port}`)
})
