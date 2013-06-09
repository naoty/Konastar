$(function () {

Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

window.chart = new Highcharts.Chart({
    chart: {
        renderTo: "chart",
        type: "line"
    },
    title: {
        text: "Konashi"
    },
    xAxis: {
        type: "datetime"
    },
    yAxis: {
        title: {
            text: "v out"
        },
        min: 0,
        max: 1024
    },
    series: [{
        name: "AIO2",
        data: []
    }]
});

window.addPoint = function (value) {
    var point = [Date.now(), parseFloat(value)];
    window.chart.series[0].addPoint(point, true, false);
};

});
