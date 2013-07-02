$(function () {
            var data = [
                { "Label": "$$(Chart_lbl_administration)", "Budget": 60, "Spending": 20 },
                { "Label": "$$(Chart_lbl_sales)", "Budget": 40, "Spending": 80 },
                { "Label": "$$(Chart_lbl_it)", "Budget": 60, "Spending": 20 },
                { "Label": "$$(Chart_lbl_marketing)", "Budget": 40, "Spending": 80 },
                { "Label": "$$(Chart_lbl_development)", "Budget": 60, "Spending": 20 },
                { "Label": "$$(Chart_lbl_support)", "Budget": 20, "Spending": 60 }
            ];

            function createChart(selector, seriesType, data) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: data,
                    axes: [{
                        name: "angleAxis",
                        type: "categoryAngle",
                        label: "Label",
                        interval: 1
                    }, {
                        name: "radiusAxis",
                        type: "numericRadius",
                        innerRadiusExtentScale: .1,
                        maximumValue: 100,
                        minimumValue: 0,
                        interval: 25,
                        radiusExtentScale: .6
                    }],
                    series: [{
                        name: "series1",
                        title: '$$(Chart_lbl_budget)',
                        type: seriesType,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "Budget",
                        thickness: 5,
                        markerType: "circle"
                    }, {
                        name: "series2",
                        title: '$$(Chart_lbl_spending)',
                        type: seriesType,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "Spending",
                        thickness: 5,
                        markerType: "circle"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            createChart("#chartRadialLine", "radialLine", data);
            createChart("#chartRadialColumn", "radialColumn", data);
            createChart("#chartRadialPie", "radialPie", data);
            createChart("#chartRadialArea", "radialArea", data);
        });