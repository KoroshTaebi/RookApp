document.addEventListener("DOMContentLoaded", function (event) {
    var Team1 = {"Player1": "A",
                 "Player2": "B",
                 "totalScore": 0,
                 "no_purchases": 0,
                 "no_shelems": 0};
    var Team2 = {"Player1": "C",
                 "Player2": "D",
                 "totalScore": 0,
                 "no_purchases": 0,
                 "no_shelems": 0};

    var playerNames = [Team1.Player1, Team1.Player2, Team2.Player1, Team2.Player2];
    const Mul = arr => arr.map(item => item * 5);
    const allowedPrices = Mul(Array.from({length:33},(v,k)=>k+1));
    var roundNumber = 0

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
          do {
              var currentBuyer = prompt("Who bought?");
          }
          while (!playerNames.includes(currentBuyer));
          cell3.innerHTML = currentBuyer;

          do {
              var currentBuyingPrice = prompt("how much?");
          }
          while (!allowedPrices.includes(parseInt(currentBuyingPrice)));
          cell4.innerHTML = currentBuyingPrice;

    });
});

