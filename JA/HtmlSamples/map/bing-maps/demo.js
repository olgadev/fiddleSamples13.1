$(function () {

            mapHelper();

            $("#map").igMap({
                width: "100%",
                crosshairVisibility: "visible",
                verticalZoomable: true,
                horizontalZoomable: true,
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://igniteuisamples.dev.infragistics.local/13-1/images/samples/maps/world.png",
                panModifier: "control",
                backgroundContent: {
                    type: "bing",
                    key: bingData
                },
                series: [{
                    type: "geographicShape",
                    name: "worldCountries",
                    markerType: "automatic",
                    shapeMemberPath: "points",
                    shapefileUri: "http://igniteuisamples.dev.infragistics.local/13-1/data-files/shapes/world.shp",
                    databaseUri: "http://igniteuisamples.dev.infragistics.local/13-1/data-files/shapes/world.dbf"
                }],
                windowResponse: "immediate",
                windowRect: {
                    left: 0,
                    top: 0,
                    height: 0.7,
                    width: 0.7
                }
            });

        });