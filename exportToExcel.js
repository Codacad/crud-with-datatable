function exportTableToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    filename = filename ? filename + '.xls' : 'excel_data.xls';
    
    var data = XLSX.utils.table_to_sheet(tableSelect);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, data, 'Sheet1');
    XLSX.writeFile(wb, filename);
}

// Use the function like this
document.getElementById("exportExcel").addEventListener("click", function () {
    exportTableToExcel('myTable', 'table');
});
