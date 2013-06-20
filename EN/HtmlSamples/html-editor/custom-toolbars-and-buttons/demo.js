$(function () {
            // initialize igHtmlEditor
            var htmlEditor = $("#htmlEditor").igHtmlEditor({
                width: "99%",
                inputName: "htmlEditor",
                customToolbars: [
                {
                    name: "EmailSignature",
                    collapseButtonIcon: "ui-igbutton-collapse",
                    expandButtonIcon: "ui-igbutton-expand",
                    items: [{
                        name: "appendSignature",
                        type: "button",
                        handler: appendSignature,
                        scope: this,
                        props: {
                            isImage: {
                                value: false,
                                action: '_isSelectedAction'
                            },
                            imageButtonTooltip: {
                                value: "$$(btnInsertSignatureTooltip)",
                                action: '_tooltipAction'
                            },
                            imageButtonIcon: {
                                value: "ui-icon-contact",
                                action: '_buttonIconAction'
                            }
                        }
                    }]
                }]
            });

        });

        function appendSignature(ui) {
            var currentContent = $("#htmlEditor").igHtmlEditor("getContent", "html");
            var signature = "<p>$$(signatureRegards)<br/>$$(signatureName)<br/>$$(signatureCompany)<br/>$$(signaturePhone)</p>";
            $("#htmlEditor").igHtmlEditor("setContent", currentContent + signature, "html");
        }