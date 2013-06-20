$(function () {
// the JavaScript function used for the formula property
        function CalculateFreightExpence(data, grid) {
            return 2.95 * data["Freight"];
        }

        $(function () {

            /*----------------- Event Examples -------------------------*/

            $("#grid3").on("iggriddatabound", function (event, ui) {
                var i, grid = ui.owner,
                     ds = grid.dataSource,
                     data = ds.data(),
                     dataLength = data.length;

                for (i = 0; i < dataLength; i++) {
                    if (data[i]["Country"] === "USA") {
                        data[i]["IsUSA"] = true;
                    }
                    else {
                        data[i]["IsUSA"] = false;
                    }
                }
            });

            /*----------------- Method & Option Examples -------------------------*/

            $("#setUnboundValues").click(function (e) {
                var i, freightVals = [], boolVals = [];
                for (i = 0; i < 20; i++) {
                    freightVals.push(Math.floor(Math.random() * 100));
                    boolVals.push(true);
                }

                $('#grid3').igGrid('setUnboundValues', 'IsUSA', boolVals);

                // get all expanded child grids
                var childGrids = $("#grid3").igHierarchicalGrid("allChildren");
                $(childGrids).each(function (index, grid) {
                    $(grid).igGrid("setUnboundValues", 'FreightExpence', freightVals);
                });
                return;
            });

            /*----------------- Instantiation -------------------------*/

            $("#grid3").igHierarchicalGrid({
                features: [
                    {
                        name: "MultiColumnHeaders",
                        inherit: true
                    },
                    {
                        name: 'Hiding'
                    },
                    {
                        name: "GroupBy",
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: 'Resizing',
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: "Paging",
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: "Sorting",
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: "Summaries",
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: 'Filtering',
                        mode: 'advanced',
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: "Selection",
                        inherit: true
                    },
                    {
                        name: "RowSelectors",
                        inherit: true
                    },
                    {
                        name: 'Summaries',
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: "Updating",
                        enableAddRow: true,
                        inherit: true,
                        editMode: "row",
                        enableDeleteRow: true,
                        columnSettings:
                            [
                                {
                                    columnKey: "EmployeeID",
                                    readOnly: true
                                },
                                {
                                    columnKey: "UnboundColumn1",
                                    readOnly: true
                                }
                            ]
                    }
                ],
                width: "1000px",
                height: "800px",
                initialDataBindDepth: -1,
                loadOnDemand: false,
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                autoGenerateColumns: false,
                primaryKey: "EmployeeID",
                columns: [
                    { key: "EmployeeID", headerText: "$$(Northwind_Employees_EmployeeID)", dataType: "number", width: "100px" },
                    { key: "LastName", headerText: "$$(Northwind_Employees_LastName)", dataType: "string", width: "100px" },
                    { key: "FirstName", headerText: "$$(Northwind_Employees_FirstName)", dataType: "string", width: "100px" },
                    { key: "Title", headerText: "$$(Northwind_Employees_Title)", dataType: "string", width: "150px" },
                    { key: "Address", headerText: "$$(Northwind_Employees_Address)", dataType: "string", width: "150px" },
                    { key: "City", headerText: "$$(Northwind_Employees_City)", dataType: "string", width: "100px" },
                    { key: "PostalCode", headerText: "$$(Northwind_Employees_PostCode)", dataType: "string", width: "100px" },
                    { key: "IsUSA", headerText: "$$(Northwind_Orders_USA)", unbound: true, dataType: "bool", width: "50px", format: "checkbox" },
                    { key: "Region", headerText: "$$(Northwind_Employees_Region)", dataType: "string", width: "80px" },
                    { key: "Country", headerText: "$$(Northwind_Employees_Country)", dataType: "string", width: "100px" },
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        height: "600px",
                        columns: [
                            { key: "OrderID", headerText: "$$(Northwind_Orders_OrderID)", dataType: "number", width: "100px" },
                            { key: "CustomerID", headerText: "$$(Northwind_Orders_CustomerID)", dataType: "string", width: "100px" },
                            { key: "Freight", headerText: "$$(Northwind_Orders_Freight)", dataType: "string", width: "100px" },
                            { key: "FreightExpence", headerText: "$$(Northwind_Orders_FreightExpense)", unbound: true, dataType: "number", width: "100px", formula: "CalculateFreightExpence" },
                            { key: "ShipName", headerText: "$$(Northwind_Orders_ShipName)", dataType: "string", width: "200px" },
                            { key: "ShipAddress", headerText: "$$(Northwind_Orders_ShipAddress)", dataType: "string", width: "200px" },
                            { key: "ShipCity", headerText: "$$(Northwind_Orders_ShipCity)", dataType: "string", width: "100px" },
                        ],
                        features: [
                            {
                                name: "MultiColumnHeaders"
                            },
                            {
                                name: "Paging",
                                type: 'local',
                                pageSize: 10
                            },
                            {
                                name: "Updating",
                                enableAddRow: true,
                                editMode: "row",
                                enableDeleteRow: true,
                                columnSettings:
                                [
                                    {
                                        columnKey: "OrderID",
                                        readOnly: true
                                    },
                                    {
                                        columnKey: "UnboundColumnChild",
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });});