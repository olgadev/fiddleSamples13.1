$(function () {

            // Initialize the open button with igButton
            $("#openDialog").igButton({ labelText: "$$(open)" });

            // Initialize the igDialog
            $("#dialog").igDialog({
                height: 440,
                width: 440,
                headerText: "$$(igwebsite)",
                showMinimizeButton: true,
                showMaximizeButton: true,
                showPinButton: true
            });

            $("#openDialog").on({
                click: function (e) {
                    // Open the igDialog
                    $("#dialog").igDialog("open");
                } 
            });

        });