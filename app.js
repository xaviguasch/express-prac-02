const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.render('home.ejs')
})

app.get('/fallinlovewith/:thing', function(req, res) {
    const thing = req.params.thing
    res.render('love.ejs', {thingVar: thing})
})

app.listen(3000, 'localhost', function() {
    console.log('server has started, listening on port 3000, frendo!!!');
})