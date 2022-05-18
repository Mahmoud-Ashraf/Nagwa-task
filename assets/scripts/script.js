function drawCircleProgress() {
    let circleProgresses = document.getElementsByClassName('progress');
    for (let i = 0; i < circleProgresses.length; i++) {
        let percent = circleProgresses[i].getElementsByClassName('percent')[0];
        let progressPercentage = circleProgresses[i].getAttribute('aria-progress');
        let progressColor = circleProgresses[i].getAttribute('aria-color');
        let progressCircle = circleProgresses[i].getElementsByTagName('circle')[0];
        let progressDot = circleProgresses[i].getElementsByClassName('end-circle')[0];
        let circleRadius = progressCircle.getAttribute('r');
        let circleCirconference = 2 * circleRadius * 3.14;
        let dashOffset = circleCirconference - (circleCirconference * progressPercentage) / 100;
        progressCircle.style.strokeDasharray = circleCirconference;
        progressCircle.style.strokeDashoffset = dashOffset;
        progressCircle.style.stroke = progressColor;
        progressDot.style.transform = 'translateX(-50%) rotate(' + progressPercentage / 100 + 'turn)';
        progressDot.getElementsByClassName('dot')[0].style.borderColor = progressColor;
        percent.getElementsByTagName('h2')[0].style.color = progressColor;
        percent.getElementsByTagName('h2')[0].innerHTML = progressPercentage;
        percent.getElementsByTagName('span')[0].style.color = progressColor;
    }
}

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
drawCircleProgress();

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
]

// Callender
let selectedMonth = new Date();
function initCalenderSelectedMonth() {
    let calenderMonthYear = document.getElementsByClassName('calender-controller')[0].getElementsByTagName('span');
    calenderMonthYear[0].innerHTML = months[selectedMonth.getMonth()];
    calenderMonthYear[1].innerHTML = selectedMonth.getFullYear();
}

function changeCalenderSelectedMonth(direction) {
    if (direction === 'next') {
        selectedMonth.setMonth(selectedMonth.getMonth() + 1);
    } else if (direction === 'previous') {
        selectedMonth.setMonth(selectedMonth.getMonth() - 1);
    }
    initCalenderSelectedMonth();
}

initCalenderSelectedMonth();


// Gradebook
function intitGradebook() {
    let gradebookTable = document.getElementById('gradebook-table');
    let tableBody = gradebookTable.getElementsByTagName('tbody')[0];
    let tableBodyCell = tableBody.getElementsByTagName('td');
    for (let i = 0; i < tableBodyCell.length; i++) {
        let cellData = tableBodyCell[i].getElementsByTagName('span');
        if (cellData.length > 1) {
            if(Number(cellData[0].innerHTML) < Number(cellData[1].innerHTML)/2) {
                cellData[0].classList.add('fail');
            }
            ;
        }
    }
}
intitGradebook();