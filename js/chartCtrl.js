/**
 * Created by cleverjam on 10/20/16.
 */
//each year is a dataset!!!
// [{
//     label: '2016',
//     data: [100, 23, 66, 16],
//     backgroundColor: getRandomColor(),
//     fill: false,
//     borderWidth: 7,
//     pointRadius: 7
// }, {
//     label: '2017',
//     data: [123, 11, 11, 12],
//     backgroundColor: getRandomColor(),
//     fill: false,
//     pointRadius: 7,
//     borderWidth: 7
// }, {
//     label: '2018',
//     data: [30, 30, 15, 50],
//     backgroundColor: getRandomColor(),
//     fill: false,
//     pointRadius: 7,
//     borderWidth: 7
// }]
define("chartCtrl",[],function () {
    console.log("chartCtrl loaded...");
    var cache = {};

    function addStyles(ds, type) {
        if (type == "line") {
            for (var i = 0; i < ds.length; i++) {
                ds[i].fill = false;
                ds[i].pointRadius = 7;
                ds[i].borderWidth = 2;
                ds[i].pointHoverRadius = 8;
                ds[i].backgroundColor = getRandomColor(1);
            }
        }
        if (type == "bar") {
            var col;
            for (var i = 0; i < ds.length; i++) {
                col = ds[i].backgroundColor = getRandomColor(.5);
                ds[i].borderColor = col.replace(/0.5/,1);
                ds[i].borderWidth = 2;
            }
        }
        return ds;
    }

    function getRandomColor(o) {
        var str = "";
        for (var i = 0; i < 3; i++) {
            str += Math.floor(Math.random() * 255) + ", ";
        }
        return "rgba(" + str + o + ")";
    }


    function buildData(d, type) {
        var data = {};
        var labels = getLabels(d);
        data.labels = labels;
        return {
            labels: labels,
            datasets: addStyles(getSets(d), type)
        }

    }

    function getSets(d) {
        var dataSets = [];
        var data = [];
        for (var y = 0; y < d.length; y++) {
            if (d[y][0]) {
                for (var x = 1; x < d[y].length; x++) {
                    data.push(d[y][x]);
                }
                dataSets.push({
                    label: d[y][0],
                    data: data
                });
            }
            data = [];
        }
        return dataSets;
    }

    function getLabels(d) {
        var result = [];
        for (var i = 0; i < d[0].length; i++) {
            if (d[0][i]) {
                result.push(d[0][i]);
            }
        }
        return result;
    }

    return {
        reload: function (data, type) {
            cache.chartObj.destroy();
            cache.type = type || cache.type;
            return cache.chartObj = new Chart(cache.ctx, {
                type: cache.type,
                data: buildData(data, type || cache.type), //data from the table.
                fill: false,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });


        },
        load: function (ctx, type, data) {
            cache.ctx = ctx;
            cache.type = type;
            return cache.chartObj = new Chart(ctx, {
                type: type,
                data: buildData(data, type), //data from the table.
                fill: false,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    }
});