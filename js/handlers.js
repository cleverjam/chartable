/**
 * Created by cleverjam on 10/20/16.
 */
define("handlers", ["chartCtrl"], function (chartCtrl) {
    console.log("handlers loaded");
    function isLabel(col, row) {
        if (col === 0)
            return true;
        else if (row === 0)
            return true;
        return false;
    }


    return {
        tableChange: function (chartObj, tableObj) {
            document.getElementById("typeSelector").addEventListener("click", (function (chartObj,tableObj) {
                var state = "bar";
                return function(e){
                    console.log(e.target.id);
                    if(state !== e.target.id) {
                        // e.target.setAttribute("class",  e.target.getAttribute("class")+ " red-text text-lighten-2");
                        chartCtrl.reload(tableObj.getData(), e.target.id);
                        state = e.target.id;

                    }
                }
            })(chartObj,tableObj));
            return function (change, src) {
                console.log(change, src);
                var col = change[0][1];
                var row = change[0][0];
                console.log(col, row);
                if (change.length === 1) {
                    if (change && !isLabel(col, row)) {
                        console.log(tableObj);
                        chartObj.data.datasets[row - 1].data[col - 1] = change[0][3];
                        chartObj.update();
                    }
                    if (isLabel(col, row)) {
                        chartObj = chartCtrl.reload(tableObj.getData());
                    }
                }
                else if (change.length > 1) {
                    chartObj = chartCtrl.reload(tableObj.getData());
                }
            }
        },
        tableRemove: function (chartObj, tableObj) {
            return function () {
                chartObj = chartCtrl.reload(tableObj.getData());

            }
        }
    };

});