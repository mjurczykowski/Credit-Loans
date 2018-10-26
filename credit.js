//Calculates the total payment based on one payment.
function simpleInterest(balance, interest) {
    return balance + (balance * interest);
}


//Anual yearly percent
//Calculates the sub-interest to be accumulated each period to equal the total interest.
function ayp(interest, period) {
    return Math.pow(1 + interest, 1 / period) - 1;
}





//This calculates the total cost of paying off a credit card balance.
//first pay off all of the principle
//build a side stack of interest money
//pay off the interest money. 
function payCreditCard(balance, interest, payment) {
    let principle = balance;
    let interestPaid = 0;

    while (balance > payment) {
        balance = balance - payment;
        interestPaid = interestPaid + balance * ayp(interest, 12);
    }

    interestPaid = interestPaid + principle;

    return interestPaid;
}




//introduces a 4th variable which allows you to delay/defer interest payments for a while.
//case 1: you pay off everything before the interest kicks in.
//case 2: you pay off some, and then pass the rest of the work to the credit card function because it is the same problem at this point.  why re-program something that works.
function payLoan(balance, interest, payment, defer) {
    let principle = balance;
    let offset = payment * defer;

    if (offset >= principle) {
        return principle;
    }
    else {
        let newbalance = principle - (payment * defer);
        return offset + payCreditCard(newbalance, interest, payment);
    }

}



/***************************** Write some logs **********************************/
/****************************to see some results*********************************/
console.log('===========================ANNUAL YEARLY PERCENTS=============================')

console.log('Q1')
console.log(ayp(0.15,12))
console.log('Q2')
console.log(ayp(0.15,4))
console.log('Q3')
console.log(ayp(0.22,12))
console.log('Q4')
console.log(ayp(0.22,4))

console.log('================================BUYING A PC===================================')

console.log('Chase Freedom')
console.log(payCreditCard(3570,0.1545,210))
console.log('AMEX Blue Cash')
console.log(payLoan(3570,0.1899,210,12))