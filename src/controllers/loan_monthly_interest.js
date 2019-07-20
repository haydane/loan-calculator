find_monthly_interest = (principle,term,interest,monthly) => {
    arr = []
    if(interest == 0){
        for(let month=1;month<=term*12;month++){
            rate = principle / interest / 12
            payment_without_fee =  monthly - rate
            principle = principle - payment_without_fee
            obj = { 'month' : month, 'balance': find_negative_number(principle) === true ? '0.00' : principle.toFixed(2), 'rate': rate.toFixed(2), 'monthly payment': monthly.toFixed(2) }
            arr.push(obj);
        }
    }
    else
    {    
        for(let month=1;month<=term*12;month++){
            rate = principle / interest / 12
            payment_without_fee =  monthly - rate
            principle = principle - payment_without_fee
            obj = { 'month' : month, 'balance': find_negative_number(principle) === true ? '0.00' : principle.toFixed(2), 'rate': rate.toFixed(2), 'monthly payment': monthly.toFixed(2) }
            arr.push(obj);
        }
    }
    return arr;
}

module.exports =  { find_monthly_interest }