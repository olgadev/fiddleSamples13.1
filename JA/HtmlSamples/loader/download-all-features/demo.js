$(function () {
$.ig.loader({
            scriptPath: "http://cdn-na.infragistics.com/jquery/20131/latest/js/",
            cssPath: "http://cdn-na.infragistics.com/jquery/20131/latest/css/",
            resources: "igHierarchicalGrid.*"
        });

        $.ig.loader(function () {
            $("#grid").igHierarchicalGrid({
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 4
                    },
                    {
                        name: "Sorting",
                        type: "local"
                    },
                    {
                        name: "Filtering",
                        type: "local"
                    },
                    {
                        name: "Updating",
                        enableDataDirtyException: false
                    },
                    // new featrues
                    {
                        name: "Resizing",
                        allowDoubleClickToResize: true
                    },
                    {
                        name: "Tooltips",
                        visibility: "always"
                    },
                    {
                        name: "Hiding"
                    },
                    {
                        name: "Summaries"
                    }
                ],

                initialDataBindDepth: -1,
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",

                autoGenerateColumns: false,
                primaryKey: "EmployeeID",
                columns: [
                    { key: "EmployeeID", headerText: "$$(ID)", dataType: "number", width: "100px" },
                    { key: "LastName", headerText: "$$(last_name)", dataType: "string", width: "150px" },
                    { key: "FirstName", headerText: "$$(first_name)", dataType: "string", width: "150px" },
                    { key: "HomePhone", headerText: "$$(home_phone)", dataType: "string", width: "150px" }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "$$(ID)", dataType: "number", width: "50px" },
                            { key: "CustomerID", headerText: "$$(customer_id)", dataType: "string", width: "60px" },
                            { key: "Freight", headerText: "$$(Freight)", dataType: "string", width: "70px" },
                            { key: "ShipName", headerText: "$$(ship_name)", dataType: "string", width: "100px" },
                            { key: "ShipAddress", headerText: "$$(ship_address)", dataType: "string", width: "90px" },
                            { key: "ShipCity", headerText: "$$(ship_city)", dataType: "string", width: "90px" },
                            { key: "ShipCountry", headerText: "$$(ship_country)", dataType: "string", width: "80px" }
                        ],
                        features: [
                            {
                                name: "Paging",
                                type: "local",
                                pageSize: 10
                            },
                            {
                                name: "Sorting",
                                type: "local"
                            },
                            {
                                name: "Filtering",
                                type: "local"
                            },
                            {
                                name: "Updating"
                            },
                            // new featrues
                            {
                                name: "Resizing",
                                allowDoubleClickToResize: true
                            },
                            {
                                name: "Tooltips",
                                visibility: "always"
                            },
                            {
                                name: "Hiding"
                            },
                            {
                                name: "Summaries"
                            }
                        ]
                    }
                ]
            });
        });});