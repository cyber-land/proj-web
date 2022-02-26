const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0,1,2,3,4,5,6,7,8,9],
        datasets: [{
            label: 'temperature',
            data: temperature,
            borderColor: 'rgba(54, 162, 235, 255)', 
            borderWidth: 1
        }, {
            label: 'umidita',
            data: umidita,
            borderColor: 'rgba(54, 162, 235, 255)', 
            borderWidth: 1
        }, {
            label: 'cleancode',
            data: cleancode,
            borderColor: 'rgba(54, 162, 235, 255)', 
            borderWidth: 1
        }, {
            label: 'luce',
            data: luce,
            borderColor: 'rgba(54, 162, 235, 255)', 
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