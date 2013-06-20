$(function () {

            var data = [
                {
                    Name: "$$(Food)", 
                    Products: [
                        { Name: "$$(Bread)", Quantity: 3 },
                        { Name: "$$(Pizza)", Quantity: 4 }
                    ]
                },
                {
                    Name: "$$(Beverages)",
                    Products: [
                        { Name: "$$(Milk)", Quantity: 1 },
                        { Name: "$$(fruit_punch)", Quantity: 4 }
                    ]
                }
            ];

            $("#hierarchicalGrid").igHierarchicalGrid({
                width: "600px",
                dataSource: data, //Array of objects defined above
                autoGenerateLayouts: true
            });

        });