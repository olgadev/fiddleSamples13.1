$(function () {
$.support.cors = true;

        $(function () {
            var dataSource = new $.ig.OlapFlatDataSource({
                dataSource: sales,
                metadata: {
                    cube: {
                        name: "Sales",
                        caption: "$$(Sales)",
                        measuresDimension: {
                            caption: "$$(Measures)",
                            measures: [
                                { caption: "$$(UnitsSold)", name: "UnitsSold", aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitsSold') },
                                { caption: "$$(UnitPrice)", name: "UnitPrice", aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitPrice', 2) }]
                        },

                        dimensions: [
                            {
                                caption: "$$(Date)", name: "Date", hierarchies: [
                                    $.ig.OlapUtilities.prototype.getDateHierarchy(
                                        "Date", ["year", "quarter", "month", "date"], "Dates", "$$(Date)",
                                        ["$$(Year)", "$$(Quarter)", "$$(Month)", "$$(Day)"], "$$(AllPeriods)")]
                            },
                            {
                                caption: "$$(Location)", name: "Location", hierarchies: [{
                                    caption: "$$(Location)", name: "Location", levels: [
                                             { name: "AllLocations", levelCaption: "$$(AllLocations)", memberProvider: function (item) { return "$$(AllLocations)"; } },
                                             { name: "Country", levelCaption: "$$(Country)", memberProvider: function (item) { return item.Country; } },
                                             { name: "City", levelCaption: "$$(City)", memberProvider: function (item) { return item.City; } }]
                                }]
                            },
                            {
                                caption: "$$(Product)", name: "Product", hierarchies: [{
                                    caption: "$$(Product)", name: "Product", levels: [
                                    { name: "AllProducts", levelCaption: "$$(AllProducts)", memberProvider: function (item) { return "$$(AllProducts)"; } },
                                    { name: "ProductCategory", levelCaption: "$$(Category)", memberProvider: function (item) { return item.ProductCategory; } }]
                                }]
                            },
                            {
                                caption: "$$(Seller)", name: "Seller", hierarchies: [{
                                    caption: "$$(Seller)", name: "Seller", levels: [
                                     { name: "AllSellers", levelCaption: "$$(AllSellers)", memberProvider: function (item) { return "$$(AllSellers)"; } },
                                     { name: "SellerName", levelCaption: "$$(Seller)", memberProvider: function (item) { return item.SellerName; } }]
                                }]
                            }
                        ]
                    }
                },
                rows: "[Date].[Dates]",
                columns: "[Product].[Product]",
                measures: "[Measures].[UnitPrice]"
            });

            $('#dataSelector').igPivotDataSelector({
                dataSource: dataSource,
                height: "565px"
            });

            $("#pivotGrid").igPivotGrid({
                dataSource: dataSource,
                height: "565px",
                width: "660px"
            });

            $("#customDraggables > li").draggable({
                // You must set this option in a similar manner, because the pointer is used when 
                // calculating the drop position and its top should not be blocked by the dragged element
                cursorAt: {
                    top: -10,
                    left: 10
                },
                cursor: 'pointer',
                revert: true,
                revertDuration: 0,
                stop: function (evt, ui) {
                    var $this = $(this);
                    $this.hide();
                    $this.fadeIn(500);
                }
            });
        });});