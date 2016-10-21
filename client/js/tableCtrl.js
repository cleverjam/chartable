/**
 * Created by cleverjam on 10/20/16.
 */

define("tableCtrl", ["handsontable"], function (Handsontable) {

    console.log("tableCtrl loaded...");
    var table;


    return {
        load: function (container, data) {
            return table = new Handsontable(container, {
                data: data,
                stretchH: "all",
                maxRows: 10,
                rowHeaders: true,
                colHeaders: true,
                dropdownMenu: true,
                contextMenu: true
            });
        },
        registerHooks: function (event, cb) {
            if(table){
                table.addHook(event, cb)
            }
        }
    }

});