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
                    data[i] = { Label: i.toString(), Index: i, Value1: val1 };
                }
                return new $.ig.DataSource({ dataSource: data });
            }

            function createChart(selector, seriesType, dataSource) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: dataSource,
                    axes: [{
                        name: "angleAxis",
                        type: "numericAngle"
                    },
                    {
                        name: "radiusAxis",
                        type: "numericRadius"
                    }],
                    series: [{
                        name: "series1",
                        title: "$$(Chart_lbl_seriesTitle)",
                        type: seriesType,
                        angleAxis: "angleAxis",
                        radiusAxis: "radiusAxis",
                        angleMemberPath: "Index",
                        radiusMemberPath: "Value1"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            var data = generateData();
            createChart("#chartScatter", "polarScatter", data);
            createChart("#chartScatterLine", "polarLine", data);
            createChart("#chartScatterArea", "polarArea", data);
            createChart("#chartPolarSpline", "polarSpline", data);
            createChart("#chartPolarSplineArea", "polarSplineArea", data);
        });