document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('impactChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Example labels
            datasets: [{
                label: 'Carbon Footprint Reduction',
                data: [10, 20, 15, 30, 25, 35], // Example data
                borderColor: '#2e8b57',
                backgroundColor: 'rgba(46, 139, 87, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
