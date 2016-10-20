/**
 * Created by cleverjam on 10/20/16.
 */

define("tableCtrl", ["handsontable"], function (Handsontable) {

    console.log("tableCtrl loaded...");

    return {
        load: function (container, data, listener) {
            return new Handsontable(container, {
                data: data,
                stretchH: "all",
                rowHeaders: true,
                colHeaders: true,
                dropdownMenu: true,
                afterChange: function (changes, source) {
                    listener(changes, source);
                }
            });
        }
    }

});