find_monthly_interest = (principle,term,interest,monthly) => {
    arr = []


    if(interest == 0){
        for(let month=1;month<=term*12;month++){
            rate = interest;
            payment_without_fee = monthly - rate;
            principle = principle - payment_without_fee;
            obj = { month, principle, rate, monthly}
            arr.push(obj);
        }
    }
    else
    {    
        for(let month=1;month<=term*12;month++){
            rate = principle / interest / 12;
            payment_without_fee = monthly - rate;
            principle = principle - payment_without_fee;
            obj = { month, principle, rate, monthly}
            arr.push(obj);
        }
    }
    return arr;
}

module.exports =  { find_monthly_interest }