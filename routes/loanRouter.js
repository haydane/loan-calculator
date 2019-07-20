const express = require('express');
const { status200, status400 } =  require('../api/header');
const { find_monthly_payment } = require('../src/controllers/loan_monthly_payment');
const { find_monthly_interest } = require('../src/controllers/loan_monthly_interest');
const router = express.Router()

router.post('/getMonthlyPayment', (req,res) => {

    let {principle = 0 , interest = 0, term} = req.body;
    try {
        res.status(200).json({
            header: status200,
            body: {
                'monthly payment: ': find_monthly_payment(principle,interest,term).toFixed(2)
            }
        });
        
    } catch (error) {
        res.status(400).json({
            header: status400,
            body: {
                'msg': 'bad request',
            }
        }); 
    }
});

router.post('/getMonthlyInterest', (req,res) => {

    let { principle = 0 ,interest = 0, term  } = req.body;

    let monthly = find_monthly_payment(principle,interest,term)
    try {
        res.status(200).json({
            header: status200,
            body: {
                'monthly payment: ': find_monthly_interest(principle,term,interest,monthly)
            }
        });
        
    } catch (error) {
        res.status(400).json({
            header: status400,
            body: {
                'msg': 'bad request',
            }
        });
    }
});

module.exports = router;