$(function () {

            var data = [
                {
                    "ID": 1, "RegionName": "$$(Data_NorthAmerica)", "Countries":
                    [
                        { "ID": 1, "CountryName": "$$(Data_UnitedStates)" },
                        { "ID": 2, "CountryName": "$$(Data_Canada)" },
                        { "ID": 3, "CountryName": "$$(Data_Mexico)" }
                    ]
                },
                {
                    "ID": 2, "RegionName": "$$(Data_SouthAmerica)", "Countries":
                    [
                        { "ID": 4, "CountryName": "$$(Data_Brazil)" },
                        { "ID": 5, "CountryName": "$$(Data_Uruguay)" }
                    ]
                },
                {
                    "ID": 3, "RegionName": "$$(Data_Europe)", "Countries":
                    [
                        { "ID": 6, "CountryName": "$$(Data_UnitedKingdom)" },
                        { "ID": 7, "CountryName": "$$(Data_Germany)" },
                        { "ID": 8, "CountryName": "$$(Data_Bulgaria)" }
                    ]
                }
            ];

            $("#tree").igTree({
                dataSource: data, //JSON Array defined above
                bindings: {
                    textKey: "RegionName",
                    valueKey: "ID",
                    childDataProperty: "Countries",
                    bindings: {
                        textKey: "CountryName",
                        valueKey: "ID"
                    }
                }
            });
        });