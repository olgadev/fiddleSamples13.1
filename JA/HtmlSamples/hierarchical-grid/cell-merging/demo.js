$(function () {
            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'           
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/

            $("input[name='cellMergingInitialState']").click(function () {
                $("#grid1").igHierarchicalGrid("destroy");
                createGrid();
            });

            /*----------------- Event Examples -------------------------*/

            $(document).on("iggridcellmergingcellsmerged", "#grid1", function (evt, ui) {
                var message = "$$(CellMerging_Logging_Caption)";
                apiViewer.log(message);
                message = "$$(CellMerging_Logging_RowIndex)" + ui.rowIndex;
                apiViewer.log(message);
                message = "$$(CellMerging_Logging_RowKey)" + ui.rowKey;
                apiViewer.log(message);
                message = "$$(CellMerging_Logging_CellValue)" + ui.value;
                apiViewer.log(message);
                message = "$$(CellMerging_Logging_CellCount)" + ui.count;
                apiViewer.log(message);
                apiViewer.log('<br/>');
                return;
            });

            /*----------------- Instantiation -------------------------*/
            createGrid();
        });
       

        function createGrid() {
            var initialState = $('input:radio[name=cellMergingInitialState]:checked').val();
            $("#grid1").remove();
            $("<table id='grid1'></table>").appendTo("#gridContainer").igHierarchicalGrid({
                height: "100%",
                width: "100%",
                autoCommit: true,
                autoGenerateColumns: false,
                dataSource: northwind,
                initialDataBindDepth: -1,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                   { key: "EmployeeID", headerText: "$$(Northwind_Employees_EmployeeID)", dataType: "number", width: "100px" },
                   { key: "LastName", headerText: "$$(Northwind_Employees_FirstName)", dataType: "string", width: "100px" },
                   { key: "FirstName", headerText: "$$(Northwind_Employees_LastName)", dataType: "string", width: "100px" },
                   { key: "Title", headerText: "$$(Northwind_Employees_Title)", dataType: "string", width: "150px" },
                   { key: "Address", headerText: "$$(Northwind_Employees_Address)", dataType: "string", width: "150px" },
                   { key: "City", headerText: "$$(Northwind_Employees_City)", dataType: "string", width: "100px" },
                   { key: "Region", headerText: "$$(Northwind_Employees_Region)", dataType: "string", width: "80px" },
                   { key: "Country", headerText: "$$(Northwind_Employees_Country)", dataType: "string", width: "100px" }
                ],
                features: [
                    {
                        name: 'CellMerging',
                        inherit: true,
                        initialState: initialState
                    },
                    {
                        name: 'Sorting',
                        type: 'local',
                        inherit: true,
                        applySortedColumnCss: false
                    }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        autoCommit: true,
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "$$(Northwind_Orders_OrderID)", dataType: "number", width: "100px" },
                            { key: "Freight", headerText: "$$(Northwind_Orders_Freight)", dataType: "string", width: "100px" },
                            { key: "ShipName", headerText: "$$(Northwind_Orders_ShipName)", dataType: "string", width: "200px" },
                            { key: "ShipAddress", headerText: "$$(Northwind_Orders_ShipAddress)", dataType: "string", width: "200px" },
                            { key: "ShipCity", headerText: "$$(Northwind_Orders_ShipCity)", dataType: "string", width: "100px" },
                            { key: "ShipCountry", headerText: "$$(Northwind_Orders_ShipCountry)", dataType: "string", width: "100px" }
                        ],
                        features: [
                            {
                                name: "Paging",
                                pageSize: 10
                            }
                        ]
                    }
                ]
            });
        }