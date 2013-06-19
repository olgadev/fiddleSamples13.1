$(function () {

            $("#editableCombo").igCombo({
                width: "300px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                mode: "editable",
                allowCustomValue: true,
                showDropDownButton: false
            });

            $("#dropdownCombo").igCombo({
                width: "300px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                mode: "dropdown",
                enableClearButton: false
            });

            $("#readonlylistCombo").igCombo({
                width: "300px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                mode: "readonlylist"
            });

            $("#readonlyCombo").igCombo({
                width: "300px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                mode: "readonly"
            });

        });