let rates = {
    USD: {
        USD: 1,
        VND: 23.123,

    },
    VND: {
        VND: 1,
        USD: 0.000043,
    }
}
let button = getID("calculateBtn");
let select = getID("select1");
let select2 = getID("select2");
let result = getID("result");

let showGiven = getID("given-amount");
let showBaseCurrency = getID("base-currency");
let showAfterCurrency = getID("after-currency");
function convertToCurrency() {
    //phai lay value input sau khi dc "click"
    let amountInput = parseFloat(getID("amount").value);

    console.log(amountInput);
    console.log(rates[select.value]);
    console.log(rates[select.value][select2.value]);
    if(select.value == select1.value){
        result.innerHTML =  amountInput;
    }else{
        result.innerHTML = (amountInput * rates[select.value][select2.value]);
    }
    if (rates[select.value][select2.value]) {
        result.innerHTML = amountInput * rates[select.value][select2.value];

    }
    showGiven.innerHTML = amountInput;
    showBaseCurrency.innerHTML = select.value + "=";
    showAfterCurrency.innerHTML = select2.value;
}

function getID(id) {
    return document.getElementById(id);
}
// function getID(id) {
//     return document.getElementById(id);
// }