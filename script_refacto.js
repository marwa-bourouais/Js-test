const DATA = [
  {
    Cheese: 22.2,
    CHOCOLATE: 10.3,
    Impulse: 1.5,
    period: "2021_26",
  },
  {
    Cheese: 21.8,
    CHOCOLATE: 9.8,
    Impulse: 1.5,
    period: "2021_27",
  },
  {
    Cheese: 21.2,
    CHOCOLATE: 9.7,
    Impulse: 1.4,
    period: "2021_28",
  },
];

function addTotal()
{ // Add total property to each entry of DATA 
    return DATA.map((element) => {
        return {
          ...element,
          total:
            Object.entries(element).reduce(function (total, pair) {
              const [key, value] = pair;
              return key !== "period" ? total + value : total;
            }, 0) / DATA.length,
        };
      });

}


function generateGraph() {
 // Add total property to data 
 let dataWithTotal=addTotal();
 // Get canvas x axis 
 let labels = DATA.map((element) => element.period);
 let keys = Object.keys(DATA[0]);
 keys.splice(-1, 1, "total");

 // construct graphValues
 let graphValues = keys.map((key) => {
    return {
      label: key,
      data: dataWithTotal.map((element) => element[key]),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    };
  });
  // create the 2D chart
  let ctx = document.getElementById("myChart").getContext("2d");
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: graphValues,
    },
  });
}

generateGraph();
