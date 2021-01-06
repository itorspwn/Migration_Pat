// use the D3 library to read in samples.json
d3.json("./static/js/flow_df.json").then((importedData) => {
    var data = importedData;
    console.log(data[0]["2009_estimate"]);
});

// select the dropdown selection
var slist = d3.select("#slist2");

// create event handlers for selecting a list option
slist.on("change", runEnter);

function runEnter() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#sel1");

    // get the value property of the input element
    var year = inputElement.property("value");

    // filter by dropdown menu option and assign data to variables
    d3.json("./static/js/flow_df.json").then((data) => {
        // create empty arrays to use in our visualizations
        var e2010 = [];
        var e2011 = [];
        var e2012 = [];
        var e2013 = [];
        var e2014 = [];
        var e2015 = [];
        var e2016 = [];
        var e2017 = [];
        var e2018 = [];
        var e2019 = [];
        var res = [];
        var postal = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'WA', 'WV', 'WI', 'WY'];
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]["2009_estimate"]);
            console.log(data[i]["current_residence"]);
            e2010.push(data[i]["2010_estimate"]);
            e2011.push(data[i]["2011_estimate"]);
            e2012.push(data[i]["2012_estimate"]);
            e2013.push(data[i]["2013_estimate"]);
            e2014.push(data[i]["2014_estimate"]);
            e2015.push(data[i]["2015_estimate"]);
            e2016.push(data[i]["2016_estimate"]);
            e2017.push(data[i]["2017_estimate"]);
            e2018.push(data[i]["2018_estimate"]);
            e2019.push(data[i]["2019_estimate"]);
            res.push(data[i]["current_residence"]);
        }

        if (year == 2010) {
            var x = e2010;
        }
        else if (year == 2011) {
            var x = e2011;
        }
        else if (year == 2012) {
            var x = e2012;
        }
        else if (year == 2013) {
            var x = e2013;
        }
        else if (year == 2014) {
            var x = e2014;
        }
        else if (year == 2015) {
            var x = e2015;
        }
        else if (year == 2016) {
            var x = e2016;
        }
        else if (year == 2017) {
            var x = e2017;
        }
        else if (year == 2018) {
            var x = e2018;
        }
        else if (year == 2019) {
            var x = e2019;
        }
        
        var data = [{
            type: 'choropleth',
            locationmode: 'USA-states',
            locations: postal,
            z: x,
            text: res,
            autocolorscale: true
        }];

        var layout = {
            title: 'Migration From CA to Other States',
                geo:{
                    scope: 'usa',
                    countrycolor: 'rgb(255, 255, 255)',
                    showland: true,
                    landcolor: 'rgb(217, 217, 217)',
                    showlakes: true,
                    lakecolor: 'rgb(255, 255, 255)',
                    subunitcolor: 'rgb(255, 255, 255)',
                    lonaxis: {},
                    lataxis: {}
                }
        };
        Plotly.newPlot("choro", data, layout, {showLink: false});
        
    });
    
}