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
                    type: "geographicPolyline",
                    name: "naRoads",
                    shapeMemberPath: "points",
                    shapeDataSource: "http://igniteuisamples.dev.infragistics.local/13-1/data-files/shapes/north_america_primary_roads.shp",
                    databaseSource: "http://igniteuisamples.dev.infragistics.local/13-1/data-files/shapes/north_america_primary_roads.dbf",
                    outline: "grey"
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