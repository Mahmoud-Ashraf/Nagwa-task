const labels = [
    '19/5',
    '18/4',
    '17/6',
    '20/7',
    '30/8',
    '30/8',
    '30/8',
    '30/8',
    '30/8',
    '30/8',
    '30/8',
    '30/8',
    '30/8',
    '30/8',
    '30/8',
    '30/8',
];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Adam',
            data: [60, 62, 57, 59, 53, 51, 46, 57, 61, 56, 61, 46, 46, 53, 46, 56, 51],
            borderColor: 'rgb(94, 167, 208)',
            backgroundColor: 'rgb(229, 240, 247)',
        },
        {
            label: 'Average',
            data: [63, 55, 48, 51, 51, 59, 51, 59, 59, 52, 58, 55, 58, 42, 57, 59, 56],
            borderColor: 'rgb(125, 125, 125)',
            backgroundColor: 'rgb(229, 229, 229)',
        },
    ]
};
Chart.defaults.font.family = 'Noto Sans';
Chart.defaults.elements.bar.borderWidth = 2;
Chart.defaults.elements.bar.borderRadius = 20;
Chart.defaults.elements.bar.borderSkipped = false;
Chart.defaults.datasets.bar.barPercentage = 0.8;
Chart.defaults.datasets.bar.categoryPercentage = 0.7;
const config = {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                align: 'start',
                title: {
                    display: false
                },
                labels: {
                    boxWidth: 7,
                    boxHeight: 20,
                    padding: 20,
                    generateLabels: function (chart) {
                        console.log(Chart);
                        let labels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                        for (var key in labels) {
                            labels[key].borderRadius = 3;
                        }
                        return labels;
                    }
                }
            },
            title: {
                display: false,
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#a2a2a2'
                }
            },
            y: {
                grid: {
                    borderDash: [5, 7],
                },
                ticks: {
                    color: '#a2a2a2'
                }
            }
        },
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

