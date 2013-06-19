$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "$$(Northwind_Customers_CustomerID)", key: "ID", dataType: "string", width: "150px" },
                    { headerText: "$$(Northwind_Customers_CompanyName)", key: "CompanyName", dataType: "string", width: "130px" },
                    { headerText: "$$(Northwind_Customers_ContactName)", key: "ContactName", dataType: "string", width: "100px" },
                    { headerText: "$$(Northwind_Customers_ContactTitle)", key: "ContactTitle", dataType: "string", width: "160px" },
                    { headerText: "$$(Northwind_Customers_Address)", key: "Address", dataType: "string", width: "180px" },
                    { headerText: "$$(Northwind_Customers_City)", key: "City", dataType: "string", width: "110px" },
                    { headerText: "$$(Northwind_Customers_Country)", key: "Country", dataType: "string", width: "100px" }
                ],
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                width: "700px",
                height: "400px",
                features: [
                    {
                        name: "ColumnFixing",
                        columnSettings: [
                            {
                                columnKey: "CompanyName",
                                isFixed: true
                            }
                        ]
                    }
                ]
            });
        });