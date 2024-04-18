let error = document.getElementById('validate');
let label = document.getElementsByTagName("label");

// Update the event listeners for each input to reflect the new flow
/*
document.getElementById("name")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next("name", "bedrooms");
        }
    });

document.getElementById("bedrooms")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('bedrooms', 'pickup');
        }
    });

document.getElementById("pickup")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('pickup', 'destination');
        }
    });

document.getElementById("destination")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('destination', 'movingDate');
        }
    });

document.getElementById("movingDate")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('movingDate', 'phone');
        }
    });

document.getElementById("phone")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('phone', 'email');
        }
    });

document.getElementById("email")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('email', 'details');
        }
    });

    */


window.dataLayer = window.dataLayer || [];

// Function to update the data layer and console log the change for debugging
function updateDataLayer(key, value) {
    window.dataLayer.push({ [key]: value });
    console.log(`Data Layer Updated: ${key} = ${value}`);
}

// In house function for going from one question to the next question in conversational form added mandatory checking logic (can be triggered by putting "required" tag in the HTML for the input field)
function next(from, to) {
    let input = document.querySelector(`#${from} input`);
    if (input && !input.checkValidity()) {
        error.innerHTML = "Please fill out this field.";
    } else {
        error.innerHTML = "";
        let fromIcon = document.querySelector(`#${from} img`); //selects the from img
        let toIcon = document.querySelector(`#${to} img`); //selects the to img
        
        fromIcon.classList.add('move-out'); //translating the inital Icon 
        

        setTimeout(() => {
        document.getElementById(from).classList.remove('is-visible');  //slight delay in removing the current form and adding the other form and removing the move out icon from the class list
        document.getElementById(to).classList.add('is-visible');
        fromIcon.classList.remove('move-out');
        },1000); 
        
        //toIcon.classList.add('move-in');

        setTimeout(()=> {toIcon.classList.add('move-in');},1000) // once the other form loads in the other Icon Loads in
            
        updateDataLayer('currentStep', to);

        
        toIcon.classList.remove('move-in'); // finally removing the move in Functionaly from the toIcon
        //fromIcon.classList.add('move-out');

        /*
        setTimeout(() => {
            fromIcon.classList.remove('move-out');
            toIcon.classList.remove('move-in');
        }, 2000); // Duration should match the CSS animation
         */
    }
         
        
}

// In house function to go from one question in conversational form BACK to the previous question, works by removing visible of current layer and restoring visibility of previous layer
function previous(from, to) {
    error.innerHTML = "";
    let fromIcon = document.querySelector(`#${from} img`);
    let toIcon = document.querySelector(`#${to} img`);


    fromIcon.classList.add('move-out-back');

    setTimeout(() => {
        document.getElementById(from).classList.remove('is-visible');
        document.getElementById(to).classList.add('is-visible');
        fromIcon.classList.remove('move-out-back');
        },1000); 

    setTimeout(()=> {toIcon.classList.add('move-in-back');},1000)
    //fromIcon.classList.add('move-out-back');
    //toIcon.classList.add('move-in-back');
    updateDataLayer('currentStep', to);
    
        //fromIcon.classList.add('move-out-back');
        toIcon.classList.remove('move-in-back');
     // Duration should match the CSS animation
}



document.querySelector('form').addEventListener('submit', function (e) {
    // Prevent the actual form submission
    e.preventDefault();

    // Initialize an object to store the form data
    let formData = {
        Name: document.querySelector('input[name="name"]').value,
        Bedrooms: document.querySelector('input[name="bedrooms"]').value,
        Pickup: document.querySelector('input[name="pickup"]').value,
        Dropoff: document.querySelector('input[name="destination"]').value,
        Date: document.querySelector('input[name="movingDate"]').value,
        Phone: document.querySelector('input[name="phone"]').value,
        Email: document.querySelector('input[name="email"]').value,
        Details: document.querySelector('textarea[name="details"]').value,
    };

    fetch('https://backend-jliy.onrender.com/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.text())
        .then(message => {
            alert(message);
            document.getElementById('confirmationMessage').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));

    // Format the data for display or for sending it to a server or email
    let formattedData = `Name: ${formData.Name}\nBedrooms: ${formData.Bedrooms}\nPickup: ${formData.Pickup}\nDropoff: ${formData.Dropoff}\nDate: ${formData.Date}\nPhone number: ${formData.Phone}\nEmail: ${formData.Email}\nDetails: ${formData.Details}`;

    // For demonstration purposes, let's log the formatted data
    console.log(formattedData + "Server submission");
    updateDataLayer('formData', formData);

    // Assuming the rest of your form processing code is here
    document.getElementById('confirmationMessage').style.display = 'block';


});

// function SendEmail() {

//     /* 
//     Name: Piyal
//     Bedrooms: 2
//     Pickup: 3122
//     Dropoff: 3171
//     Date: 2024-03-30
//     Phone number: 0412515151
//     Email: kevin@acemovers.com.au
//     Details: Test Form Input
//     */

//     document.querySelector('form').addEventListener('submit', function (e) {
//         // Prevent the actual form submission
//         e.preventDefault();

//         // Initialize an object to store the form data
//         let formData = {
//             Name: document.querySelector('input[name="name"]').value,
//             Bedrooms: document.querySelector('input[name="bedrooms"]').value,
//             Pickup: document.querySelector('input[name="pickup"]').value,
//             Dropoff: document.querySelector('input[name="destination"]').value,
//             Date: document.querySelector('input[name="movingDate"]').value,
//             'Phone number': document.querySelector('input[name="phone"]').value,
//             Email: document.querySelector('input[name="email"]').value,
//             Details: document.querySelector('textarea[name="details"]').value,
//         };

//         // Format the data for display or for sending it to a server or email
//         let formattedData = `<strong>Name:</strong> ${formData.Name}<br>
//         <strong>Bedrooms:</strong> ${formData.Bedrooms}<br>
//         <strong>Pickup:</strong> ${formData.Pickup}<br>
//         <strong>Dropoff:</strong> ${formData.Dropoff}<br>
//         <strong>Date:</strong> ${formData.Date}<br>
//         <strong>Phone number:</strong> ${formData['Phone number']}<br>
//         <strong>Email:</strong> ${formData.Email}<br>
//         <strong>Details:</strong> ${formData.Details}<br>
//         (Quote from Website)`;

//         // for testing purposes
//         console.log(formattedData + "(Send email function)");


//         // SMTP protocol sends form data to Elastic Email API to bounce to recipient email address
//         Email.send({
//             Host: "smtp.elasticemail.com",
//             Username: "aaron@acemovers.com.au",
//             Password: "8F1E23DEE343B60A0336456A6944E7B4F7DA",
//             To: 'aaron@acemovers.com.au',
//             From: "aaron@acemovers.com.au",
//             Subject: "Alpha Movers Quote",
//             Body: formattedData

//         }).then(
//             message => alert(message)
//         );

//         document.getElementById('confirmationMessage').style.display = 'block'; // Displays form submitted message



//     });

//     console.log('Send Email function Successfully Called')


// }
