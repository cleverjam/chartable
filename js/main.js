/**
 * Created by cleverjam on 10/18/16.
 */

require.config({
    paths: {
        handsontable: "../lib/handsontable/dist/handsontable.full",
        moment: "../lib/moment/moment",
        pikaday: "../lib/pikaday/pikaday",
        zeroclipboard: "../lib/zeroclipboard/dist/ZeroClipboard",
        chart: "../lib/chart.js/dist/Chart"
    },
    shim: {
        "handsontable": {
            deps: ["moment", "pikaday", "zeroclipboard"],
            exports: "Handsontable"
        }
    }
});

define(["handsontable", "chart", "handlers", "tableCtrl", "chartCtrl"], function (Handsontable, Chart, handlers, tableCtrl, chartCtrl) {
    var ctx = document.getElementById("myChart");
    var container = document.getElementById('table'); // default container
    var styleChart = "bar";
    //initial data
    var data = [
        ["", "Honda", "Toyota", "Volkswagen", "Ford", "Ferrari"],
        ["2016", 100, 23, 66, 1, 2],
        ["2017", 123, 11, 11, 1, 2],
        ["2018", 30, 30, 15, 1, 2],
        ["2019", 15, 12, 22, 3, 6]
    ];
    //loading
    var chartObj = chartCtrl.load(ctx, styleChart, data);

    // load table and also change handler
    var tableObj = tableCtrl.load(container,data);
        console.log(tableObj);
    //loading event handlers
    tableCtrl.registerHooks("afterChange", handlers.tableChange(chartObj, tableObj));
    tableCtrl.registerHooks("afterRemoveRow",handlers.tableRemove(chartObj, tableObj));
    tableCtrl.registerHooks("afterRemoveCol",handlers.tableRemove(chartObj, tableObj));
});