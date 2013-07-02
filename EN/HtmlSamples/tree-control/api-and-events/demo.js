$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'           
            var apiViewer = new $.ig.apiViewer(); 

            
            /*----------------- Method & Option Examples -------------------------*/

            // Remove Selected Node button click handler
            $("#btnRemoveNode").click(function (e) {
                var node = $("#tree").igTree("selectedNode");

                if (node.path != null) {

                    if (node.data.Text === "$$(Tech)") {
                        apiViewer.log("$$(tech_not_removed)");
                    }
                    else {
                        // Remove selected node using path
                        $("#tree").igTree("removeAt", node.path);

                        apiViewer.log("$$(node_removed) " + node.data.Text);

                        $("#tree").igTree("clearSelection");
                    }
                } else {
                    apiViewer.log("$$(select_try_again)");
                }
            });

            // Select "Tech" Node button click handler
            $("#btnSelectNode").click(function (e) {

                var nodes = $("#tree").igTree("findNodesByText", "$$(Tech)");

                if (nodes.length > 0) {
                    $("#tree").igTree("select", nodes[0].element);
                }
            });
            
            // {Button Label} button click handler
            $("#btnAddNode").click(function (e) {
                var parentNode = $("#tree").igTree("selectedNode").element;                

                if (parentNode == null) {
                    $("#tree").igTree("addNode", { Text: "$$(NewNode)" });
                }
                else {
                    $("#tree").igTree("addNode", { Text: "$$(NewNode)" }, parentNode);
                    $("#tree").igTree("expand", parentNode);
                }

            });

            /*----------------- Event Examples -------------------------*/

            $("#tree").on("igtreeselectionchanged", function (e, ui) {
                apiViewer.log("igtreeselectionchanged: [ " + "$$(selection_changed) " + ui.newNodes[0].data.Text + "]");
            });

            $("#tree").on("igtreenodeclick", function (evt, ui) {
                apiViewer.log("igtreenodeclick: [ " + "$$(node_clicked) " + ui.node.data.Text + "]");
            });

            $("#tree").on("igtreedragstart", function (evt, ui) {
                apiViewer.log("igtreedragstart: [ " + "$$(drag_start) " + ui.data.Text + "]");
            });

            $("#tree").on("igtreedragstop", function (evt, ui) {
                apiViewer.log("igtreedragstop");
            });

            $("#tree").on("igtreenodedropped", function (evt, ui) {
                apiViewer.log("igtreenodedropped");
            });

            /*----------------- Instantiation -------------------------*/

            $("#tree").igTree({
                singleBranchExpand: true,
                dataSourceType: "json",
                dataSource: products, //defined in external script
                dragAndDrop: true,
                bindings: {
                    textKey: "Text",
                    valueKey: "Text",
                    childDataProperty: "Nodes"
                }
            });

        });