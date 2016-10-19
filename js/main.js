/**
 * Created by cleverjam on 10/18/16.
 */

require.config({
    paths: {
        handsontable: "../lib/handsontable/dist/handsontable.full",
        moment: "../lib/moment/moment",
        pikaday: "../lib/pikaday/pikaday",
        zeroclipboard: "../lib/zeroclipboard/dist/ZeroClipboard"
    },
    shim: {
        "handsontable": {
            deps: ["moment", "pikaday", "zeroclipboard"],
            exports: "Handsontable"
        }
    }
});

define(["handsontable"], function(Handsontable){

    var data = [
        ["", "Ford", "Volvo", "Toyota", "Honda"],
        ["2016", 10, 11, 12, 13],
        ["2017", 20, 11, 14, 13],
        ["2018", 30, 15, 12, 13]
    ];

    var container = document.getElementById('table');
    var hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: true,
        dropdownMenu: true
    });


});