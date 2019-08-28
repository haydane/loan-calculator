const express = require('express');
const bodyPaser = require('body-parser');
const loanRouter = require('./routes/loanRouter');
const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./api/swagger/swagger.json');

const app = express();

var port = 3000 | process.env.port;

// parse application/x-www-form-urlencoded
app.use(bodyPaser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyPaser.json());  


// route
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.use('/api', loanRouter);
app.post('/testpost', (req,res) => {
    let { name } = req.body;
    res.status(200).json({
        body: {
            'name': name + " plus",
        }
    });
})
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});