$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                columns: [
                    { headerText: "$$(table_lbl_employeeID)", key: "EmployeeID", dataType: "number" },
                    { headerText: "$$(table_lbl_firstName)", key: "FirstName", dataType: "string" },
                    { headerText: "$$(table_lbl_lastName)", key: "LastName", dataType: "string" },
                    { headerText: "$$(table_lbl_birthDate)", key: "BirthDate", dataType: "date" },
                    { headerText: "$$(table_lbl_city)", key: "City", dataType: "string" },
                    { headerText: "$$(table_lbl_postCode)", key: "PostalCode", dataType: "number" }
                ],
                dataSource: northwind,
                responseDataKey: 'results',
                features: [
                    {
                        name: 'Filtering',
                        type: "local",
                        mode: "advanced"
                    }
                ]
            });
        });