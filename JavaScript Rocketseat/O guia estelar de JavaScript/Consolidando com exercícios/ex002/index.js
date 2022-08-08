let family = {
incomes : [ 2400],
expenses : [1000, 500, 200, 200]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
}

    return total
}


function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0
    let balanceText = "Negativo"

if (itsOk) {
    balanceText = "Positivo"
}
    console.log(`Seu saldo está ${balanceText}: R$${total.toFixed(2)}`)
}
calculateBalance()

//NÃO CONSEGUI FAZER SOZINHO