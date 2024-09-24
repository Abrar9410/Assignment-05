function closeModal(){
    document.getElementById('success-modal').classList.remove('modal-open');
}


function updateHistory(index){
    const secHistory = document.getElementById('sec-history');
    const div = document.createElement('div');
    div.classList.add('w-11/12', 'mx-auto', 'mb-4', 'border', 'border-border1', 'rounded-lg', 'p-8', 'space-y-4');
    div.innerHTML = `
    <h3 class="text-primary text-lg">
        <span class="font-black">${donationAmounts[index].value} Taka</span> <span class="font-semibold">is donated for</span>
        <span class="font-black">${titles[index].innerText}</span> 
    </h3>
    <p class="text-secondary">Date: ${new Date()}</P>
    `
    secHistory.prepend(div);
}


function historyActive(){
    const btnDonation = document.getElementById('btn-donation');
    const btnHistory = document.getElementById('btn-history');
    btnHistory.classList.add('bg-button', 'border-button', 'border-2', 'text-primary');
    btnHistory.classList.remove('bg-amountBg', 'hover:bg-border2', 'border-border2', 'border-2', 'text-secondary');
    btnDonation.classList.remove('bg-button', 'border-button', 'border-2', 'text-primary');
    btnDonation.classList.add('bg-amountBg', 'hover:bg-border2', 'border-border2', 'border-2', 'text-secondary');
    document.getElementById('sec-donation').classList.add('hidden');
    document.getElementById('sec-history').classList.remove('hidden');
}


function donationActive(){
    const btnDonation = document.getElementById('btn-donation');
    const btnHistory = document.getElementById('btn-history');
    btnHistory.classList.remove('bg-button', 'border-button', 'border-2', 'text-primary');
    btnHistory.classList.add('bg-amountBg', 'hover:bg-border2', 'border-border2', 'border-2', 'text-secondary');
    btnDonation.classList.add('bg-button', 'border-button', 'border-2', 'text-primary');
    btnDonation.classList.remove('bg-amountBg', 'hover:bg-border2', 'border-border2', 'border-2', 'text-secondary');
    document.getElementById('sec-donation').classList.remove('hidden');
    document.getElementById('sec-history').classList.add('hidden');
}
