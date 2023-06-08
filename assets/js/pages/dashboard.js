$(document).ready(function () {
  const progressBar1 = document.querySelector(".bar1")
  const progressBar2 = document.querySelector(".bar2")
  const progressBar3 = document.querySelector(".bar3")
  const progressBar4 = document.querySelector(".bar4")
  var options1 = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#b3baff", "#90e0db"],
    series: [
      {
        name: "series1",
        data: [70, 79, 42, 51, 28, 40, 37],
      },
      {
        name: "series2",
        data: [41, 52, 14, 32, 45, 32, 21],
      },
    ],

    xaxis: {
      type: "datetime",
      categories: [
        "2023-06-19T00:00:00",
        "2023-06-19T01:30:00",
        "2023-06-19T02:30:00",
        "2023-06-19T03:30:00",
        "2023-06-19T04:30:00",
        "2023-06-19T05:30:00",
        "2023-06-19T06:30:00",
      ],
      labels: {
        style: {
          colors: "rgba(94, 96, 110, .5)",
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      borderColor: "rgba(94, 96, 110, .5)",
      strokeDashArray: 4,
    },
  }

  var chart1 = new ApexCharts(document.querySelector("#apex1"), options1)

  chart1.render()

  // Original array
  let numbers = [200, 75, 20, 50, 240, 20, 45, 0]

  function changeValues() {
    const interval = 2000 // Interval in milliseconds
    const maxChange = 10 // Maximum change allowed

    // Loop through each element of the array
    for (let i = 0; i < numbers.length; i++) {
      // Generate a random number between 0 and maxChange
      const change = Math.floor(Math.random() * (maxChange + 1))

      // Generate a random boolean to determine whether to add or subtract the change
      const isPositive = Math.random() < 0.5

      // Update the value of the element by adding or subtracting the change
      numbers[i] += isPositive ? change : -change

      // Ensure the updated value is not negative
      if (numbers[i] < 0) {
        numbers[i] = 0
      }
      // Ensure the updated value is not negative and not greater than 300
      numbers[i] = Math.max(0, Math.min(300, numbers[i]))
    }
    chart3.updateSeries([
      {
        name: "jewelry Items",
        data: numbers,
      },
    ])
    // Print the updated array
    console.log(numbers)
    document.getElementById("StorageRoom").innerHTML = `${numbers[0]}`
    document.getElementById("Repair").innerHTML = `${numbers[2]}`
    document.getElementById("Display").innerHTML = `${numbers[4]}`
    document.getElementById("Exits").innerHTML = `${numbers[6]}`
    const percentage1 = Math.round((numbers[0] / 300) * 100)
    const percentage2 = Math.round((numbers[2] / 100) * 100)
    const percentage3 = Math.round((numbers[4] / 300) * 100)
    const percentage4 = Math.round((numbers[6] / 100) * 100)
    progressBar1.style.width = `${percentage1}%`
    progressBar2.style.width = `${percentage2}%`
    progressBar3.style.width = `${percentage3}%`
    progressBar4.style.width = `${percentage4}%`
    // Call the function again after the specified interval
    setTimeout(changeValues, interval)
  }
  // Function to change values close to the original

  // let val = changeValues()
  // console.log("val: ", val)

  var options3 = {
    // Original array

    // Start the process
    // changeValues();
    series: [
      {
        name: "jewelry Items",
        data: [200, 75, 20, 50, 240, 20, 45, 0],
      },
      // {
      //   name: "Low - 2013",
      //   data: [12, 11, 14, 18, 17, 13, 13],
      // },
    ],
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#77B6EA"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Real Time Jewelry Item Status",
      align: "left",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: [
        "Storage Room",
        "Fitting Room",
        "Repair/Service Area",
        "Entrances",
        "Display Cases",
        "Sales Counter",
        "Exits",
        "Out of track",
      ],
      title: {
        text: "Location",
      },
    },
    yaxis: {
      title: {
        text: "Items",
      },
      min: 0,
      max: 300,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  }

  var chart3 = new ApexCharts(document.querySelector("#apex3"), options3)
  chart3.render()
  changeValues()

  var options2 = {
    series: [
      {
        name: "Series 1",
        data: [20, 100, 40, 30, 50, 80, 33],
      },
    ],
    chart: {
      height: 337,
      type: "radar",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: "#e9e9e9",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
    colors: ["#EE6E83"],
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColor: "#FF4560",
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val
        },
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val
          } else {
            return ""
          }
        },
      },
    },
  }

  var chart2 = new ApexCharts(document.querySelector("#apex2"), options2)
  chart2.render()
})
