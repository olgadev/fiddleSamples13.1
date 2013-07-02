$(function () {
            $("#map").igMap({
                width: "700px",
                height: "500px",
                crosshairVisibility: "visible",
                verticalZoomable: true,
                horizontalZoomable: true,
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://igniteuisamples.dev.infragistics.local/13-1/images/samples/maps/world.png",
                backgroundContent: {
                    type: "openStreet"
                },
                series: [{
                    type: "geographicShape",
                    name: "indianLands",
                    markerType: "automatic",
                    shapeMemberPath: "points",
                    shapeDataSource: 'http://igniteuisamples.dev.infragistics.local/13-1/data-files/shapes/indlanp020.shp',
                    databaseSource: 'http://igniteuisamples.dev.infragistics.local/13-1/data-files/shapes/indlanp020.dbf',
                    brush: "rgba(68,138,223,.6)",
                    outline: "rgba(34,108,200,1)"
                }],
                windowResponse: "immediate",
                windowRect: {
                    left: 0.2470,
                    top: 0.3143,
                    width: 0.127,
                    height: 0.127
                }
            });
        });