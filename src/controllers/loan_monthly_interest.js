find_monthly_interest = (principle,term, number_of_month,interest,monthly,start_date) => {
    arr = []
    start = new Date(start_date);
    for(let month =1 ; month <= term*12 + parseInt(number_of_month) ; month++){
        monthly_rate = interest == 0 ? 0 :  interest / 12
        rate = monthly_rate * principle /100
        payment_without_fee =  monthly - parseFloat(rate)
        principle = principle - payment_without_fee
        date_format = new Date(start.getFullYear(),  month === 1 ? start.getMonth() : start.getMonth() + month - 1 ,start.getDate());
        obj = { 'month' : month, 
                'principle': payment_without_fee.toFixed(2),
                'interest' : rate.toFixed(2), 
                'payment' : monthly.toFixed(2), 
                'balance' : find_negative_number(principle) === true ? '0.00' : principle.toFixed(2),
                'date': weekday[new Date(start.getFullYear(),  month === 1 ? start.getMonth() : start.getMonth() + month - 1 ,start.getDate()).getDay()] + ' ' 
                + date_format.getDate() + ' ' + months[date_format.getMonth()] + ' ' + date_format.getFullYear()
        }
        arr.push(obj);
                                                            
    }
    return arr;
}

module.exports =  { find_monthly_interest } 