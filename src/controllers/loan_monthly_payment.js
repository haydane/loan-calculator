find_monthly_payment = (principle,interest, term) => {
    

    if(principle != 0 || term !=0)
    {
        interest = interest / 12 / 100;
        term = term * 12 
        if(interest == 0) monthly = principle/term;
        else monthly = principle*interest*(Math.pow(1+interest,term))/(Math.pow(1+interest,term) -1);
        return monthly
    }
    else{
        return ;
    }
}


module.exports = {
    find_monthly_payment
}