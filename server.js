const express = require('express');
const bodyPaser = require('body-parser');
const loanRouter = require('./routes/loanRoute');

const app = express();

var port = 3000 | process.env.port;

// parse application/x-www-form-urlencoded
app.use(bodyPaser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyPaser.json());


// route
app.get('/',(req,res) => {
    res.send('hello');
});
app.use('/api', loanRouter);


app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});