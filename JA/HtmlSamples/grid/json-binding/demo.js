$(function () {

            var data = [
                      { "$$(Northwind_Employees_Name)": "John Smith", "$$(Northwind_Employees_Age)": 45 },
                      { "$$(Northwind_Employees_Name)": "Mary Johnson", "$$(Northwind_Employees_Age)": 32 },
                      { "$$(Northwind_Employees_Name)": "Bob Ferguson", "$$(Northwind_Employees_Age)": 27 }
                ];
            
            // temporary use id="grid" instead of id="grid7": wait/undo if igGrid will fix its bug
				$("#grid").igGrid({
                width: 400,
                dataSource: data //JSON Array defined above                          
            });
        });