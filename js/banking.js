function inputValue(getId) {
    const inputFild = document.getElementById(getId);
    const inputText = inputFild.value;
    const ammount = parseFloat(inputText);
    inputFild.value = '';
    return ammount;
}
function details(getId, ammount) {
    const total = document.getElementById(getId);
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    total.innerText = previousTotal + ammount;
    return previousTotal;
}
function balanceLeft() {
    const totalBalance = document.getElementById('total-balance');
    const balanceText = totalBalance.innerText;
    const balance = parseFloat(balanceText);
    return balance;
}
function presentBalance(ammount, isAdd) {
    const totalBalance = document.getElementById('total-balance');
    balance = balanceLeft();
    if (isAdd == true) {
        totalBalance.innerText = balance + ammount;
    }
    else {
        totalBalance.innerText = balance - ammount;
    }
    return totalPresentBalance;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const deposit = inputValue('deposit-input',);
    if (deposit > 0) {
        details('deposit-total', deposit);
        presentBalance(deposit, true);
    }
    else {
        alert('Please inter a valid numbur.')
    }
})
document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrow = inputValue('withdrow-input');
    const balance = balanceLeft();
    if (withdrow > 0 && balance >= withdrow) {
        details('withdrow-total', withdrow);
        presentBalance(withdrow, false)
    }
    else {
        alert('You do not have sufciant balance!! Please deposit and try again. Tanks!')
    }
})