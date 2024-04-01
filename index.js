const express = require('express')
const bodyParser = require('body-parser');
const ejs = require('ejs')

const app = express()
const PORT = 6531

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res,next) => {
    res.render('index')
})

app.get('/hbd', (req,res) => {
    res.render('happybirthday')
})

app.post('/verify', (req, res) => {
    const { code } = req.body;
    if (!code) {
        res.send('Please enter a code');
    } else if (code === '280124') {
        res.redirect('/hbd');
    } else {
        res.send('Incorrect code');
    }
});



app.listen(PORT,() => {
    console.log(`App is running on port ${PORT}`)
})