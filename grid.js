let urlData = location.href;
let newUrl = new URL(urlData);
let teamFull = newUrl.searchParams.get("team");

// retrive player data
let teamsParse = JSON.parse(localStorage.getItem("teams"));
console.log(teamsParse);
let playersParse = JSON.parse(localStorage.getItem("players"));
console.log(playersParse);

var teamMainBox = document.getElementById("container_teams");
var tableTeam = document.getElementById("table-team");

var cnt = 0;

for (var i = 0; i < playersParse.length; i++) {
  if (teamFull == playersParse[i].from) {
    var isPlay = "";
    if (playersParse[i].isPlaying == true) {
      isPlay = "Playing";
    } else {
      isPlay = "On Bench";
    }
    var currentP = playersParse[i].playerName;
    // console.log(currentP);
    cnt++;
    teamMainBox.innerHTML += `
<div    onclick="makethisinclick('${currentP}')"    class="minibox mn2">
<img src="${playersParse[i].playerImg}" class="mainimage" alt=""/> 
<div class="dataodcard">
  <p class="text1"> ${playersParse[i].playerName}   </p>
  <p class="text2"> Worth : ${playersParse[i].price} </p>
  <p class="text2"> Playing : ${isPlay} </p>
  <p class="text2">
   ${playersParse[i].description} </p>
 
</div>
</div>`;
  }

  function makethisinclick(res) {
    window.open(`./playerDetails.html?player=${res}`, "_self");
  }
}
