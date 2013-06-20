$(function () {

            $("#lineSparkline").igSparkline({
                dataSource: data,
                displayType: "line",
                height: "150px",
                width: "400px",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date'
            });

            $("#areaSparkline").igSparkline({
                dataSource: data,
                displayType: "area",
                height: "150px",
                width: "400px",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date'
            });

            $("#columnSparkline").igSparkline({
                dataSource: data,
                displayType: "column",
                height: "150px",
                width: "400px",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date'
            });

            $("#winLossSparkline").igSparkline({
                dataSource: data,
                displayType: "winLoss",
                height: "150px",
                width: "400px",
                valueMemberPath: 'Change',
                labelMemberPath: 'Date'
            });

        });