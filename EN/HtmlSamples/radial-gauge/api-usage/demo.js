$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/
            
            // process events of buttons

            $("#selectValue").mouseover(function () {
                $("#selectValue").html('');
                var minimumValue = $("#radialgauge").igRadialGauge("option", "minimumValue");
                var maximumValue = $("#radialgauge").igRadialGauge("option", "maximumValue");
                var options = "<option></option>";
                
                var startValue = minimumValue <= maximumValue ? minimumValue : maximumValue;
                var endValue = minimumValue > maximumValue ? minimumValue : maximumValue;

                for (var i = startValue; i <= endValue; i++)
                    options += "<option>" + i + "</option>";

                if (Math.abs(maximumValue - minimumValue) > 0)
                    $(options).appendTo($("#selectValue"));
            });

            $("#selectValue").change(function (e) {
                $("#needleValue").val($(this).val());
            });

            $("#changeNeedleValue").on({
                click: function (e) {
                    var needleValue = $("#needleValue").val();

                    var minimumValue = $("#radialgauge").igRadialGauge("option", "minimumValue");
                    var maximumValue = $("#radialgauge").igRadialGauge("option", "maximumValue");

                    if((needleValue >= minimumValue && needleValue <= maximumValue)
                        || (needleValue <= minimumValue && needleValue >= maximumValue))
                        $("#radialgauge").igRadialGauge("option", "value", needleValue);
                }
            });
                  
            var prevValue = null;
            $("#getNeedleValue").on({
                click: function (e) {
                    var needleValue = $("#radialgauge").igRadialGauge("option", "value");
                    if (prevValue == null || prevValue != needleValue) {
                        apiViewer.log("$$(RadialGauge_CurrentNeedleValue): " + needleValue);
                        prevValue = needleValue;
                    }
                }
            });
                      
            /*----------------- Instantiation -------------------------*/

            $("#radialgauge").igRadialGauge({
                height: "500px",
                width: "500px",
                interval: 2,
                labelInterval: 1,
                transitionDuration: 1000,
                value: 0,
                centerX: 0.5,
                centerY: 0.5,
                minimumValue: 0,
                maximumValue: 10,
                backingStrokeThickness: 1,
                scaleStartAngle: 120,
                scaleEndAngle: 55,
                scaleStartExtent: 0.5,
                scaleEndExtent: 0.79,
                scaleOversweep: 0,                
                tickStartExtent: 0.62,
                tickEndExtent: 0.69,
                minorTickStartExtent: 0.65,
                minorTickEndExtent: 0.69,
                labelExtent: 0.75,
                fontBrush: "#333",
                needleShape: "triangle",
                needleStartExtent: -0.2,
                needleEndExtent: 0.7,
                needlePivotShape: "none",                
                scaleSweepDirection: "clockwise"
            });

            function isAndroid() {
                return navigator.userAgent.match(/Android/i) ? true : false;
            }

            window.onload = function () {
                if (!isAndroid())
                    document.getElementById("selectValue").style.border = "none";
            };
        });