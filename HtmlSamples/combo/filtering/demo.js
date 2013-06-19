$(function () {

            $("#autoCompleteCombo").igCombo({
                width: "300px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                autoComplete: true,
                filteringType: "local",
                renderMatchItems: "startsWith"
            });

            $("#filterContainsCombo").igCombo({
                width: "300px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                filteringType: "local",
                filterCondition: "contains",
                renderMatchItems: "contains"
            });

            $("#caseSensitiveCombo").igCombo({
                width: "300px",
                textKey: "ProductName",
                valueKey: "ProductID",
                dataSource: northwindProducts,
                filteringType: "local",
                autoComplete: true,
                caseSensitive: true
            });

        });