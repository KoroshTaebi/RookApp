document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector("button").addEventListener("click", function (event) {
          var tbodyRef = document.querySelector("table").getElementsByTagName('tbody')[0];
          var newRow = tbodyRef.insertRow(0);
          var cell1 = newRow.insertCell(0);
          var cell2 = newRow.insertCell(1);
          cell1.innerHTML = "NEW CELL1";
          cell2.innerHTML = Date(Date.now());
    });
});

