const balance = document.getElementById('balance');
const moneyCredit = document.getElementById('money-credit');
const moneyDebit = document.getElementById('money-debit');
const list = document.getElementById('list');
const form = document.getElementById('add-form');
const reason = document.getElementById('reason');
const amount = document.getElementById('amount');


const Transactions =[];

let transactions = Transactions;

function displayTransaction(transaction){
    const type = transaction.amount > 0 ? '+' : '-';
    
    const transactionLI = document.createElement('li');

    transactionLI.classList.add(transaction.amount > 0 ? 'credit' : 'debit');

    transactionLI.innerHTML = `
        ${transaction.reason} <span>${type}${transaction.amount}</span> <button class="delete-btn" onclick="deleteTransaction(${transaction.id})"><i class="fa-solid fa-xmark"></i></button>
    `;
    list.appendChild(transactionLI);
};

function updateBalance(){
    const transactionAmounts = transactions.map(transaction => transaction.amount);
    
    const totalBalance = transactionAmounts.reduce((acc, amount) => (acc += amount), 0);
    
    const creditBalance = transactionAmounts
                            .filter(amount => amount > 0)
                            .reduce((acc, amount) => (acc += amount), 0);
    
    const debitBalance = transactionAmounts
                            .filter(amount => amount < 0)
                            .reduce((acc, amount) => (acc += amount), 0);
   
    balance.innerText = `$${totalBalance}`;
    moneyCredit.innerText =`$${creditBalance}`;
    moneyDebit.innerText =`$${debitBalance}`;
    
};

function createID(){
    return Math.floor(Math.random() * 100000000000);
};

function addTransaction(e){
    e.preventDefault();
    if(reason.value.trim() === '' || amount.value.trim() === ''){
        alert('Please provide valid reason and transaction amount.')
    } else{
        const transaction = {
            id: createID(),
            reason: reason.value,
            amount: +amount.value
        }

        transactions.push(transaction);
        displayTransaction(transaction);
        updateBalance();

        reason.value = '';
        amount.value = '';
    }
};

function deleteTransaction(id){
    transactions = transactions.filter( transaction => transaction.id !== id);

    init();
}

function init(){
    list.innerHTML = '';

    transactions.forEach(displayTransaction);

    updateBalance();
};

form.addEventListener('submit', addTransaction);

init();