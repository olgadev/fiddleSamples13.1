$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'           
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Event Examples -------------------------*/

            $("#igUpload1").on("iguploadfileselecting", function (e, ui) {                
                apiViewer.log("iguploadfileselecting");
            });

            $("#igUpload1").on("iguploadfileselected", function (e, ui) {
                apiViewer.log("iguploadfileselected: [ " + "$$(File_Path): " + ui.filePath + "]");
            });

            $("#igUpload1").on("iguploadfileuploading", function (e, ui) {
                apiViewer.log("iguploadfileuploading: [ " + "$$(File_Path): " + ui.filePath + "]");
            });

            $("#igUpload1").on("iguploadfileuploaded", function (e, ui) {
                apiViewer.log("iguploadfileuploaded: [ " + "$$(File_Size): " + ui.totalSize + "]");
            });

            $("#igUpload1").on("iguploadfileuploadaborted", function (e, ui) {
                apiViewer.log("iguploadfileuploadaborted: [ " + "$$(upload_aborted): " + ui.filePath + "]");
            });

            $("#igUpload1").on("iguploadcancelallclicked", function (e, ui) {
                apiViewer.log("iguploadcancelallclicked");
            });

            $("#igUpload1").on("iguploadonerror", function (e, ui) {
                apiViewer.log("iguploadonerror: [ " + "$$(error_message): " + ui.errorMessage + "]");
            });

            /*----------------- Instantiation -------------------------*/

            $("#igUpload1").igUpload({
                mode: 'multiple',
                progressUrl: "/IGUploadStatusHandler.ashx",
                controlId: "serverID1"
            });


        });