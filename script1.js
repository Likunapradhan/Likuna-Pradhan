document.addEventListener("DOMContentLoaded", function() {
    function showTab(tabId) {
        document.querySelectorAll('.calculator-form').forEach(function(form) {
            form.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
        
        document.querySelectorAll('.tab-button').forEach(function(button) {
            button.classList.remove('active');
        });
        document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    }

    function calculateHousehold() {
        const people = parseFloat(document.getElementById('household-people').value);
        const electricity = parseFloat(document.getElementById('electricity').value) || 0;
        const naturalGas = parseFloat(document.getElementById('natural-gas').value) || 0;
        // Add other energy sources...

        const totalFootprint = (electricity * 0.4071) / people;
        document.getElementById('household-result').textContent = totalFootprint.toFixed(2) + ' metric tons of CO2e';
    }

    function calculateFlights() {
        const from = document.getElementById('flights-from').value;
        const to = document.getElementById('flights-to').value;
        // Add other flight details...

        const totalFootprint = 0; // Placeholder calculation
        document.getElementById('flights-result').textContent = totalFootprint.toFixed(2) + ' metric tons of CO2e';
    }

    function calculateCar() {
        const mileage = parseFloat(document.getElementById('car-mileage').value) || 0;
        // Add car details...

        const totalFootprint = 0; // Placeholder calculation
        document.getElementById('car-result').textContent = totalFootprint.toFixed(2) + ' metric tons of CO2e';
    }

    function calculateMotorbike() {
        const mileage = parseFloat(document.getElementById('motorbike-mileage').value) || 0;
        // Add motorbike details...

        const totalFootprint = 0; // Placeholder calculation
        document.getElementById('motorbike-result').textContent = totalFootprint.toFixed(2) + ' metric tons of CO2e';
    }

    function calculatePublic() {
        const bus = parseFloat(document.getElementById('bus').value) || 0;
        // Add other public transport details...

        const totalFootprint = 0; // Placeholder calculation
        document.getElementById('public-result').textContent = totalFootprint.toFixed(2) + ' metric tons of CO2e';
    }

    function estimateSecondary() {
        const food = parseFloat(document.getElementById('food').value) || 0;
        // Add other secondary categories...

        const totalFootprint = 0; // Placeholder calculation
        document.getElementById('secondary-result').textContent = totalFootprint.toFixed(2) + ' metric tons of CO2e';
    }

    function updateResults() {
        // Calculate total footprint based on results from all sections
        const totalFootprint = 0; // Placeholder calculation
        document.getElementById('total-footprint').textContent = totalFootprint.toFixed(2) + ' metric tons of CO2e';
    }

    document.querySelectorAll('.tab-button').forEach(function(button) {
        button.addEventListener('click', function() {
            showTab(button.getAttribute('onclick').match(/'([^']+)'/)[1]);
        });
    });

    document.getElementById('household').querySelector('button').addEventListener('click', calculateHousehold);
    document.getElementById('flights').querySelector('button').addEventListener('click', calculateFlights);
    document.getElementById('car').querySelector('button').addEventListener('click', calculateCar);
    document.getElementById('motorbike').querySelector('button').addEventListener('click', calculateMotorbike);
    document.getElementById('public').querySelector('button').addEventListener('click', calculatePublic);
    document.getElementById('secondary').querySelector('button').addEventListener('click', estimateSecondary);
    document.getElementById('offset-now').addEventListener('click', updateResults);
});