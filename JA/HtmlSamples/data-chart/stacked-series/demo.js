$(function () {

            var getData = function (num) {
                var data = [];
                for (var i = 0; i < num; i++) {
                    var val1 = Math.round(Math.random() * 100);
                    var val2 = Math.round(Math.random() * 100);
                    var val3 = Math.round(Math.random() * 100);
                    data[i] = { Year: "200" + (i + 1), BMW: val1, Audi: val2, Mazda: val3 };
                }
                return data;
            };

            var data = getData(9);

            function generateCategoryYChart(chartType) {

                var selector = "#" + chartType;

                $(selector).igDataChart({
                    dataSource: data,
                    height: "400px",
                    width: "400px",
                    axes: [{
                        name: "Year",
                        type: "categoryY",
                        label: "Year"
                    }, {
                        name: "Volume",
                        type: "numericX"
                    }],
                    series: [{
                        name: "parent",
                        type: chartType,
                        xAxis: "Volume",
                        yAxis: "Year",
                        series: [{
                            name: "BMW",
                            title: "BMW",
                            type: "stackedFragment",
                            showTooltip: true,
                            tooltipTemplate: "BMW",
                            valueMemberPath: "BMW"
                        }, {
                            name: "Audi",
                            title: "Audi",
                            type: "stackedFragment",
                            showTooltip: true,
                            tooltipTemplate: "Audi",
                            valueMemberPath: "Audi"
                        }, {
                            name: "Mazda",
                            title: "Mazda",
                            showTooltip: true,
                            tooltipTemplate: "Mazda",
                            type: "stackedFragment",
                            valueMemberPath: "Mazda"
                        }]
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function generateCategoryXChart(chartType) {

                var selector = "#" + chartType;

                $(selector).igDataChart({
                    dataSource: data,
                    height: "400px",
                    width: "400px",
                    axes: [{
                        name: "Year",
                        type: "categoryX",
                        label: "Year"
                    },
                    {
                        name: "Volume",
                        type: "numericY"
                    }],
                    series: [{
                        name: "parent",
                        xAxis: "Year",
                        yAxis: "Volume",
                        type: chartType,
                        series: [{
                            name: "BMW",
                            title: "BMW",
                            type: "stackedFragment",
                            showTooltip: true,
                            tooltipTemplate: "BMW",
                            valueMemberPath: "BMW"
                        }, {
                            name: "Audi",
                            title: "Audi",
                            type: "stackedFragment",
                            showTooltip: true,
                            tooltipTemplate: "Audi",
                            valueMemberPath: "Audi"
                        }, {
                            name: "Mazda",
                            title: "Mazda",
                            showTooltip: true,
                            tooltipTemplate: "Mazda",
                            type: "stackedFragment",
                            valueMemberPath: "Mazda"
                        }]
                    }]
                });
            };

            generateCategoryYChart("stackedBar");
            generateCategoryYChart("stacked100Bar");
            generateCategoryXChart("stackedArea");
            generateCategoryXChart("stackedColumn");
            generateCategoryXChart("stackedLine");
            generateCategoryXChart("stackedSpline");
            generateCategoryXChart("stackedSplineArea");
            generateCategoryXChart("stacked100Area");
            generateCategoryXChart("stacked100Column");
            generateCategoryXChart("stacked100Line");
            generateCategoryXChart("stacked100Spline");
            generateCategoryXChart("stacked100SplineArea");
        });