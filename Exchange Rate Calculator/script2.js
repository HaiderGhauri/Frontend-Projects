const currency = document.getElementById('currency-one');

function showRate(){
    fetch(`https://v6.exchangerate-api.com/v6/9e4e9e9e69b753c3ea292fbb/latest/USD`)
    .then( res => res.json())
    console.log(showRate());
    
}

currency.addEventListener('change', showRate);