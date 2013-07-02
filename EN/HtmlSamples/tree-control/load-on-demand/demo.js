$(function () {

            var url = 'http://services.odata.org/OData/OData.svc/Categories?$format=json&$callback=?';
            //creates new JSONP data source for OData
            var jsonp = new $.ig.JSONPDataSource({ dataSource: url, responseDataKey: "d" });

            //Load on demand happens automatically using OData, the loadOnDemand option,
            //and properly configured bindings
            $("#tree1").igTree({
                checkboxMode: 'triState',
                dataSource: jsonp,
                dataSourceType: 'remoteUrl',
                responseDataKey: 'd',
                loadOnDemand: true,
                bindings: {
                    textKey: 'Name',
                    valueKey: 'ID',
                    primaryKey: 'ID',
                    childDataProperty: 'Products',
                    bindings: {
                        textKey: 'Name',
                        valueKey: 'ID',
                        primaryKey: 'ID',
                        childDataProperty: 'Supplier',
                        bindings: {
                            textKey: 'Name',
                            valueKey: 'ID'
                        }
                    }
                }
            });

        });