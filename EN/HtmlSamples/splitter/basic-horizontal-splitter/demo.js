$(function () {
            $("#splitter").igSplitter({ height: "700px", orientation: "horizontal", panels: [{ collapsible: false }, { size: 200, collapsed: true, collapsible: true}] });
            $("#mainGrid").igGrid({
                width: "100%",
                height: "100%",
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                columns: [{
                    headerText: "$$(id)",
                    key: "ID"
                }, {
                    headerText: "$$(companyName)",
                    key: "CompanyName"
                }, {
                    headerText: "$$(contactName)",
                    key: "ContactName"
                }, {
                    headerText: "$$(contactTitle)",
                    key: "ContactTitle"
                }],
                features: [{
                    name: "Selection",
                    mode: "row",
                    rowSelectionChanged: function (ui, args) {
                        $("#detailGrid").igGrid({
                            width: "100%",
                            height: "100%",
                            autoGenerateColumns: false,
                             columns: [{
                                 headerText: "$$(orderId)",
                                key: "OrderID"
                            }, {
                                headerText: "$$(customerId)",
                                key: "CustomerID"
                            }, {
                                headerText: "$$(shipName)",
                                key: "ShipName"
                            }],
                            dataSource: nwCustomersWithOrders[args.row.index].Orders || []
                        });
                        $("#splitter").igSplitter("expandAt", 1);
                    }
                }]
            });
        });