/* Variables */
var input = document.querySelector(".searchform__input");
var btn = document.querySelector(".searchform__btn");
var cardWidth = document.querySelector(".card").offsetWidth;
var chart = document.getElementById("myChart");


/* Events */
btn.addEventListener('click', function(e) {
    e.preventDefault();
    input.classList.toggle('active');
    input.classList.toggle('focus');
});

/* Stablishing variables and data */
chart.width = cardWidth;

/* Charts JS */
var chart2d = chart.getContext("2d");
var firstChart = new Chart(chart2d, {
    type: 'line',
    data: {
        labels: ["Mon", "Tue", "Wed", "Thue", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "My first data chart",
                data: [{x: 0, y: 20}, {x: 59, y: 80}, {x: 80, y: 30}, {x: 20, y: 81}, {x: 56, y: 15}, {x: 55, y: 90}, {x: 40, y: 20}],
                borderColor: "#FF0068",
                fill: false,
                borderWidth: 1,
            }
        ]
    }
});
