$(function () {
var data = [
            { Id: 0, Budget: 30, Department: "$$(Chart_lbl_administration)" },
            { Id: 1, Budget: 50, Department: "$$(Chart_lbl_sales)" },
            { Id: 2, Budget: 60, Department: "$$(Chart_lbl_it)" },
            { Id: 3, Budget: 50, Department: "$$(Chart_lbl_marketing)" },
            { Id: 4, Budget: 100, Department: "$$(Chart_lbl_development)" },
            { Id: 5, Budget: 20, Department: "$$(Chart_lbl_support)" }
        ];

        $(function () {
            //  Create a basic funnel chart with regular layout
            $("#chartNormal").igFunnelChart({
                width: "100%",
                height: "450px",
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible",
                tooltipTemplate: "<span>$$(ID):${Id}<br>$$(Dept):${Department}</span>"
            });

            //  Create a funnel chart with Bezier curved shape. You can control the exact shape of 
            //  the Bezier curve By varying the upperBezierControlPoint & lowerBezierControlPoint.
            $("#chartBezier").igFunnelChart({
                width: "100%",
                height: "450px",
                leftMargin: 20,
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible",
                tooltipTemplate: "<span>$$(ID):${Id}<br>$$(Dept):${Department}</span>",
                useBezierCurve: true,
                bezierPoints: "0.1 0.1 0.7 1"
            });
        });});