let error = document.getElementById('validate');
let label = document.getElementsByTagName("label");


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
        


        setTimeout(()=> {toIcon.classList.add('move-in');},1000) // once the other form loads in the other Icon Loads in
            
        updateDataLayer('currentStep', to);

        
        toIcon.classList.remove('move-in'); // finally removing the move in Functionaly from the toIcon

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
    updateDataLayer('currentStep', to);
    

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

    fetch('http://localhost/backend/submit-form.php', {
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