document.addEventListener('DOMContentLoaded', function() {
    displayDonationHistory();
});

function displayDonationHistory() {
    const historyContainer = document.getElementById('history-container');
    const history = JSON.parse(localStorage.getItem('donationHistory')) || [];

    if (history.length === 0) {
        historyContainer.innerHTML = '<p>No donation history available.</p>';
    } else {
        const historyHTML = history.map(entry => `
            <div class="w-full p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg relative overflow-hidden">

    <!-- Background Gradient Effect -->
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-300 via-blue-200 to-purple-400 opacity-10 pointer-events-none"></div>

    <!-- Content -->
    <div class="relative z-10">

      <p class="text-2xl font-bold text-gray-800 mb-4">
       ${entry}
    </div>

    <!-- Decorative Line -->
    <div class="mt-4 h-1 w-24 bg-green-400 rounded"></div>
  </div>`).join('');
        historyContainer.innerHTML = historyHTML;
    }
}