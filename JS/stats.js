const todayDate = new Date();

// Extracting the components
const year = todayDate.getFullYear();
const month = todayDate.getMonth() + 1; // Correcting for 0 index
const date = todayDate.getDate();

// Function to format the date as a string
function formatDate(year, month, date) {
    return `${year}-${month}-${date}`;
}

// Random number function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get or update the move counts
function getOrUpdateMoveCounts() {
    let lastUpdate = localStorage.getItem('lastUpdate');
    let currentDate = formatDate(year, month, date);

    let noResidentialMoves = parseInt(localStorage.getItem('noResidentialMoves') || '0');
    let noBusinessMoves = parseInt(localStorage.getItem('noBusinessMoves') || '0');

    if (lastUpdate !== currentDate) {
        // It's a new day, increment the counts
        noResidentialMoves += getRandomInt(15,35);
        noBusinessMoves += getRandomInt(2,5);

        // Save the updated counts and the new last update date
        localStorage.setItem('noResidentialMoves', noResidentialMoves.toString());
        localStorage.setItem('noBusinessMoves', noBusinessMoves.toString());
        localStorage.setItem('lastUpdate', currentDate);
    }

    return { noResidentialMoves, noBusinessMoves };
}

const moveCounts = getOrUpdateMoveCounts();

document.getElementById('no-of-residential-moves').textContent = moveCounts.noResidentialMoves;
document.getElementById('no-of-business-moves').textContent = moveCounts.noBusinessMoves;
