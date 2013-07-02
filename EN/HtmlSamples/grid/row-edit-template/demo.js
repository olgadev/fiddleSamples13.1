$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();


            var titles = ["Sales Representative", "Sales Manager", "Inside Sales Coordinator", "Vice President, Sales"];
            var countries = ["UK", "USA"];

            /*----------------- Event Examples -------------------------*/

            $("#grid").on("iggridupdatingroweditdialogopened", function (evt, ui) {
                var currDataRow = ui.dialogElement.data('tr');
                var message = "$$(rowEditTemplate_eventFired) ";
                for (var i = 0; i < currDataRow[0].cells.length; i++) {
                    message += " <br/>" + $(currDataRow[0].cells[i]).text();
                }
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
                    headerText: "$$(table_lbl_title)", key: "Title", width: "80px"
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
                height: "700px",
                tabIndex: 1,
                features: [{
                    name: "Selection",
                    mode: "row"
                }, {
                    name: "Updating",
                    enableAddRow: false,
                    editMode: "rowedittemplate",
                    rowEditDialogWidth: 350,
                    rowEditDialogHeight: 450,
                    rowEditDialogMaxHeight: 320,
                    rowEditDialogFieldWidth: 150,
                    rowEditDialogOkCancelButtonWidth: 110,
                    rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                    enableDeleteRow: false,
                    showReadonlyEditors: false,
                    enableDataDirtyException: false,
                    columnSettings: [{
                        columnKey: "EmployeeID",
                        readOnly: true
                    }, {
                        columnKey: "Title",
                        editorType: "text",
                        editorOptions: {
                            button: "dropdown",
                            listItems: titles,
                            readOnly: true,
                            dropDownOnReadOnly: true
                        }
                    }, {
                        columnKey: "Country",
                        editorType: "text",
                        editorOptions: {
                            button: "dropdown",
                            listItems: countries,
                            readOnly: true,
                            dropDownOnReadOnly: true
                        }
                    },
                    {
                        columnKey: "BirthDate",
                        editorType: "datepicker",
                        validation: true,
                        editorOptions: { minValue: new Date(1955, 1, 19), maxValue: new Date(), required: true },
                        validatorOptions: { bodyAsParent: false }
                    }]
                }]
            });

        });