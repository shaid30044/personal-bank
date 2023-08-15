document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalAmount.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalAmount.innerText = currentWithdrawTotal;

    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalAmount.innerText = currentBalanceTotal;

    withdrawField.value = '';
})