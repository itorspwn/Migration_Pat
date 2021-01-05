var xData = [
  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
];

var yData = [
  [35083
    ,33003
    ,36092
    ,32072
    ,36055
    ,37476
    ,40320
    ,40014
    ,43756
    ,33520],
  [75172
    ,65543
    ,68640
    ,73256
    ,69369
    ,71434
    ,78415
    ,75012
    ,85452
    ,69751],
  [129738
    ,130745
    ,128854
    ,140495
    ,130647
    ,148477
    ,137926
    ,139656
    ,133012
    ,132753],
  [135602
    ,139926
    ,135715
    ,134430
    ,146081
    ,153948
    ,152950
    ,154963
    ,171887
    ,160668],
  [72342
    ,70641
    ,72600
    ,75048
    ,74033
    ,83529
    ,85401
    ,85184
    ,88191
    ,85354],
  [53311
    ,49515
    ,52689
    ,49213
    ,50788
    ,54888
    ,56010
    ,54712
    ,58031
    ,54340],
  [42222
    ,40850
    ,40181
    ,42914
    ,46075
    ,51010
    ,54275
    ,58209
    ,54093
    ,55343],
  [18111
    ,19436
    ,20169
    ,21027
    ,25560
    ,28058
    ,34697
    ,34374
    ,35680
    ,39314],
  [12407
    ,12684
    ,12046
    ,13224
    ,14700
    ,14890
    ,17696
    ,18902
    ,21043
    ,22508]
];

var colors = [
  'rgba(98, 214, 108, 0.77)', 
  'rgba(66, 188, 76, 0.77)', 
  'rgba(127, 132, 127, 0.77)',
  'rgba(34, 132, 42, 0.77)', 
  'rgba(67,67,67,1)', 
  'rgba(115,115,115,1)', 
  'rgb(149, 193, 237)',
  'rgb(27, 128, 229)', 
  'rgb(16, 78, 140)'
];

var lineSize = [2, 2, 1, 2, 1, 1, 3, 3, 3];

var labels = ['1 to 4', '5 to 17', '18 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 to 74', '75 and over'];

var data = [];

for ( var i = 0 ; i < xData.length ; i++ ) {
  var result = {
    x: xData[i],
    y: yData[i],
    type: 'scatter',
    mode: 'lines',
    line: {
      color: colors[i],
      width: lineSize[i]
    }
  };
  var result2 = {
    x: [xData[i][0], xData[i][9]],
    y: [yData[i][0], yData[i][9]],
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: colors[i],
      size: 6
    }
  };
  data.push(result, result2);
}

var layout = {
  showlegend: false,
  height: 650,
  width: 700,
  xaxis: {
    showline: true,
    showgrid: false,
    showticklabels: true,
    linecolor: 'rgb(204,204,204)',
    linewidth: 2,
    autotick: false,
    ticks: 'outside',
    tickcolor: 'rgb(204,204,204)',
    tickwidth: 2,
    ticklen: 5,
    tickfont: {
      family: 'Arial',
      size: 12,
      color: 'rgb(82, 82, 82)'
    }
  },
  yaxis: {
    showgrid: false,
    zeroline: false,
    showline: false,
    showticklabels: false
  },
  autosize: false,
  margin: {
    autoexpand: false,
    l: 150,
    r: 150,
    t: 95
  },
  annotations: [
    {
      xref: 'paper',
      yref: 'paper',
      x: 0.0,
      y: 1.05,
      xanchor: 'left',
      yanchor: 'bottom',
      text: 'People Moving Out of California - Age Group',
      font:{
        family: 'Calvert',
        size: 25,
        color: 'rgb(37,37,37)'
      },
      showarrow: false
    },
    {
      xref: 'paper',
      yref: 'paper',
      x: 0.5,
      y: -0.1,
      xanchor: 'center',
      yanchor: 'top',
      text: 'Source: www.census.gov',
      showarrow: false,
      font: {
        family: 'Calvert',
        size: 14,
        color: 'rgb(150,150,150)'
      }
    }
  ]
};

for( var i = 0 ; i < xData.length ; i++ ) {
  var result = {
    xref: 'paper',
    x: 0.05,
    y: yData[i][0],
    xanchor: 'right',
    yanchor: 'middle',
    text: labels[i],
    showarrow: false,
    font: {
      family: 'Acumen',
      size: 14,
      color: 'black'
    }
  };
 

  layout.annotations.push(result, result2);
}

Plotly.newPlot('line_age', data, layout);