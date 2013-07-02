$(function () {
             $("#map").igMap({
                 width: "700px",
                 crosshairVisibility: "visible",
                 verticalZoomable: true,
                 horizontalZoomable: true,
                 overviewPlusDetailPaneVisibility: "visible",
                 overviewPlusDetailPaneBackgroundImageUri: "http://igniteuisamples.dev.infragistics.local/13-1/images/samples/maps/world.png",
                 panModifier: "control",
                 backgroundContent: {
                     type: "openStreet"
                 },
                 series: [{
                     type: "geographicSymbol",
                     name: "worldCities",
                     dataSource: data,
                     latitudeMemberPath: "Latitude",
                     longitudeMemberPath: "Longitude",
                     markerType: "automatic",
                     markerCollisionAvoidance: "fade",
                     markerBrush: "#1B559D",
                     markerOutline: "black",
                     showTooltip: true,
                     tooltipTemplate: "cityTemplate"
                 }],
                 windowResponse: "immediate",
                 windowRect: {
                     left: 0.27,
                     top: 0.20,
                     height: 0.45,
                     width: 0.45
                 }
             });
         });