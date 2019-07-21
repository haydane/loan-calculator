find_monthly_interest = (principle,term, number_of_month,interest,monthly,start_date) => {
    arr = []
    weekday = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    start = new Date(start_date);
    for(let month =1 ; month <= term*12 + parseInt(number_of_month) ; month++){
        rate = principle / interest / 12
        payment_without_fee =  monthly - rate
        principle = principle - payment_without_fee
        obj = { 'month' : month, 
                'principle': payment_without_fee.toFixed(2),
                'interest' : rate.toFixed(2), 
                'payment' : monthly.toFixed(2), 
                'balance' : find_negative_number(principle) === true ? '0.00' : principle.toFixed(2),
                'date': weekday[new Date(start.getFullYear(),  month === 1 ? start.getMonth() : start.getMonth() + month - 1 ,start.getDate()).getDay()] + ' '  +  new Date(start.getFullYear(),  month === 1 ? start.getMonth() : start.getMonth() + month - 1 ,start.getDate()).toLocaleDateString(),
              }
        arr.push(obj);
    }
    return arr;
}

module.exports =  { find_monthly_interest }