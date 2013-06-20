$(function () {

            $("#grid").on("iggridrowsrendered", function (evt, ui) {

                //get data collection
                var dataSource = ui.owner.dataSource;

                $(".order-sparkline").each(function(i) {                    

                    $(this).igSparkline({
                        dataSource: dataSource.findRecordByKey(
                            $(this).data("id")).Orders,
                        height: "24px",
                        width: "100%",
                        valueMemberPath: 'TotalPrice',
                        labelMemberPath: 'OrderDate'
                    })
                    .css("background-color", "transparent");

                });
            });

            $("#grid").igGrid({
                dataSource: nwCustomersWithOrders,
                autoGenerateColumns: false,
                primaryKey: "ID",
                rowTemplate: "<tr><td></td><td>${CompanyName}</td><td>${ContactName}</td>" +
                    "<td>${ContactTitle}</td><td><div data-id='${ID}' class='order-sparkline'></div></td></tr>",
                columns: [
                    { key: "ID", hidden: true },
                    { key: "CompanyName", headerText: "$$(Company_Name)" },
                    { key: "ContactName", headerText: "$$(Contact_Name)" },
                    { key: "ContactTitle", headerText: "$$(Contact_Title)" },
                    { key: "Orders", headerText: "$$(Order_History)" }
                ]
            });

        });