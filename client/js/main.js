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

define(["handsontable", "chart", "handlers", "tableCtrl"], function (Handsontable, Chart, handlers, tableCtrl) {
    //initial data
    var data = [
        ["", "Honda", "Toyota", "Volkswagen", "Ford"],
        ["2016", 100, 23, 66, 1],
        ["2017", 123, 11, 11, 1],
        ["2018", 30, 30, 15, 1]
    ];
    var container = document.getElementById('table'); // default container
    tableCtrl.load(container,data, function (ch, src) {
        //Handle this business
    });


});