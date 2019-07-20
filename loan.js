find_monthly_payment = (principle,interest, term) => {
    if(interest == 0) monthly = principle/term;
    else monthly = principle*interest*(Math.pow(1+interest,term))/(Math.pow(1+interest,term) -1);
    return monthly
}

find_monthly_interest = (principle,term,interest,monthly) => {
    arr = []
    if(interest == 0){
        for(let i=1;i<=term*12;i++){
            rate = interest;
            payment_without_fee = monthly - rate;
            principle = principle - payment_without_fee;
            obj = { i, principle, rate, monthly}
            arr.push(obj);
        }
    }
    else{    
        for(let i=1;i<=term*12;i++){
            rate = principle / interest / 12;
            payment_without_fee = monthly - rate;
            principle = principle - payment_without_fee;
            obj = { i, principle, rate, monthly}
            arr.push(obj);
        }
    }
    return arr;
}

let principle = 1000
let interest = 10
let term = 1


monthy_payment = find_monthly_payment(principle,interest/12 / 100,term*12)
let monthly_interest = find_monthly_interest(principle,term,interest,monthy_payment)

monthly_interest.forEach((monthly_interest) =>{
console.log(`Month: ${monthly_interest.i}
             Balance: ${ monthly_interest.i === 12 ? 0 : monthly_interest.principle.toFixed(2)}$
             interest rate: ${monthly_interest.rate.toFixed(2)}$
             monthly payment: ${monthly_interest.monthly.toFixed(2)}$`)})


             
console.log(`\n\nAmount of the Loan: ${principle}
             Annual interest rate: ${interest}% 
             Term of the mortgage loan: ${term*12} Months
             Monthly Payment: ${monthy_payment.toFixed(2)}`)

module.exports = {
    find_monthly_interest
}