document.addEventListener('DOMContentLoaded', () => {
    // First chart
    const ctx1 = document.getElementById('myChart');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['McDonald\'s', 'Burger King', 'Wendy\'s', 'Sonic', 'KFC', 'Chick-fil-A', 'Arby\'s'],
            datasets: [{
                label: 'Average Calories from Fast Food Chains',
                data: [367, 420, 398, 498, 411, 404, 475],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)', // McDonald's
                    'rgba(54, 162, 235, 0.7)', // Burger King
                    'rgba(255, 206, 86, 0.7)', // Wendy's
                    'rgba(75, 192, 192, 0.7)', // Sonic
                    'rgba(153, 102, 255, 0.7)', // KFC
                    'rgba(255, 159, 64, 0.7)', // Chick-fil-A
                    'rgba(201, 93, 207, 0.7)'  // Arby's
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Second chart
    const ctx2 = document.getElementById('myChart1');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['McDonald\'s', 'Burger King', 'Wendy\'s', 'Sonic', 'KFC', 'Chick-fil-A', 'Arby\'s'],
            datasets: [{
                label: 'Amount of Calories from Sandwiches and Burgers',
                data: [300, 550, 404, 870, 620, 420, 550],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)', // McDonald's
                    'rgba(54, 162, 235, 0.7)', // Burger King
                    'rgba(255, 206, 86, 0.7)', // Wendy's
                    'rgba(75, 192, 192, 0.7)', // Sonic
                    'rgba(153, 102, 255, 0.7)', // KFC
                    'rgba(255, 159, 64, 0.7)', // Chick-fil-A
                    'rgba(201, 93, 207, 0.7)'  // Arby's
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Third chart
    const ctx3 = document.getElementById('myChart3');
    new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['Consumed', 'Left'],
            datasets: [{
                label: 'Daily Total Fat Intake',
                data: [33, 67],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)', // Consumed
                    'rgba(121, 121, 121, 0.2)'  // Left
                ],
                borderWidth: 1,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true 
        }
    });

    const ctx4 = document.getElementById('myChart4');
    new Chart(ctx4, {
        type: 'doughnut',
        data: {
            labels: ['Consumed', 'Left'],
            datasets: [{
                label: 'Daily Sat Fat Intake',
                data: [23, 77],
                backgroundColor: [
                    'rgba(255, 193, 99, 0.7)', // Consumed
                    'rgba(121, 121, 121, 0.2)'  // Left
                ],
                borderWidth: 1,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true 
        }
    });

    const ctx5 = document.getElementById('myChart5');
    new Chart(ctx5, {
        type: 'doughnut',
        data: {
            labels: ['Consumed', 'Left'],
            datasets: [{
                label: 'Daily Cholesterol Intake',
                data: [20, 80],
                backgroundColor: [
                    'rgba(254, 189, 92, 0.7)', // Consumed
                    'rgba(121, 121, 121, 0.2)'  // Left
                ],
                borderWidth: 1,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true
        }
    });

    const ctx6 = document.getElementById('myChart6');
    new Chart(ctx6, {
        type: 'doughnut',
        data: {
            labels: ['Consumed', 'Left'],
            datasets: [{
                label: 'Daily Sodium Intake',
                data: [64, 36],
                backgroundColor: [
                    'rgba(250, 71, 71, 0.7)', // Consumed
                    'rgba(121, 121, 121, 0.2)'  // Left
                ],
                borderWidth: 1,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true
        }
    });
});