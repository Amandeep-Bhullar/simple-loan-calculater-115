
document.getElementById('form-loan').addEventListener("submit",CalculatePayments);

function CalculatePayments(e)
{
    let loanamount=document.getElementById('txtBoxLoanAmount').value;
    let years=document.getElementById('txtBoxNOY').value;

    let interestRate=5;
    let months=12;
    let calculateInterest = interestRate /100 /12;
    let rateofInterest= (interestRate/months).toFixed(5);
    let numberOfPayments = years*months;

    let x = Math.pow(1+calculateInterest, numberOfPayments);
    let monthly=(loanamount * x * calculateInterest) / (x-1);
    let loanMonthlyPayment = monthly.toFixed(2);
    let totalInterest = (monthly*numberOfPayments - loanamount).toFixed(2);

    let totalPayment = (monthly * numberOfPayments).toFixed(2);

    document.getElementById('lblAmount').innerText =loanamount;
    document.getElementById('lblIntRate').innerText =rateofInterest;
    document.getElementById('lblNOY').innerText =years;
    document.getElementById('lblMonPayment').innerText =loanMonthlyPayment;

    e.preventDefault();
}

/*
function CalculatePayments(e)
{
    let loanamount=document.getElementById('txtBoxLoanAmount').value;
    let interestRate=5;
    let years=document.getElementById('txtBoxNOY').value;

    let loanMonthlyPayment=1000;

    document.getElementById('lblAmount').innerText =loanamount;
    document.getElementById('lblIntRate').innerText =interestRate;
    document.getElementById('lblNOY').innerText =years;
    document.getElementById('lblMonPayment').innerText =loanMonthlyPayment;
    e.preventDefault();
}
*/