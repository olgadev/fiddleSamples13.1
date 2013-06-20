$(function () {
var currData, currDataSource, doGeneration, startTime = null;

	    function doGeneration() {
	        var num = 1000000, data = [], curr = 10;

	        for (var i = 0; i < num; i++) {
	            if (Math.random() > .5) {
	                curr += Math.random() * 2.0;
	            } else {
	                curr -= Math.random() * 2.0;
	            }
	            var val1 = Math.round(curr * 1000.0) / 1000.0;
	            data[i] = { Label: i.toString(), Value: val1 };
	        }
	        currData = data;
	    }

	    function assignData() {
	        startTime = new Date().getTime();
	        $("#chart").igDataChart({
	            dataSource: currData
	        });
	    };

	    $(function () {
	        $("#chart").igDataChart({
	            width: "500px",
	            height: "500px",
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
	                title: "$$(Chart_lbl_testSeries)",
	                type: "line",
	                xAxis: "xAxis",
	                yAxis: "yAxis",
	                valueMemberPath: "Value",
	                showTooltip: true,
	                tooltipTemplate: "tooltipTemplate"
	            }],
	            horizontalZoomable: true,
	            verticalZoomable: true,
	            windowResponse: "immediate"
	        });

	        $(document).on("igdatachartrefreshcompleted", "#chart", function () {
	            if (startTime) {
	                var time = new Date().getTime() - startTime;
	                $("#timeText").text(time.toString() + "ms");
	                startTime = null;
	            }
	        });

	        doGeneration();
	        assignData();
	        $(".message").hide();
	    });});