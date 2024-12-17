function showDonationModal(amount, headline) {
    const modal = document.getElementById('donation-modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = `You have successfully donated ${amount} Taka to ${headline}.`;
    modal.classList.remove('hidden');

    document.getElementById('close-modal').addEventListener('click', function() {
        modal.classList.add('hidden');
    });
}




document.getElementById("donation-button")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const headline = document.getElementById("donation-area").innerText;
        const totalDonated = getInputFieldTextById("add-money");
        const myBalance = getInputFieldTextById("my-balance");
        const addMoney = getInputFieldValueById("donation-amount-input");
        if (isNaN(addMoney) || addMoney <= 0) {
            alert('Please enter a valid positive Amount.');
            return;
        }
      
        const totalAmount = totalDonated + addMoney;
        const myNewBalance = myBalance - addMoney;
        if (myNewBalance <= 0) {
            alert('Insufficient balance.');
            return;
        }

        document.getElementById("add-money").innerText = totalAmount;
        document.getElementById("my-balance").innerText = myNewBalance;

        document.getElementById("donation-amount-input").value = "";


        addDonationToHistory(addMoney, headline);
        showDonationModal(addMoney, headline);
      
    })

    


document.getElementById("donation-button-one")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const headline = document.getElementById("donation-area-two").innerText;
        const totalDonated = getInputFieldTextById("add-money-one");
        const myBalance = getInputFieldTextById("my-balance");
        const addMoney = getInputFieldValueById("donation-amount-input-one");
        if (isNaN(addMoney) || addMoney <= 0) {
            alert('Please enter a valid positive Amount.');
            return;
        }
      
        const totalAmount = totalDonated + addMoney;
        const myNewBalance = myBalance - addMoney;
        if (myNewBalance <= 0) {
            alert('Insufficient balance.');
            return;
        }

        document.getElementById("add-money-one").innerText = totalAmount;
        document.getElementById("my-balance").innerText = myNewBalance;

        document.getElementById("donation-amount-input-one").value = "";

        addDonationToHistory(addMoney, headline);
        showDonationModal(addMoney, headline);

      
    })

document.getElementById("donation-button-two")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const headline = document.getElementById("donation-area-three").innerText;
        const totalDonated = getInputFieldTextById("add-money-two");
        const myBalance = getInputFieldTextById("my-balance");
        const addMoney = getInputFieldValueById("donation-amount-input-two");
        if (isNaN(addMoney) || addMoney <= 0) {
            alert('Please enter a valid positive Amount.');
            return;
        }
      
        const totalAmount = totalDonated + addMoney;
        const myNewBalance = myBalance - addMoney;
        if (myNewBalance <= 0) {
            alert('Insufficient balance.');
            return;
        }

        document.getElementById("add-money-two").innerText = totalAmount;
        document.getElementById("my-balance").innerText = myNewBalance;

        document.getElementById("donation-amount-input-two").value = "";

        addDonationToHistory(addMoney, headline);
        showDonationModal(addMoney, headline);

      
    })


    function addDonationToHistory(amount,headline) {
        const now = new Date();
        
        const formattedDate = `<h3 class="text-3xl font-extrabold text-green-600">${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}</h3>`;
        const historyEntry = `<p class="text-2xl  text-green-600">${amount} Taka is ${headline} at ${formattedDate} </p>`;
        
        let history = JSON.parse(localStorage.getItem('donationHistory')) || [];
        history.push(historyEntry);
        localStorage.setItem('donationHistory', JSON.stringify(history));
    }