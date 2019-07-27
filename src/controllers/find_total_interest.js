find_total_interest = (principle,term, number_of_month,interest,monthly) => {
    total_interest = 0;
    for(let month =1 ; month <= term*12 + parseInt(number_of_month) ; month++){
        monthly_rate = interest == 0 ? 0 :  interest / 12;
        rate = monthly_rate * principle /100;
        total_interest = total_interest + rate;
        payment_without_fee =  monthly - parseFloat(rate);
        principle = parseFloat(principle - payment_without_fee).toFixed(2);
    }
    return total_interest;
}

module.exports =  { find_total_interest } 