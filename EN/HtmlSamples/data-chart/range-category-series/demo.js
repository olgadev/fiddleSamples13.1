$(function () {
            function generateData() {
                var num = 10, data = [], curr = 10;
                for (var i = 0; i < num; i++) {
                    if (Math.random() > .5) {
                        curr += Math.random() * 2.0;
                    } else {
                        curr -= Math.random() * 2.0;
                    }
                    var val1 = Math.round(curr * 1000.0) / 1000.0;
                    var val2 = Math.round((curr + Math.random() * 5.0) * 1000.0) / 1000.0;
                    data[i] = { Label: i.toString(), Value1: val1, Value2: val2 };
                }

                return new $.ig.DataSource({ dataSource: data });
            }

            function createChart(selector, seriesType, dataSource) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: dataSource,
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
                        title: "$$(Chart_lbl_testSeries)",
                        type: seriesType,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        lowMemberPath: "Value1",
                        highMemberPath: "Value2",
                        showTooltip: true,
                        tooltipTemplate: "tooltipTemplate"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            var dataSource = generateData();
            createChart("#chartRangeArea", "rangeArea", dataSource);
            createChart("#chartRangeColumn", "rangeColumn", dataSource);
        });