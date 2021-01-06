console.log("inside app.js");

var searchBtn = d3.select("#search-btn");

// event handler for search button click
searchBtn.on("click", function () {
  var stateInput = d3.select("#state-input");
  var stateValue = stateInput.node().value;
  //   Ensure that state search term is capitalized to match json file
  stateValue = stateValue[0].toUpperCase() + stateValue.substr(1);
  d3.json("./static/js/census_df.json").then(function (data) {
    var filteredStateData = data.filter((state) => state.Name === stateValue);
    var povertyRate = [];
    var unemploymentRate = [];
    filteredStateData.forEach((state) => {
      console.log(state);
      povertyRate.push(state["Poverty Rate"]);
      unemploymentRate.push(state["Unemployment Rate"]);
    });
    var years = [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
    ];
    var trace1 = {
      x: years,
      y: povertyRate,
      mode: "lines",
      name: "Poverty Rate",
    };
    var trace2 = {
      x: years,
      y: unemploymentRate,
      mode: "lines",
      name: "Unemployment Rate",
    };
    var layout = {
      title: "Poverty And Unemployment Rate by State",
      xaxis: {
        title: "Year",
        showgrid: false,
        showline: true,
      },
      yaxis: {
        title: "Poverty and Unemployment Rate (%)",
        showgrid: false,
        showline: true,
      },
    };
    var data = [trace1, trace2];
    Plotly.newPlot("line-plot", data, layout);
  });
});
