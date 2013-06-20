$(function () {
$.ig.loader({
            scriptPath: "http://cdn-na.infragistics.com/jquery/20131/latest/js/",
            cssPath: "http://cdn-na.infragistics.com/jquery/20131/latest/css/",
            resources: "igSparkline"
        });

        $.ig.loader(function () {

            $("#sparkline").igSparkline({
                dataSource: northwindInvoices,
                height: "100px",
                width: "300px",
                valueMemberPath: 'ExtendedPrice',
                labelMemberPath: 'OrderDate'
            });

        });});