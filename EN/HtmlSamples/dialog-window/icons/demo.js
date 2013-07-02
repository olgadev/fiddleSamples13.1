$(function () {
            // Initialize the open button with igButton
            $("#openDialog").igButton({ labelText: "$$(open)" });

            $("#dialog").igDialog({
                imageClass: "ui-icon ui-icon-flag",
                closeButtonTitle: "$$(closeButtonTitle)",
                minimizeButtonTitle: "$$(minimizeButtonTitle)",
                maximizeButtonTitle: "$$(maximizeButtonTitle)",
                pinButtonTitle: "$$(pinButtonTitle)",
                unpinButtonTitle: "$$(unpinButtonTitle)",
                restoreButtonTitle: "$$(restoreButtonTitle)",
                showMinimizeButton: true,
                showMaximizeButton: true,
                showPinButton: true,
                height: "460px",
                width: "460px"
            });

            $('#openDialog').on({
                click: function () {
                    // Open the igDialog
                    $("#dialog").igDialog("open");
                }
            });

        });