$(function () {
            /*----------------- Instantiation -------------------------*/
            $("#grid2").igHierarchicalGrid({
                features: [
                    {
                        name: "Updating",
                        enableAddRow: true,
                        inherit: true,
                        editMode: "rowedittemplate",
                        rowEditDialogContainment: "window",
                        showReadonlyEditors: false,
                        enableDeleteRow: true,
                        enableDataDirtyException: false,
                        rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                        rowEditDialogWidth: 600,
                        rowEditDialogHeight: 400,
                        columnSettings:
                            [{
                                columnKey: "EmployeeID",
                                readOnly: true
                            },
                            {
                                columnKey: "LastName",
                                validatorOptions: { bodyAsParent: false, required: true, showIcon: true }
                            }]
                    }
                ],
                width: "100%",
                height: "500px",
                initialDataBindDepth: -1,
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
                    { headerText: "$$(Northwind_Employees_Address)", key: "Address", dataType: "string", width: "150px" },
                    { headerText: "$$(Northwind_Employees_City)", key: "City", dataType: "string", width: "100px" },
                    { headerText: "$$(Northwind_Employees_PostCode)", key: "PostalCode", dataType: "string", width: "100px", hidden: true },
                    { headerText: "$$(Northwind_Employees_Region)", key: "Region", dataType: "string", width: "80px", hidden: true },
                    { headerText: "$$(Northwind_Employees_Country)", key: "Country", dataType: "string", width: "100px", hidden: true },
                    { headerText: "$$(Northwind_Employees_HomePhone)", key: "HomePhone", dataType: "string", width: "150px", hidden: true },
                    { headerText: "$$(Northwind_Employees_Extension)", key: "Extension", dataType: "string", width: "150px", hidden: true }
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
                            { key: "OrderID", headerText: "$$(Northwind_Orders_OrderID)", dataType: "number", width: "100px" },
                            { key: "CustomerID", headerText: "$$(Northwind_Orders_CustomerID)", dataType: "string", width: "100px", hidden: true },
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
                            },
                            {
                                name: "Updating",
                                enableAddRow: true,
                                rowEditDialogContainment: "owner",
                                editMode: "rowedittemplate",
                                showReadonlyEditors: false,
                                enableDeleteRow: true,
                                enableDataDirtyException: false,
                                rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                                rowEditDialogWidth: 600,
                                rowEditDialogHeight: 400,
                                columnSettings:
                                [
                                    {
                                        columnKey: "OrderID",
                                        readOnly: true
                                    },
                                    {
                                        columnKey: "ShipAddress",
                                        validatorOptions: { bodyAsParent: false, required: true, showIcon: true }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });