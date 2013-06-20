$(function () {
            var currData, currDataSource, doGeneration;

            doGeneration = function () {
                var num = 10, data = [];
                for (var i = 0; i < num; i++) {
                    var val1 = Math.round(Math.random() * 100);
                    var val2 = Math.round(Math.random() * 100);
                    var val3 = Math.round(Math.random() * 100);
                    data[i] = { Label: i.toString(), Value1: val1, Value2: val2, Value3: val3 };
                }
                currData = data;
                currDataSource = new $.ig.DataSource({ dataSource: currData });
            }

            doGeneration();

            $("#columnChart").igDataChart({
                width: "98%",
                height: "400px",
                dataSource: currDataSource,
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Label"
                }, {
                    name: "yAxis",
                    type: "numericY"
                }],
                series: [{
                    name: "series1",
                    title: "BMW",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value1"
                }, {
                    name: "series2",
                    title: "Audi",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value2"
                }, {
                    name: "series3",
                    title: "Mazda",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value3"
                }]
            });

            $("#barChart").igDataChart({
                width: "98%",
                height: "400px",
                dataSource: currDataSource,
                legend: { element: "barLegend" },
                axes: [{
                    name: "xAxis",
                    type: "numericX"
                }, {
                    name: "yAxis",
                    type: "categoryY",
                    label: "Label"
                }],
                series: [{
                    name: "series1",
                    title: "BMW",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value1"
                }, {
                    name: "series2",
                    title: "Audi",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value2"
                }, {
                    name: "series3",
                    title: "Mazda",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value3"
                }]
            });
        });