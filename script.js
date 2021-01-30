const firstInput = document.getElementById('firstInput');
const ecoInput = document.getElementById('ecoInput');
const firstPos = document.getElementById('firstPos');
const fistNeg = document.getElementById('firstNeg');
const ecoPos = document.getElementById('ecoPos');
const ecoNeg = document.getElementById('ecoNeg');
const subtotal = document.getElementById('subtotal');
const vat = document.getElementById('vat');
const total = document.getElementById('total');

function calculateVat() {
    const currentSubtotal = parseFloat(subtotal.innerText);
    return (currentSubtotal * 10) / 100;
}
function calculateTotal() {
    const currentSubtotal = parseFloat(subtotal.innerText);
    const currentVat = parseFloat(vat.innerText);
    return currentSubtotal + currentVat;
}
function calculateSubtotal() {
    const currentFirstClassInput = parseFloat(firstInput.value);
    const currentEconomyClassInput = parseFloat(ecoInput.value);
    return (currentFirstClassInput * 150) + (currentEconomyClassInput * 100);
}

document.getElementById('firstPos').addEventListener('click', function(){
    const currentFirstInput = parseFloat(document.getElementById('firstInput').value);
    firstInput.value = currentFirstInput + 1;
    subtotal.innerText = calculateSubtotal();
    vat.innerText = calculateVat();
    total.innerText = calculateTotal();
});
document.getElementById('firstNeg').addEventListener('click', function(){
    const currentFirstInput = firstInput.value;
    if (currentFirstInput > 0) {
        firstInput.value = currentFirstInput - 1;
        subtotal.innerText = calculateSubtotal();
        vat.innerText = calculateVat();
        total.innerText = calculateTotal();
    }
});
document.getElementById('ecoPos').addEventListener('click', function(){
    const currentEcoInput = parseFloat(document.getElementById('ecoInput').value);
    ecoInput.value = currentEcoInput + 1;
    subtotal.innerText = calculateSubtotal();
    vat.innerText = calculateVat();
    total.innerText = calculateTotal();
});
document.getElementById('ecoNeg').addEventListener('click', function(){
    const currentEcoInput = ecoInput.value;
    if (currentEcoInput > 0) {
        ecoInput.value = currentEcoInput - 1;
        subtotal.innerText = calculateSubtotal();
        vat.innerText = calculateVat();
        total.innerText = calculateTotal();
    }
});
document.getElementById('bookButton').addEventListener('click', function(){
    document.getElementById('firstPage').style.display = 'none';
    document.getElementById('secondPage').style.display = 'grid';
    document.getElementById('totalPassenger_').innerText = parseInt(firstInput.value) + parseInt(ecoInput.value);
    document.getElementById('subtotal_').innerText = subtotal.innerText;
    document.getElementById('vat_').innerText = vat.innerText;
    document.getElementById('total_').innerText = total.innerText;
});











