$(function () {

                $("#igRating").on("igratingvaluechange", function (e, ui) {
                    $("#currentValue").html("$$(Value_Event): " + ui.value);
                });

                $("#clearRating").on("click", function (e) {
                    $("#igRating").igRating("value", 0);
                });

                $("#setValue").on("click", function (e) {
                    $("#igRating").igRating("value", 3);
                    $("#currentValue").html("$$(Value_Event): " + 3);
                });

            });