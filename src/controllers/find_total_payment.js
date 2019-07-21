find_total_payment = (monthly,term,month) => {
    total_payment = monthly * (term * 12 + parseInt(month));
    return total_payment;
}

module.exports =  { find_total_payment } 