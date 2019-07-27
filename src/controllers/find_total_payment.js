find_total_payment = (monthly,term,month) => {
    total_payment = parseFloat(monthly * (term * 12 + parseInt(month))).toFixed(2);
    return total_payment;
}

module.exports =  { find_total_payment } 