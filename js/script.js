document.addEventListener("DOMContentLoaded", function (event) {
    const Mul = arr => arr.map(item => item * 5);
    const allowedPrices = Mul(Array.from({length:33},(v,k)=>k+1));
    var roundNumber = 0
    //var currentBuyingPrice;

    document.querySelector("button").addEventListener("click", function (event) {
          var tbodyRef = document.querySelector("table").getElementsByTagName('tbody')[0];
          var newRow = tbodyRef.insertRow(0);
          var cell1 = newRow.insertCell(0);
          var cell2 = newRow.insertCell(1);
          var cell3 = newRow.insertCell(2)
          var cell4 = newRow.insertCell(3)
          cell1.innerHTML = roundNumber;
          roundNumber += 1;
          cell2.innerHTML = Date(Date.now());
          cell3.innerHTML = prompt("Who bought?");

          do {
              var currentBuyingPrice = prompt("how much?");
          }
          while (!allowedPrices.includes(parseInt(currentBuyingPrice)));
          cell4.innerHTML = currentBuyingPrice;

    });
});

