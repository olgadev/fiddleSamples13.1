$(function () {
            function generateData() {
                var num = 30, data = [], curr = 10;
                for (var i = 0; i < num; i++) {
                    if (Math.random() > .5) {
                        curr += Math.random() * 2.0;
                    } else {
                        curr -= Math.random() * 2.0;
                    }
                    var rad = Math.random() * 100.0;
                    data[i] = {
                        Label: i.toString(),
                        Index: i,
                        Value1: Math.round(curr * 1000.0) / 1000.0,
                        Value2: rad,
                        Value3: (rad / 100.0) * 20
                    };
                }

                return new $.ig.DataSource({ dataSource: data });
            }

            function createScatterChart(selector, seriesType, dataSource) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: dataSource,
                    axes: [{
                        name: "xAxis",
                        type: "numericX"
                    }, {
                        name: "yAxis",
                        type: "numericY"
                    }],
                    series: [{
                        name: "scatter",
                        type: seriesType,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Index",
                        yMemberPath: "Value1"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function createBubbleChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: dataSource,
                    axes: [{
                        name: "xAxis",
                        type: "numericX"
                    }, {
                        name: "yAxis",
                        type: "numericY"
                    }],
                    series: [{
                        name: "bubble",
                        type: "bubble",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Index",
                        yMemberPath: "Value1",
                        radiusMemberPath: "Value2",
                        fillMemberPath: "Value3",
                        labelMemberPath: "Value2",
                        markerType: "circle",
                        fillScale: {
                            type: "value",
                            brushes: ["red", "blue"],
                            minimumValue: 0,
                            maximumValue: 20
                        }
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            var dataSource = generateData();
            createScatterChart("#chartScatter", "scatter", dataSource);
            createScatterChart("#chartScatterLine", "scatterLine", dataSource);
            createBubbleChart("#chartBubble", dataSource);
            createScatterChart("#chartScatterSpline", "scatterSpline", dataSource);
        });