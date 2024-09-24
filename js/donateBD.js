// selecting campaign title
const titles = document.getElementsByClassName('title');

// selecting remaining balance by ID
const balance = document.getElementById('balance');

// selecting all the buttons with class 'btn-donate'
const donateButtons = document.getElementsByClassName('btn-donate');

// selecting all the elements with class 'donated-amount'
const donatedAmounts = document.getElementsByClassName('donated-amount');

// selecting all the inputs with class 'donation-amount'
const donationAmounts = document.getElementsByClassName('donation-amount');

// adding event-listener to all the 'Donate Now' buttons
for (let i = 0; i < donateButtons.length; i++) {
    donateButtons[i].addEventListener('click', function(){
        const donatedAmount = parseFloat(donatedAmounts[i].innerText);
        const donationAmount = parseFloat(parseFloat(donationAmounts[i].value).toFixed(2));
        const remainingBalance = parseFloat(balance.innerText);
        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Invalid Donation Amount');
            return;
        }
        else if (donationAmount > remainingBalance) {
            alert("You don't have enough money!! Please check your Balance.");
            return;
        }
        const newDonatedAmount = donatedAmount + donationAmount;
        document.getElementsByClassName('donated-amount')[i].innerText = newDonatedAmount;
        const newRemainingBalance = parseFloat(remainingBalance - donationAmount).toFixed(2);
        balance.innerText = newRemainingBalance;
        document.getElementById('success-modal').classList.add('modal-open');
        updateHistory(i);
        donationAmounts[i].value = '';
    })
}


function closeModal(){
    document.getElementById('success-modal').classList.remove('modal-open');
}


// switching to History
document.getElementById('btn-history').addEventListener('click', historyActive);


// switching to Donation
document.getElementById('btn-donation').addEventListener('click', donationActive);


function historyActive(){
    activeButton('btn-history');
    deactiveButton('btn-donation');
    document.getElementById('sec-donation').classList.add('hidden');
    document.getElementById('sec-history').classList.remove('hidden');
}


function donationActive(){
    activeButton('btn-donation');
    deactiveButton('btn-history');
    document.getElementById('sec-donation').classList.remove('hidden');
    document.getElementById('sec-history').classList.add('hidden');
}