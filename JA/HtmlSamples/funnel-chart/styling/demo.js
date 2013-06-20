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
            //  Create a regular funnel chart: It is styled according to the CSS in the infragistics.theme.css
            //  The styles are redefined later in the <style> node of the page
            $("#chartCSS").igFunnelChart({
                width: "100%",
                height: "500px",
                dataSource: data,
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible"
            });

            //  Create a funnel chart with brushes and outlines options set with specific colors
            $("#chartOptions").igFunnelChart({
                width: "100%",
                height: "500px",
                dataSource: data,
                brushes: ["#7DC3D9", "#3e5354", "#9EB5B4", "#5DD1C6", "#AFD1CE", "#2B768E"],
                outlines: [ "#3189A6", "#212D2E", "#5C7877", "#2FA498", "#487D78", "#163F4B" ],
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible"
            });
        });});