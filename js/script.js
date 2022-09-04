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
    const allowedPrices = Mul(Array.from(Array(34).keys()));
    var roundNumber = 0
    var currentBuyingTeam;
    var currentOppositionTeam;

    document.querySelector("button").addEventListener("click", function (event) {
          var tbodyRef = document.querySelector("table").getElementsByTagName('tbody')[0];
          var newRow = tbodyRef.insertRow(0);
          var cell1 = newRow.insertCell(0);
          var cell2 = newRow.insertCell(1);
          var cell3 = newRow.insertCell(2);
          var cell4 = newRow.insertCell(3);
          var cell5 = newRow.insertCell(4);
          var cell6 = newRow.insertCell(5);
          var cell7 = newRow.insertCell(6);
          cell1.innerHTML = roundNumber;
          roundNumber += 1;

          var current_date = new Date().toLocaleString('de-DE');
          cell2.innerHTML = current_date;

          do {
              var currentBuyer = prompt("Who bought?");
              if (currentBuyer == Team1.Player1 || currentBuyer == Team1.Player2){
                  currentBuyingTeam = Team1;
                  currentOppositionTeam = Team2;

              }
              else {
                  currentBuyingTeam = Team2;
                  currentOppositionTeam = Team1;
              }
          }
          while (!playerNames.includes(currentBuyer));
          cell3.innerHTML = currentBuyer;

          do {
              var currentBuyingPrice = parseInt(prompt("how much?"));
          }
          while (!allowedPrices.includes(currentBuyingPrice));
          cell4.innerHTML = currentBuyingPrice;

          do {
             var oppositionPoints = parseInt(prompt("how much did the others get?"));
          }
          while (!allowedPrices.includes(oppositionPoints));

          if (oppositionPoints == 0) {
              cell5.innerHTML = "&#9733;";
              currentBuyingTeam.totalScore += 165;
              currentOppositionTeam.totalScore -= 165;
          }
          else {
              if (currentBuyingPrice + oppositionPoints > 165) {
                  currentBuyingTeam.totalScore -= currentBuyingPrice;
                  currentOppositionTeam.totalScore += oppositionPoints;
                  cell5.innerHTML = "-";
              }
              else {
                  currentBuyingTeam.totalScore += (165 - oppositionPoints);
                  currentOppositionTeam.totalScore += oppositionPoints;
                  cell5.innerHTML = "+";
              }
          }
          cell6.innerHTML = Team1.totalScore;
          cell7.innerHTML = Team2.totalScore;
    });
});
