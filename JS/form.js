function updateScaleOptions() {
    var typeSelect = document.getElementById('type');
    var scaleSelect = document.getElementById('scale');
    var type = typeSelect.value;

    // Clear existing options
    scaleSelect.innerHTML = '';

    // Add a default disabled option
    var defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = "Scale of move";
    scaleSelect.appendChild(defaultOption);

    var options = [];
    if (type === "residential") {
        options = [
            { text: "1 Bedroom", value: "1bdr" },
            { text: "2 Bedrooms", value: "2bdr" },
            { text: "3 Bedrooms", value: "3bdr" },
            { text: "4 Bedrooms", value: "4bdr" },
            { text: "5+ Bedrooms", value: "5+bdr" }
        ];
    } else if (type === "commercial") {
        options = [
            { text: "1 Office space", value: "1office" },
            { text: "2 Office spaces", value: "2office" },
            { text: "3 Office spaces", value: "3office" },
            { text: "4 Office spaces", value: "4office" },
            { text: "5+ Office spaces", value: "5+office" }
        ];
    }

    // Add new options
    options.forEach(function(optionData) {
        var option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        scaleSelect.appendChild(option);
    });
}

// Call this function to set the initial state of the scale select box
document.addEventListener('DOMContentLoaded', function() {
    updateScaleOptions();
});
