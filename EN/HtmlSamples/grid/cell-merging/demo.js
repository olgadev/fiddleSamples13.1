$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/

            $("input[name='cellMergingInitialState']").click(function () {
                $("#grid").igGrid("destroy");
                createGrid();
            });

            /*----------------- Event Examples -------------------------*/

            $("#grid").on("iggridcellmergingcellsmerged", function (evt, ui) {
                var message = "$$(cell_merging_logging_caption)";
                apiViewer.log(message);
                message = "$$(cell_merging_row_index)" + ui.rowIndex;
                apiViewer.log(message);
                message = "$$(cell_merging_row_key)" + ui.rowKey;
                apiViewer.log(message);
                message = "$$(cell_merging_cell_value)" + ui.value;
                apiViewer.log(message);
                message = "$$(cell_merging_cell_count)" + ui.count;
                apiViewer.log(message);
                apiViewer.log('<br/>');
                return;
            });

            /*----------------- Instantiation -------------------------*/
            createGrid();

        });

        function createGrid() {
            var initialState = $('input:radio[name=cellMergingInitialState]:checked').val();

            $("#grid").igGrid({
                height: "100%",
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
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
                        initialState: initialState
                    },
                    {
                        name: 'Sorting',
                        type: 'local',
                        applySortedColumnCss: false
                    }
                ]
            });
        }