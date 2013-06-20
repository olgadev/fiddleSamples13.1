$(function () {
            var currData, currDataSource, doGeneration;

            doGeneration = function () {
                var num = 20, data = [], curr1 = 10, curr2 = 8;
                for (var i = 0; i < num; i++) {
                    if (Math.random() > .5) {
                        curr1 += Math.random() * 2.0;
                    } else {
                        curr1 -= Math.random() * 2.0;
                    }
                    if (Math.random() > .5) {
                        curr2 += Math.random() * 2.0;
                    } else {
                        curr2 -= Math.random() * 2.0;
                    }

                    var val1 = Math.round(curr1 * 1000.0) / 1000.0;
                    var val2 = Math.round(curr2 * 1000.0) / 1000.0;

                    data[i] = { Label: i.toString(), Value1: val1, Value2: val2 };
                }
                currData = data;
                currDataSource = new $.ig.DataSource({ dataSource: currData });
            }

            doGeneration();

            $("#chart").igDataChart({
                width: "700px",
                height: "400px",
                dataSource: currDataSource,
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Label"
                },
                {
                    name: "yAxis",
                    type: "numericY"
                }],
                series: [{
                    name: "series1",
                    type: "line",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value1",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate1",
                    thickness: 5
                }, {
                    name: "series2",
                    type: "line",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value2",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate2",
                    thickness: 5
                }],
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate"
            });

            $("#seriesType").change(function (e) {
                var thickness = 5,
                    seriesType = $(this).val();

                if (seriesType == "area" ||
                    seriesType == "splineArea" ||
                    seriesType == "column" ||
                    seriesType == "waterfall" ||
                    seriesType == "stepArea") {
                    thickness = 1;
                }

                $("#chart").igDataChart("option", "series", [{ name: "series1", remove: true }]);
                $("#chart").igDataChart("option", "series", [{ name: "series2", remove: true }]);
                $("#chart").igDataChart("option", "series", [{
                    name: "series1",
                    type: $(this).val(),
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value1",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate1",
                    thickness: thickness
                }]);
                $("#chart").igDataChart("option", "series", [{
                    name: "series2",
                    type: $(this).val(),
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value2",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTemplate2",
                    thickness: thickness
                }]);
            });
        });