function updateHistory(index){
    const secHistory = document.getElementById('sec-history');
    const div = document.createElement('div');
    div.classList.add('w-11/12', 'mx-auto', 'mb-4', 'border', 'border-border1', 'rounded-lg', 'p-8', 'space-y-4');
    div.innerHTML = `
    <h3 class="text-primary text-lg">
        <span class="font-black">${parseFloat(donationAmounts[index].value).toFixed(2)} Taka</span>
        <span class="font-semibold">is donated for</span>
        <span class="font-black">${titles[index].innerText}</span> 
    </h3>
    <p class="text-secondary">Date: ${new Date()}</P>
    `
    secHistory.prepend(div);
}


function activeButton(id) {
    const btnActive = document.getElementById(id);
    btnActive.classList.add('bg-button', 'border-button', 'border-2', 'text-primary');
    btnActive.classList.remove('bg-amountBg', 'hover:bg-border2', 'border-border2', 'border-2', 'text-secondary');
}


function deactiveButton(id) {
    const btnDeactive = document.getElementById(id);
    btnDeactive.classList.remove('bg-button', 'border-button', 'border-2', 'text-primary');
    btnDeactive.classList.add('bg-amountBg', 'hover:bg-border2', 'border-border2', 'border-2', 'text-secondary');
}