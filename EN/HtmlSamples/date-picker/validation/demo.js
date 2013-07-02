$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'           
            var apiViewer = new $.ig.apiViewer();
            
            /*----------------- Method & Option Examples -------------------------*/

            // {Button Label} button click handler
            $("#btnFormSubmit").click(function (e) {
                
                var form = $("#datePickerForm")[0];
                form.action = location.href;
                form.submit();

            });

            /*----------------- Instantiation -------------------------*/

            $('#datePicker').igDatePicker({
                width: 280,
                dateInputFormat: 'dateTime',
                required: true,
                validatorOptions: {
                    onblur: true,
                    onchange: false,
                    onsubmit: true,
                    formSubmit: true,
                    keepFocus: "always",
                    showIcon: true
                }
            });

            $('#datePicker2').igDatePicker({
                width: 280,
                dateInputFormat: 'dateTime',
                required: true,
                validatorOptions: {
                    onblur: false,
                    onchange: true,
                    onsubmit: true,
                    formSubmit: true,
                    keepFocus: "never",
                    showIcon: false
                }
            });

        });