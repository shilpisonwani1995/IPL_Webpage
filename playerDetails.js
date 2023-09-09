let urlData = location.href;
let newUrl = new URL(urlData);
let playerUrl = newUrl.searchParams.get("player");
console.log(playerUrl);

//retrive data
let teamsParse = JSON.parse(localStorage.getItem("teams"));
let playersParse = JSON.parse(localStorage.getItem("players"));
console.log(playersParse);
let playerData = document.getElementById("player-details-con");

for (var i = 0; i < playersParse.length; i++) {
  if (playersParse[i].playerName == playerUrl) {
    var playingOrN = "";
    if (playersParse[i].isPlaying == true) {
      playingOrN = "playing";
    } else {
      playingOrN = "On Bench";
    }
    console.log(playersParse[i]);
    playerData.innerHTML += `
    <div id="player_detail-img">
    <img src="${playersParse[i].playerImg}" alt="">
</div>
    <div id="new-player-det">
    <table>
    <tr>
        <td>Player Name  </td>
        <td>${playersParse[i].playerName}  </td>
    </tr>
<table>
    <tr>
        <td> Team Name </td>
        <td> ${playersParse[i].playerTeam}  </td>
    </tr>
<table>
    <tr>
        <td> Team Code </td>
        <td>${playersParse[i].from}   </td>
    </tr>
<table>
    <tr>
        <td> Worth </td>
        <td>${playersParse[i].price}  </td>
    </tr>
<table>
    <tr>
        <td> Is playing </td>
        <td> ${playingOrN} </td>
    </tr>
</table>
</div>

    `;
  }
}
