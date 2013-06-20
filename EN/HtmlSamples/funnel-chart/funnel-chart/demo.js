$(function () {
var data = [
            { Budget: 30, Department: "$$(Chart_lbl_administration)" },
            { Budget: 50, Department: "$$(Chart_lbl_sales)" },
            { Budget: 60, Department: "$$(Chart_lbl_it)" },
            { Budget: 50, Department: "$$(Chart_lbl_marketing)" },
            { Budget: 100, Department: "$$(Chart_lbl_development)" },
            { Budget: 20, Department: "$$(Chart_lbl_support)" }
        ];

        $(function () {
            //  Create a basic funnel chart
            $("#chartNormal").igFunnelChart({
                width: "100%",  //"325px",
                height: "450px",
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible"
            });

            //  Create a funnel chart with weighted size slices
            $("#chartWeighted").igFunnelChart({
                width: "100%",  //"325px",
                height: "450px",
                leftMargin: 20,
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible",
                funnelSliceDisplay: "weighted"
            });

            //  Create an inverted funnel chart
            $("#chartInverted").igFunnelChart({
                width: "100%",  //"325px",
                height: "450px",
                leftMargin: 20,
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible",
                isInverted: true
            });
        });});