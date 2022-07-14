const chartWrapper = document.querySelector(".chart-wrapper");
const barChartDayArray = [];

fetch("./data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      const barChart = document.createElement("div");
      barChart.classList.add("bar-chart");
      chartWrapper.appendChild(barChart);

      const width = Math.ceil(chartWrapper.offsetWidth / data.length);
      const height = Math.ceil(data[i].amount);
      barChart.style.width = width - 10 + "px";
      barChart.style.height = height * 3 + "px";

      const span = document.createElement("span");
      barChart.appendChild(span);
      barChartDayArray.push(data[i].day);
      span.textContent = data[i].day;
      span.style.top = height * 3 + 10 + "px";

      const amount = document.createElement("span");
      barChart.appendChild(amount);
      barChart.addEventListener("mouseover", () => {
        amount.classList.add("span-amount");
        amount.textContent = "$" + data[i].amount;
      });
        barChart.addEventListener("mouseout", () => {
          amount.classList.remove("span-amount");
          amount.textContent = "";
        });
      };
      const date = new Date();
      let options = {weekday: 'short'}
      const today = date.toLocaleString('en-GB', options).toLowerCase();
      const todaySpanNumber = barChartDayArray.indexOf(today);
      const greenBar = chartWrapper.children[todaySpanNumber];
      greenBar.classList.add('active');
    });


