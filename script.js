document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const serviceQuality = parseFloat(document.getElementById('serviceQuality').value);
    const numPeople = parseInt(document.getElementById('numPeople').value);
    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount.');
        return;
    }
    if (isNaN(numPeople) || numPeople <= 0) {
        alert('Please enter a valid number of people.');
        return;
    }
    const tipAmount = billAmount * serviceQuality;
    const totalBill = billAmount + tipAmount;
    const eachPersonPays = totalBill / numPeople;
    document.getElementById('tipAmount').textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById('totalBill').textContent = `$${totalBill.toFixed(2)}`;
    document.getElementById('eachPersonPays').textContent = `$${eachPersonPays.toFixed(2)}`;
});