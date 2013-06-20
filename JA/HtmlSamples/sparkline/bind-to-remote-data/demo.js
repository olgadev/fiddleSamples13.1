$(function () {

            $("#sparkline").igSparkline({
            	dataSource: "http://labs.infragistics.com/igniteui/api/invoices?callback=?",
                responseDataKey: "d.results",
                height: "100px",
                width: "300px",
                valueMemberPath: 'ExtendedPrice',
                labelMemberPath: 'OrderDate'
            });

        });