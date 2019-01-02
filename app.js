const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.render('home.ejs')
})


app.listen(3000, 'localhost', function() {
    console.log('server has started, listening on port 3000, frendo!!!');
})