let error = document.getElementById('validate');
let label = document.getElementsByTagName("label");

// Update the event listeners for each input to reflect the new flow
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




function next(from, to) { // 
    error.innerHTML = "";
    console.log();
    document.getElementById(from).classList.remove('is-visible');
    document.getElementById(to).classList.add('is-visible');
}

function previous(from, to) {
    error.innerHTML = "";
    console.log();
    document.getElementById(from).classList.remove('is-visible');
    document.getElementById(to).classList.add('is-visible');
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
        'Phone number': document.querySelector('input[name="phone"]').value,
        Email: document.querySelector('input[name="email"]').value,
        Details: document.querySelector('textarea[name="details"]').value,
    };

    // Format the data for display or for sending it to a server or email
    let formattedData = `Name: ${formData.Name}\nBedrooms: ${formData.Bedrooms}\nPickup: ${formData.Pickup}\nDropoff: ${formData.Dropoff}\nDate: ${formData.Date}\nPhone number: ${formData['Phone number']}\nEmail: ${formData.Email}\nDetails: ${formData.Details}`;

    // For demonstration purposes, let's log the formatted data
    console.log(formattedData);

    // Assuming the rest of your form processing code is here
    document.getElementById('confirmationMessage').style.display = 'block';


    // Here you could add the logic to send this data to a server or email service
});

function SendEmail(){

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
            'Phone number': document.querySelector('input[name="phone"]').value,
            Email: document.querySelector('input[name="email"]').value,
            Details: document.querySelector('textarea[name="details"]').value,
        };
    
        // Format the data for display or for sending it to a server or email
        let formattedData = `<strong>Name:</strong> ${formData.Name}<br>
        <strong>Bedrooms:</strong> ${formData.Bedrooms}<br>
        <strong>Pickup:</strong> ${formData.Pickup}<br>
        <strong>Dropoff:</strong> ${formData.Dropoff}<br>
        <strong>Date:</strong> ${formData.Date}<br>
        <strong>Phone number:</strong> ${formData['Phone number']}<br>
        <strong>Email:</strong> ${formData.Email}<br>
        <strong>Details:</strong> ${formData.Details}<br>
        (Quote from Website)`;
    
        // for testing purposes
        console.log(formattedData);



        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "aaron@acemovers.com.au",
            Password : "8F1E23DEE343B60A0336456A6944E7B4F7DA",
            To : 'aaron@acemovers.com.au',
            From : "aaron@acemovers.com.au",
            Subject : "Alpha Movers Quote",
            Body : formattedData
    
        }).then(
          message => alert(message)
        );
    
        // Assuming the rest of your form processing code is here
        document.getElementById('confirmationMessage').style.display = 'block';
    
    
 
    });

    console.log('Send Email function Successfully Called')


}
