
const todayDate = new Date();

// Extracting the components
const year = todayDate.getFullYear(); // 2024
const month = todayDate.getMonth() + 1; // Date function is indexed at 0 so +1 to correct for the index
const date = todayDate.getDate(); // 18


function calculateDaysElapsed(year, month, date) {

    // Days in each month
    const daysInMonth = [
        31, // January
        (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28, // February
        31, // March
        30, // April
        31, // May
        30, // June
        31, // July
        31, // August
        30, // September
        31, // October
        30, // November
        31  // December
    ];

    // Calculate days elapsed
    let daysElapsed = date - 1; // Days in the current month
    for (let i = 0; i < month - 1; i++) {
        daysElapsed += daysInMonth[i]; // Add days from previous months
    }

    return daysElapsed;
}


// Random number function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calculate days elapsed since start of the year
const daysElapsed = calculateDaysElapsed(year, month, date);

function calculateNoResidentialMoves(daysElapsed) {

    noResidentialMoves = 0;

    for (let i = 1; i < daysElapsed; i++){
        let randomNumber = getRandomInt(15,35)
        noResidentialMoves = noResidentialMoves + randomNumber
    }

    return noResidentialMoves;
}

document.getElementById('no-of-residential-moves').textContent = calculateNoResidentialMoves(daysElapsed);

function calculateNoBusinessMoves(daysElapsed) {
    noBusinessMoves = 0;

    for (let i = 1; i < daysElapsed; i++){
        let randomNumber = getRandomInt(2,5)
        noBusinessMoves = noBusinessMoves + randomNumber
    }

    return noBusinessMoves;
}

document.getElementById('no-of-business-moves').textContent = calculateNoBusinessMoves(daysElapsed);

