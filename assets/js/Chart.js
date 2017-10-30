window.onload = function () {
    
var chart = new CanvasJS.Chart("chartContainer", {
    //theme: "light2", // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,
    axisX: {
        lineColor: "black",
        labelFontColor: "black"
    },
    axisY2: {
        gridThickness: 0,
        title: "฿ : Bath",
        suffix: "฿",
        titleFontColor: "black",
        labelFontColor: "black"
    },
    legend: {
        cursor: "pointer",
        itemmouseover: function(e) {
            e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 2;
            e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 2;
            e.chart.render();
        },
        itemmouseout: function(e) {
            e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
            e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 2;
            e.chart.render();
        },
        itemclick: function (e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            e.chart.render();
        }
    },
    toolTip: {
        shared: true
    },
    data: [{
        type: "spline",
        name: "Buy",
        markerSize: 5,
        axisYType: "secondary",
        xValueFormatString: "YYYY",
        yValueFormatString: "#,##0.0\"฿\"",
        showInLegend: true,
        dataPoints: [
            { x: new Date(2000, 00), y: 47.5 },
            { x: new Date(2005, 00), y: 84.8 },
            { x: new Date(2009, 00), y: 91 },
            { x: new Date(2010, 00), y: 90 },
            { x: new Date(2011, 00), y: 92.8 },
            { x: new Date(2012, 00), y: 93.2 },
            { x: new Date(2013, 00), y: 94.8 },
            { x: new Date(2014, 00), y: 92.5 }
        ]
    },
    {
        type: "spline",
        name: "Sell",
        markerSize: 5,
        axisYType: "secondary",
        xValueFormatString: "YYYY",
        yValueFormatString: "#,##0.0\"฿\"",
        showInLegend: true,
        dataPoints: [
            { x: new Date(2000, 00), y: 26.8 },
            { x: new Date(2005, 00), y: 70 },
            { x: new Date(2009, 00), y: 83.6 },
            { x: new Date(2010, 00), y: 85 },
            { x: new Date(2011, 00), y: 85.4 },
            { x: new Date(2012, 00), y: 87.5 },
            { x: new Date(2013, 00), y: 89.8 },
            { x: new Date(2014, 00), y: 91.6 }
        ]
    }]
});
chart.render();

}