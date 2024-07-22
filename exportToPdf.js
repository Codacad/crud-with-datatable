function exportTableToPDF() {
  const { jsPDF } = window.jspdf;
  var doc = new jsPDF("p", "pt", "a4");
  var table = document.querySelector("#myTable");

  var rows = [];
  //   var cols = [];
  const excludeColumnIndex = 9;
  //   table.querySelectorAll("tr").forEach(function (row) {
  //     var rowData = [];
  //     row.querySelectorAll("td, th").forEach(function (cell) {
  //       rowData.push(cell.innerText);
  //     });
  //     rows.push(rowData);
  //   });
  table.querySelectorAll("tr").forEach((row, rowIndex) => {
    let rowData = [];
    row.querySelectorAll("td, th").forEach((cell, colIndex) => {
      if (colIndex !== 9 && colIndex !== 1) {
        rowData.push(cell.innerText);
      }
    });
    if (rowIndex === 0) {
      rows.push(rowData); // Header row
    } else {
      rows.push(rowData); // Data rows
    }
  });

  doc.autoTable({
    head: [rows[0]],
    body: rows.slice(1),
    styles: { fontSize: 6 },
  });

  doc.save("table.pdf");
}

// Use the function like this
document.getElementById("exportPDF").addEventListener("click", function () {
  exportTableToPDF();
});
