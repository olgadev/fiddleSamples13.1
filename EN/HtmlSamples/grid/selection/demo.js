$(function () {

            $("#rowSelectorColumnWidthEditor").igNumericEditor(
                 {
                     width: 60,
                     minValue: 0,
                     maxValue: 60,
                     nullText: "default"
                 });

            /*----------------- Method & Option Examples -------------------------*/

            $("#applyRowSelectors").click(function (e) {
                $("#rowSelectorsGrid").igGrid("destroy");
                createRowSelectorsGrid();
            });

            $("#applyCellSelection").click(function (e) {
                $("#cellSelectionGrid").igGrid("destroy");
                createCellSelectionGrid();
            });

            /*----------------- Instantiation -------------------------*/

            createCellSelectionGrid();
            createRowSelectorsGrid();
        });



        function createCellSelectionGrid() {
            var multipleSelection = $("#multipleCellSelection").is(":checked") ? true : false;
            var multipleCellSelectOnClick = $("#multipleCellSelectOnClick").is(":checked") ? true : false;
            var touchDragSelect = $("#touchDragSelect").is(":checked") ? true : false;

            $("#cellSelectionGrid").igGrid({
                height: "350px",
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "$$(Northwind_Employees_EmployeeID)", key: "ID", dataType: "number", width: "150px" },
                    { headerText: "$$(Northwind_Employees_Name)", key: "Name", dataType: "string", width: "150px" },
                    { headerText: "$$(Northwind_Employees_Title)", key: "Title", dataType: "string", width: "150px" },
                    { headerText: "$$(Northwind_Employees_Image)", key: "ImageUrl", dataType: "object", width: "110px", template: "<img width='100' height='85' src='${ImageUrl}'></img>" },
                    { headerText: "$$(Northwind_Employees_Phone)", key: "Phone", dataType: "string", width: "100px" }
                ],
                features: [
                    {
                        name: "Selection",
                        mode: "cell",
                        multipleSelection: multipleSelection,
                        touchDragSelect: touchDragSelect, // this is true by default
                        multipleCellSelectOnClick: multipleCellSelectOnClick
                    }
                ]
            });
        }

        function createRowSelectorsGrid() {
            var rowNumbering = $("#enableRowNumberingchkb").is(":checked") ? true : false;
            var enableCheckboxes = $("#enableCheckboxeschkb").is(":checked") ? true : false;
            var selectorWidth = $("#rowSelectorColumnWidthEditor").igNumericEditor("option", "value");
            selectorWidth = typeof (selectorWidth) === "number" ? selectorWidth : null;

            var selectionMode = $('#selectionMode').val();
            var multipleSelection = $("#multipleSelection").is(":checked") ? true : false;
  
            $("#rowSelectorsGrid").igGrid({
                height: "350px",
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "$$(Northwind_Employees_EmployeeID)", key: "ID", dataType: "number", width: "150px" },
                    { headerText: "$$(Northwind_Employees_Name)", key: "Name", dataType: "string", width: "150px" },
                    { headerText: "$$(Northwind_Employees_Title)", key: "Title", dataType: "string", width: "150px" },
                    { headerText: "$$(Northwind_Employees_Phone)", key: "Phone", dataType: "string", width: "100px" }
                ],
                features: [
                    {
                        name: "RowSelectors",
                        enableCheckBoxes: enableCheckboxes,
                        enableRowNumbering: rowNumbering,
                        rowSelectorColumnWidth: selectorWidth
                    },
                    {
                        name: "Selection",
                        mode: selectionMode,
                        multipleSelection: multipleSelection
                    }
                ]
            });
        }