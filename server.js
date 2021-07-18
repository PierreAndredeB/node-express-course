const express = require('express');
const app = express();

const mockUserData=[
{name:'Mark'},
{name:'Jill'}
]
app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockUserData
 	})
})

const bodyParser = require('body-parser');
const middleware = require('./middleware.js');

app.use(bodyParser.json())

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})


app.listen(8000,function(){
console.log("server is running")
})


