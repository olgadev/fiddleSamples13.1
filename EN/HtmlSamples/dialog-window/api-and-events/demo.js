$(function () {
            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            // Initialize buttons for create, destroy, open and close the igDialog
            $("#createDialog").igButton({ labelText: "$$(create)" });
            $("#destroyDialog").igButton({ labelText: "$$(destroy)", disabled: true });
            $("#openDialog").igButton({ labelText: "$$(open)", disabled: true });
            $("#closeDialog").igButton({ labelText: "$$(close)", disabled: true });
            $("#maximizeDialog").igButton({ labelText: "$$(maximize)", disabled: true });
            $("#minimizeDialog").igButton({ labelText: "$$(minimize)", disabled: true });
            $("#pinDialog").igButton({ labelText: "$$(pin)", disabled: true });
            $("#unpinDialog").igButton({ labelText: "$$(unpin)", disabled: true });

            /*----------------- Method & Option Examples -------------------------*/

            // process events of buttons
            $('#createDialog').on({
                click: function () {
                    // Initialize the igDialog
                    $("#dialog").igDialog({
                        stateChanging: function (evt, ui) {
                            // Check the igDialog state  
                            if (ui.action === "close") {
                                $("#openDialog").igButton({ disabled: false });
                                $("#closeDialog").igButton({ disabled: true });
                            }

                            // Check the igDialog state
                            if (ui.action === "pin") {
                                $("#pinDialog").igButton({ disabled: true });
                                $("#unpinDialog").igButton({ disabled: false });
                            }

                            // Check the igDialog state
                            if (ui.action === "unpin") {
                                $("#pinDialog").igButton({ disabled: false });
                                $("#unpinDialog").igButton({ disabled: true });
                            }

                            // Check the igDialog state
                            if (ui.action === "minimize") {
                                $("#minimizeDialog").igButton({ disabled: true });
                                $("#openDialog").igButton({ disabled: true });
                                $("#closeDialog").igButton({ disabled: false });
                            }

                            // Check the igDialog state
                            if (ui.action === "maximize") {
                                $("#maximizeDialog").igButton({ disabled: true });
                                $("#openDialog").igButton({ disabled: true });
                                $("#closeDialog").igButton({ disabled: false });
                                $("#pinDialog").igButton({ disabled: false });
					            $("#unpinDialog").igButton({ disabled: true });
                            }

                            // Check the igDialog state
                            if (ui.action === "restore") {
                                $("#minimizeDialog").igButton({ disabled: false });
                                $("#maximizeDialog").igButton({ disabled: false });
                            }
                        },
                        closeButtonTitle: "$$(closeButtonTitle)",
                        minimizeButtonTitle: "$$(minimizeButtonTitle)",
                        maximizeButtonTitle: "$$(maximizeButtonTitle)",
                        pinButtonTitle: "$$(pinButtonTitle)",
                        unpinButtonTitle: "$$(unpinButtonTitle)",
                        restoreButtonTitle: "$$(restoreButtonTitle)",
                        showMinimizeButton: true,
                        showMaximizeButton: true,
                        showPinButton: true,
                        height: 540,
                        minHeight: 340,
                        maxHeight: 600,
                        width: 500,
                        minWidth: 300,
                        maxWidth: 600,
                        headerText: "$$(headerText)",
                        showFooter: true,
                        footerText: "$$(footerText)",
                        openAnimation: "fade",
                        closeAnimation: "fade"
                    });

                    // Disable the create button
                    $("#createDialog").igButton({ disabled: true });

                    // Enable buttons
                    $("#destroyDialog").igButton({ disabled: false });
                    $("#closeDialog").igButton({ disabled: false });
                    $("#maximizeDialog").igButton({ disabled: false });
                    $("#minimizeDialog").igButton({ disabled: false });
                    $("#pinDialog").igButton({ disabled: false });
                    $("#unpinDialog").igButton({ disabled: false });
                }
            });

            $('#destroyDialog').on({
                click: function () {
                    // Destroy the igDialog
                    $("#dialog").igDialog("destroy");

                    // Enable the create button
                    $("#createDialog").igButton({ disabled: false });

                    // Disable buttons
                    $("#destroyDialog").igButton({ disabled: true });
                    $("#openDialog").igButton({ disabled: true });
                    $("#closeDialog").igButton({ disabled: true });
                    $("#maximizeDialog").igButton({ disabled: true });
                    $("#minimizeDialog").igButton({ disabled: true });
                    $("#pinDialog").igButton({ disabled: true });
                    $("#unpinDialog").igButton({ disabled: true });
                }
            });

            $('#openDialog').on({
                click: function () {
                    // Open the igDialog
                    $("#dialog").igDialog("open");

                    // Disable the open button
                    $("#openDialog").igButton({ disabled: true });

                    // Enable the close button
                    $("#closeDialog").igButton({ disabled: false });
                }
            });

            $('#closeDialog').on({
                click: function () {
                    // Close the igDialog
                    $("#dialog").igDialog("close");

                    // Enable the open button
                    $("#openDialog").igButton({ disabled: false });

                    // Disable the close button
                    $("#closeDialog").igButton({ disabled: true });
                }
            });

            $('#minimizeDialog').on({
                click: function () {
                    // Minimize the igDialog
                    $("#dialog").igDialog("minimize");

                    $("#minimizeDialog").igButton({ disabled: true });
                }
            });

            $('#maximizeDialog').on({
                click: function () {
                    // Maximize the igDialog
                    $("#dialog").igDialog("maximize");

                    $("#maximizeDialog").igButton({ disabled: true });
                }
            });

            $('#pinDialog').on({
                click: function () {
                    // Pin the igDialog
                    $("#dialog").igDialog("pin");

                    $("#pinDialog").igButton({ disabled: true });
                    $("#unpinDialog").igButton({ disabled: false });
                }
            });

            $('#unpinDialog').on({
                click: function () {
                    // Unpin the igDialog
                    $("#dialog").igDialog("unpin");

                    $("#pinDialog").igButton({ disabled: false });
                    $("#unpinDialog").igButton({ disabled: true });
                }
            });

            // Helper function, which convert selected option from string into valid position for the igDialog
            function getPosition() {
                var i, pair, position, val = $("#position").val();

                if (!val) {
                    return null;
                }

                if (val.charAt(0) === "[") {
                    return eval(val);
                }

                val = val.split(",");
                i = val.length;
                position = {};
                while (i-- > 0) {
                    pair = val[i].split(":");
                    position[pair[0]] = eval(pair[1]);
                }

                return position;
            }

            // Recreate the igDialog, when the option in the select has changed
            $(".recreate").on({
                change: function () {
                    // Destroy the igDialog
                    $("#dialog").igDialog("destroy");

                    // Initialize the igDialog
                    $("#dialog").igDialog({
                        stateChanging: function (evt, ui) {
                            // Check the igDialog state  
                            if (ui.action === "close") {
                                $("#openDialog").igButton({ disabled: false });
                                $("#closeDialog").igButton({ disabled: true });
                            }

                            // Check the igDialog state
                            if (ui.action === "pin") {
                                $("#pinDialog").igButton({ disabled: true });
                                $("#unpinDialog").igButton({ disabled: false });
                            }

                            // Check the igDialog state
                            if (ui.action === "unpin") {
                                $("#pinDialog").igButton({ disabled: false });
                                $("#unpinDialog").igButton({ disabled: true });
                            }

                            // Check the igDialog state
                            if (ui.action === "minimize") {
                                $("#minimizeDialog").igButton({ disabled: true });
                                $("#openDialog").igButton({ disabled: true });
                                $("#closeDialog").igButton({ disabled: false });
                            }

                            // Check the igDialog state
                            if (ui.action === "maximize") {
                                $("#maximizeDialog").igButton({ disabled: true });
                                $("#openDialog").igButton({ disabled: true });
                                $("#closeDialog").igButton({ disabled: false });
                                $("#pinDialog").igButton({ disabled: false });
					            $("#unpinDialog").igButton({ disabled: true });
                            }

                            // Check the igDialog state
                            if (ui.action === "restore") {
                                $("#minimizeDialog").igButton({ disabled: false });
                                $("#maximizeDialog").igButton({ disabled: false });
                            }
                        },
                        closeButtonTitle: "$$(closeButtonTitle)",
                        minimizeButtonTitle: "$$(minimizeButtonTitle)",
                        maximizeButtonTitle: "$$(maximizeButtonTitle)",
                        pinButtonTitle: "$$(pinButtonTitle)",
                        unpinButtonTitle: "$$(unpinButtonTitle)",
                        restoreButtonTitle: "$$(restoreButtonTitle)",
                        showMinimizeButton: true,
                        showMaximizeButton: true,
                        showPinButton: true,
                        height: 540,
                        minHeight: 340,
                        maxHeight: 600,
                        width: 500,
                        minWidth: 300,
                        maxWidth: 600,
                        headerText: "$$(headerText)",
                        showFooter: true,
                        footerText: "$$(footerText)",
                        openAnimation: "fade",
                        closeAnimation: "fade",
                        position: getPosition()
                    });

                    // Disable the create button
                    $("#createDialog").igButton({ disabled: true });

                    // Enable buttons for destroy and close
                    $("#destroyDialog").igButton({ disabled: false });
                    $("#closeDialog").igButton({ disabled: false });
                }
            });

            /*----------------- Event Examples -------------------------*/

            $("#dialog").on("igdialogstatechanging", function (evt, ui) {
                var message = "igdialogstatechanging";
                apiViewer.log(message);
            });

            $("#dialog").on("igdialogstatechanged", function (evt, ui) {
                var message = "igdialogstatechanged";
                apiViewer.log(message);
            });

            $("#dialog").on("igdialoganimationended", function (evt, ui) {
                var message = "igdialoganimationended";
                apiViewer.log(message);
            });

            $("#dialog").on("igdialogfocus", function (evt, ui) {
                var message = "igdialogfocus";
                apiViewer.log(message);
            });

            $("#dialog").on("igdialogblur", function (evt, ui) {
                var message = "igdialogblur";
                apiViewer.log(message);
            });
        });