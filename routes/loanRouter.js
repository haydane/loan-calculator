const express = require('express');
const { status200, status400 } =  require('../api/header');
const { find_monthly_payment } = require('../src/controllers/loan_monthly_payment');
const { find_monthly_interest } = require('../src/controllers/loan_monthly_interest');
const { find_negative_number } = require('../src/controllers/find_negative_number');
const { find_total_interest } = require('../src/controllers/find_total_interest');
const { find_total_payment } = require('../src/controllers/find_total_payment');
const { weekday,months } = require('../src/controllers/date_format');
const router = express.Router()

router.post('/getMonthlyPayment', (req,res) => {

    let {principle = 0 , interest = 0, term} = req.body;
    try {
        res.status(200).json({
            header: status200,
            body: {
                detail: {
                    'loan_amount': principle,
                    'year': term,
                    'rate': interest,
                },
                loan_summary: find_monthly_payment(principle,interest,term).toFixed(2),
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

    let { principle = 1000 ,interest = 10, term = 1, month = 0 , start_date = new Date() } = req.body;

    let monthly = find_monthly_payment(Number.parseFloat(principle),Number.parseFloat(interest),term, month);

    start_date = new Date(start_date);

    try {
        res.status(200).json({
            header: status200,
            body: {
                detail: {
                    'loan_amount': parseFloat(principle).toString(),
                    'year': term.toString(),
                    'month': parseInt(month).toString(),
                    'rate': parseFloat(interest).toString(),
                    'monthly_payment': parseFloat(monthly).toFixed(2) === "NaN"? 0 :  parseFloat(monthly).toFixed(2),
                    'total_interest': parseFloat(find_total_interest(principle,term, month ,interest,monthly)).toFixed(2),
                    'total_payment': parseFloat(find_total_payment(monthly,term,month)).toFixed(2) === "NaN" ? 0 :  parseFloat(find_total_payment(monthly,term,month)).toFixed(2),
                    'start_date': weekday[start_date.getDay()] + ', ' + start_date.getDate() + ' ' + months[start_date.getMonth()] + ' ' + start_date.getFullYear()
                },
                loan_summary:find_monthly_interest(principle,term, month ,interest,monthly,start_date)
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
