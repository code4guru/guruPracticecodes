const income = prompt(`Enter you income`, `Enter taxable income here!"`);
let tax = 0, reb87A = 0;

if (income > 250000) {
    if (income > 500000) {
        if (income > 1000000) {
            tax = (income - 1000000) * 0.3 + 112500;
        } else tax = (income - 500000) * 0.2 + 12500;
    } else tax = (income - 250000) * 0.05;
}
console.log(`Income Rs.${income}
Tax :       Rs.${tax} 
Rebate :    Rs.${(income <= 500000 && tax <= 12500) ? reb87A = tax : reb87A = 0}
Net Tax :   Rs. ${tax - reb87A}
Cess :      Rs. ${(tax - reb87A) * 0.04}
Total tax : Rs. ${(tax - reb87A) + (tax - reb87A) * 0.04}`);
