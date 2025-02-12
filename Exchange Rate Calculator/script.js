const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate(){
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;
    
    fetch(` https://v6.exchangerate-api.com/v6/9e4e9e9e69b753c3ea292fbb/pair/${currencyOneCode}/${currencyTwoCode}`)
    .then(res => res.json())
    .then(data => {
        const conversionRate = data.conversion_rate;
        rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;
        const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwoCode }).format((amountCurrencyOne.value * conversionRate).toFixed(2));
        amountCurrencyTwo.value = amount2;

    });
  
};


currencyOne.addEventListener('change', calculate);
amountCurrencyOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amountCurrencyTwo.addEventListener('input', calculate);

swap.addEventListener('click', () =>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;

    calculate();
    

});

calculate();

