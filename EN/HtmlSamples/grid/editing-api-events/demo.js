$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            var titles = ["Sales Representative", "Sales Manager", "Inside Sales Coordinator", "Vice President, Sales"];
            var countries = ["UK", "USA"];

            /*----------------- Method & Option Examples -------------------------*/

            // process events of checkboxes
            $("#enableDelete").on({
                change: function (e) {
                    $("#grid").igGridUpdating("option", "enableDeleteRow", $(this).is(":checked"));
                }
            });

            $("#enableAddRow").on({
                change: function (e) {
                    $("#grid").igGridUpdating("option", "enableAddRow", $(this).is(":checked"));
                }
            });

            $("#showButtons").on({
                change: function (e) {
                    $("#grid").igGridUpdating("option", "showDoneCancelButtons", $(this).is(":checked"));
                }
            });

            // process events of select options
            $("#editMode").on({
                change: function (e) {
                    var editMode = $(this).val();
                    $("#grid").igGridUpdating("option", "editMode", editMode);
                }
            });

            $("#startEditTriggers").on({
                change: function (e) {
                    var startEditTriggers = $(this).val();
                    $("#grid").igGridUpdating("option", "startEditTriggers", startEditTriggers);
                }
            });

            // process events of buttons

            $("#deleteRow").on({
                click: function (e) {
                    var rowIndex = $("#rowSelect").igNumericEditor("option", "value"),
                        tr = $("#grid").igGrid("rowAt", parseInt(rowIndex));
                    if (!tr) return;

                    $("#grid").igGridUpdating("deleteRow", rowIndex, tr);
                }
            });

            $("#addRow").bind({
                click: function (e) {
                    var rowObj = {
                        "EmployeeID": $("#employeeID").val(),
                        "FirstName": $("#firstName").val(),
                        "LastName": $("#lastName").val(),
                        "Title": $("#title").val(),
                        "BirthDate": $("#birthDate").val(),
                        "PostalCode": $("#postCode").val(),
                        "Country": $("#country").val()
                    };

                    $("#grid").igGridUpdating("addRow", rowObj);
                }
            });

            /*----------------- Event Examples -------------------------*/

            $("#grid").on("iggridupdatingrowdeleting", function (evt, ui) {
                var message = "iggridupdatingrowdeleting";
                apiViewer.log(message);
            });

            $("#grid").on("iggridupdatingrowadding", function (evt, ui) {
                var message = "iggridupdatingrowadding";
                apiViewer.log(message);
            });

            $("#grid").on("iggridupdatingeditcellending", function (evt, ui) {
                var message = "iggridupdatingeditcellending";
                apiViewer.log(message);
            });

            $("#grid").on("iggridupdatingeditrowstarting", function (evt, ui) {
                var message = "iggridupdatingeditrowstarting";
                apiViewer.log(message);
            });

            $("#grid").on("iggridupdatingeditrowending", function (evt, ui) {
                var message = "iggridupdatingeditrowending";
                apiViewer.log(message);
            });

            /*----------------- Instantiation -------------------------*/
            $("#grid").igGrid({
                virtualization: false,
                autoGenerateColumns: false,
                renderCheckboxes: true,
                primaryKey: "EmployeeID",
                columns: [{
                    // note: if primaryKey is set and data in primary column contains numbers,
                    // then the dataType: "number" is required, otherwise, dataSource may misbehave
                    headerText: "$$(table_lbl_employeeID)", key: "EmployeeID", width: "100px", dataType: "number"
                }, {
                    headerText: "$$(table_lbl_firstName)", key: "FirstName", width: "130px"
                }, {
                    headerText: "$$(table_lbl_lastName)", key: "LastName", width: "100px"
                }, {
                    headerText: "$$(table_lbl_title)", key: "Title", width: "150px"
                }, {
                    headerText: "$$(table_lbl_birthDate)", key: "BirthDate", width: "120px", dataType: "date"
                }, {
                    headerText: "$$(table_lbl_postCode)", key: "PostalCode", width: "150px", dataType: "number"
                }, {
                    headerText: "$$(table_lbl_country)", key: "Country", width: "150px", dataType: "string"
                }
                ],
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                height: "500px",
                tabIndex: 1,
                features: [{
                    name: "Selection",
                    mode: "row"
                }, {
                    name: "Updating",
                    enableAddRow: true,
                    editMode: "row",
                    enableDeleteRow: true,
                    showReadonlyEditors: false,
                    enableDataDirtyException: false,
                    columnSettings: [{
                        columnKey: "EmployeeID",
                        readOnly: true
                    }, {
                        columnKey: "Title",
                        editorType: "text"
                    }, {
                        columnKey: "Country",
                        editorType: "text"
                    },
                    {
                        columnKey: "BirthDate",
                        editorType: "datepicker",
                        validation: true,
                        editorOptions: { minValue: new Date(1955, 1, 19), maxValue: new Date(), required: true }
                    }]
                }]
            });

            // editors initialization

            $("#rowSelect").igNumericEditor({
                dataMode: "sbyte",
                button: "spin",
                value: 0,
                minValue: 0,
                maxValue: 29,
                width: 150
            });


            $("#employeeID").igEditor({
                width: 100,
                type: "numeric",
                value: $("#grid").data("igGrid").element.find("tr").length + 1,
                disabled: true
            });

            $("#birthDate").igDatePicker({
                width: 120,
                minValue: new Date(2009, 6, 26),
                maxValue: new Date(),
                required: true
            });

            $("#country").igEditor({
                width: 80,
                button: "dropdown",
                listItems: countries,
                value: countries[1]
            });

            $("#title").igEditor({
                width: 130,
                button: "dropdown",
                listItems: titles,
                value: titles[1]
            });

            $("#postCode").igEditor({
                width: 100,
                type: "mask",
                inputMask: ">00000",
                dataMode: "rawtext"
            });
        });