$(function () {

            var northwindProductsJSON = [
                { "ID": 0, "Name": "$$(Bread)", "Description": "$$(whole_bread)", "ReleaseDate": "\/Date(694224000000)\/", "DiscontinuedDate": null, "Rating": 4, "Price": "2.5", "CategoryID": 0 },
                { "ID": 1, "Name": "$$(Milk)", "Description": "$$(low_milk)", "ReleaseDate": "\/Date(812505600000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "3.5", "CategoryID": 1 },
                { "ID": 2, "Name": "$$(vint_soda)", "Description": "$$(americana_variety)", "ReleaseDate": "\/Date(970358400000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "20.9", "CategoryID": 1 },
                { "ID": 3, "Name": "$$(havina_cola)", "Description": "$$(original_cola)", "ReleaseDate": "\/Date(1128124800000)\/", "DiscontinuedDate": "\/Date(1159660800000)\/", "Rating": 3, "Price": "19.9", "CategoryID": 1 },
                { "ID": 4, "Name": "$$(fruit_punch)", "Description": "$$(mango)", "ReleaseDate": "\/Date(1041724800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "22.99", "CategoryID": 1 },
                { "ID": 5, "Name": "$$(cran_juice)", "Description": "$$(plastic_bottles)", "ReleaseDate": "\/Date(1154649600000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "22.8", "CategoryID": 1 },
                { "ID": 6, "Name": "$$(pink_lemonade)", "Description": "$$(cans)", "ReleaseDate": "\/Date(1162684800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "18.8", "CategoryID": 1 },
                { "ID": 7, "Name": "$$(dvd_player)", "Description": "$$(upconversion)", "ReleaseDate": "\/Date(1163548800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "35.88", "CategoryID": 2 },
                { "ID": 8, "Name": "$$(lcd_hdtv)", "Description": "$$(bluray)", "ReleaseDate": "\/Date(1210204800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "1088.8", "CategoryID": 2 }
            ],

            northWindCategoriesJSON = [
                { "ID": 0, "Name": "$$(Food)" },
                { "ID": 1, "Name": "$$(Beverages)" },
                { "ID": 2, "Name": "$$(Electronics)" }
            ];

            //Formatting for igGrid cells to display igCombo text as opposed to igCombo value
            function formatCategoryCombo(val) {
                var i, category;
                for (i = 0; i < northWindCategoriesJSON.length; i++) {
                    category = northWindCategoriesJSON[i];
                    if (category.ID === val) {
                        val = category.Name;
                    }
                }

                return val;
            }

            function showFeedback(elementID, message) {
                var selector = '#' + elementID;
                $(selector).stop(true, true).html(message)
                    .fadeIn(500).delay(3000).fadeOut(500);
            }

            //Grid Initialization
            $("#gridProducts").igGrid({
                dataSource: northwindProductsJSON,
                autoGenerateColumns: false,
                primaryKey: "ID",
                autoCommit: true,
                width: "100%",
                height: 360,
                columns: [
                    { headerText: "", key: "ID", dataType: "number", width: "30px" },
                    { headerText: "$$(Name)", key: "Name", dataType: "string", width: "190px" },
                    { headerText: "$$(Description)", key: "Description", dataType: "string", width: "300px" },
                    { headerText: "$$(Category)", key: "CategoryID", dataType: "number", width: "190px", formatter: formatCategoryCombo }
                ],
                features: [
                    {
                        name: 'Updating',
                        columnSettings: [{
                            //The combo is defined as an editor provider. Combo options are defined under 'editorOptions'.
                            columnKey: "CategoryID",
                            editorType: 'combo',
                            required: true,
                            editorOptions: {
                                mode: "dropdown",
                                dataSource: northWindCategoriesJSON,
                                textKey: "Name",
                                valueKey: "ID"
                            }
                        }],
                        editRowEnded: function () {
                            //To access the updated igGrid data
                            northwindProductsJSON = $("#gridProducts").igGrid().data().igGrid.dataSourceObject();

                            //Show feedback
                            var message = "$$(update_message)";
                            showFeedback("updatedMessage", message);
                        }
                    }
                ]
            });
        });