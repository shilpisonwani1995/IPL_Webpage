// console.log("page is ready");

var teams = [
  {
    id: 0,
    teamName: "MI",
    fullName: "Mumbai Indians",
    teamIcon:
      "https://www.kreedon.com/wp-content/uploads/2019/03/mi-mumbai-indians.jpg",
    playerCount: 24,
    topBatsman: "Rohit Sharma",
    topBowler: "Akash Madhwal",
    championshipCount: 5,
  },
  {
    id: 1,
    teamName: "CSK",
    fullName: "Chennai Super Kings",
    teamIcon:
      "https://e1.pxfuel.com/desktop-wallpaper/382/641/desktop-wallpaper-chennai-super-kings-csk-logo-thumbnail.jpg",
    playerCount: 25,
    topBatsman: "MS Dhoni",
    topBowler: "Ravindra Jadeja",
    championshipCount: 5,
  },
  {
    id: 2,
    teamName: "DC",
    fullName: "Delhi Capitals",
    teamIcon:
      "https://logowik.com/content/uploads/images/delhi-capitals3041.jpg",
    playerCount: 25,
    topBatsman: "Rishabh Pant",
    topBowler: "Kuldeep Yadav",
    championshipCount: 0,
  },
  {
    id: 3,
    teamName: "GT",
    fullName: "Gujrat Titans",
    teamIcon: "https://etimg.etb2bimg.com/photo/89716039.cms",
    playerCount: 18,
    topBatsman: "Mohit Sharma",
    topBowler: "Shubham Gill",
    championshipCount: 1,
  },
  {
    id: 4,
    teamName: "KKR",
    fullName: "Kolkata knight Riders",
    teamIcon:
      "https://www.kkr.in/static-assets/images/cssimages/default-kkr.jpg",
    playerCount: 22,
    topBatsman: "Shreyas Lyer",
    topBowler: "Varun Chakravarthy",
    championshipCount: 2,
  },
  {
    id: 5,
    teamName: "LSG",
    fullName: "Lucknow Super Giants",
    teamIcon:
      "https://staticg.sportskeeda.com/editor/2022/12/775c6-16717796532487.png",
    playerCount: 25,
    topBatsman: "K L Rahul",
    topBowler: "Bishnoi",
    championshipCount: 0,
  },
  {
    id: 6,
    teamName: "PBKS",
    fullName: "Panjab Kings",
    teamIcon:
      "https://e1.pxfuel.com/desktop-wallpaper/508/386/desktop-wallpaper-kings-xi-punjab-logo-vector-kxip-in-vector-eps-logo-icons-clipart-punjab-ipl.jpg",
    playerCount: 24,
    topBatsman: "Rohit Sharma",
    topBowler: "Akash Madhwal",
    championshipCount: 5,
  },
  {
    id: 7,
    teamName: "RR",
    fullName: "Rajasthan Royals",
    teamIcon:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png",
    playerCount: 24,
    topBatsman: "Rohit Sharma",
    topBowler: "Akash Madhwal",
    championshipCount: 1,
  },
  {
    id: 8,
    teamName: "RCB",
    fullName: "Royal Challengers Banglore",
    teamIcon:
      "https://ss-i.thgim.com/public/cricket/article30817560.ece/alternates/FREE_1200/rcb-new-logojpg",
    playerCount: 22,
    topBatsman: "Virat Kohli",
    topBowler: "Harsha1 Patel",
    championshipCount: 0,
  },
  {
    id: 9,
    teamName: "SRH",
    fullName: "Sunrisers Hyderabad",
    teamIcon:
      "https://logowik.com/content/uploads/images/sunrisers-hyderabad5129.jpg",
    playerCount: 25,
    topBatsman: "Devid Warner",
    topBowler: "Bhuvneshwar Kuma",
    championshipCount: 1,
  },
];

var players = [
  {
    id: 0,
    playerName: "Hardik Pandya",
    from: "GT",
    price: "12.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png",
    playerTeam: "Gujarat Titan",
  },
  {
    id: 1,
    playerName: "Mohammad Shami",
    from: "GT",
    price: "10.00 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png",
    playerTeam: "Gujarat Titan",
  },
  {
    id: 2,
    playerName: "Shubham Gill",
    from: "GT",
    price: "10.00 Cr",
    isPlaying: false,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png",
    playerTeam: "Gujarat Titan",
  },
  {
    id: 3,
    playerName: "Jayant Yadav",
    from: "GT",
    price: "2.00 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png",
    playerTeam: "Gujarat Titan",
  },
  {
    id: 4,
    playerName: "Rashid Khan",
    from: "GT",
    price: "1.30 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2885.png",
    playerTeam: "Gujarat Titan",
  },
  {
    id: 5,
    playerName: "Virat Kohli",
    from: "RCB",
    price: "13.00 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png",
    playerTeam: "Royal Challengers Bangalore",
  },
  {
    id: 6,
    playerName: "Glenn Maxwell",
    from: "RCB",
    price: "10.25 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
    playerTeam: "Royal Challengers Bangalore",
  },
  {
    id: 7,
    playerName: "Shahbaz Ahmed",
    from: "RCB",
    price: "1.00cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/13803.png",
    playerTeam: "Royal Challengers Bangalore",
  },
  {
    id: 8,
    playerName: "Mohhamad Siraj",
    from: "RCB",
    price: "5.00cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png",
    playerTeam: "Royal Challengers Bangalore",
  },
  {
    id: 9,
    playerName: "Dinesh Kartik",
    from: "RCB",
    price: "3.00cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/102.png",
    playerTeam: "Royal Challengers Bangalore",
  },
  {
    id: 10,
    playerName: "Rohit Sharma",
    from: "MI",
    price: "14.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
    playerTeam: "Mumbai Indians",
  },
  {
    id: 11,
    playerName: "Ishan Kishan",
    from: "MI",
    price: "17.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png",
    playerTeam: "Mumbai Indians",
  },
  {
    id: 12,
    playerName: "Jasprit Bumrah",
    from: "MI",
    price: "7.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
    playerTeam: "Mumbai Indians",
  },
  {
    id: 13,
    playerName: "Mayank Markande",
    from: "MI",
    price: "1.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/4951.png",
    playerTeam: "Mumbai Indians",
  },
  {
    id: 14,
    playerName: "Rahul Budhhi",
    from: "MI",
    price: "5.00 Cr",
    isPlaying: true,
    description: "bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20597.png",
    playerTeam: "Mumbai Indians",
  },
  {
    id: 15,
    playerName: "MS Dhoni",
    from: "CSK",
    price: "14.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
    playerTeam: "Chennai Super Kings",
  },
  {
    id: 16,
    playerName: "Dwayne Bravo",
    from: "CSK",
    price: "07.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png",
    playerTeam: "Chennai Super Kings",
  },
  {
    id: 17,
    playerName: "Robin Uthappa",
    from: "CSK",
    price: "02.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/127.png",
    playerTeam: "Chennai Super Kings",
  },
  {
    id: 18,
    playerName: "Ambati Raydu",
    from: "CSK",
    price: "01.00 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/100.png",
    playerTeam: "Chennai Super Kings",
  },
  {
    id: 19,
    playerName: "Shivam Dube",
    from: "CSK",
    price: "07.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5431.png",
    playerTeam: "Chennai Super Kings",
  },

  {
    id: 20,
    playerName: "Rishabh Pant",
    from: "DC",
    price: "13.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
    playerTeam: "Delhi Capitals",
  },
  {
    id: 21,
    playerName: "Mandeep Singh",
    from: "DC",
    price: "1.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
    playerTeam: "Delhi Capitals",
  },
  {
    id: 22,
    playerName: "Lalit Yadav",
    from: "DC",
    price: "1.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/6870.png",
    playerTeam: "Delhi Capitals",
  },
  {
    id: 23,
    playerName: "Prithvi shaw",
    from: "DC",
    price: "18.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3764.png",
    playerTeam: "Delhi Capitals",
  },

  {
    id: 24,
    playerName: "Jos Buttler",
    from: "RR",
    price: "07.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
    playerTeam: "Rajasthan Royals",
  },
  {
    id: 25,
    playerName: "Karun Nair",
    from: "RR",
    price: "01.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/276.png",
    playerTeam: "Rajasthan Royals",
  },
  {
    id: 26,
    playerName: "Dhruv Jurel",
    from: "RR",
    price: "07.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20620.png",
    playerTeam: "Rajasthan Royals",
  },
  {
    id: 27,
    playerName: "Riyan Parag",
    from: "RR",
    price: "03.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/4445.png",
    playerTeam: "Rajasthan Royals",
  },
  {
    id: 28,
    playerName: "Devdutt Paddikal",
    from: "RR",
    price: "07.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5430.png",
    playerTeam: "Rajasthan Royals",
  },
  {
    id: 29,
    playerName: "Shreyas Iyer",
    from: "KKR",
    price: "10.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
    playerTeam: "Kolkata Knight Riders",
  },
  {
    id: 30,
    playerName: "Abhijeet Tomar",
    from: "KKR",
    price: "18.50 Cr",
    isPlaying: false,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20580.png",
    playerTeam: "Kolkata Knight Riders",
  },
  {
    id: 31,
    playerName: "Pat Cummins",
    from: "KKR",
    price: "1.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/488.png",
    playerTeam: "Kolkata Knight Riders",
  },
  {
    id: 32,
    playerName: "Ashok Sharma",
    from: "KKR",
    price: "18 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20584.png",
    playerTeam: "Kolkata Knight Riders",
  },
  {
    id: 33,
    playerName: "Rinku Singh",
    from: "KKR",
    price: "10.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
    playerTeam: "Kolkata Knight Riders",
  },
  {
    id: 34,
    playerName: "Rahul Tripathi",
    from: "SH",
    price: "10.50 Cr",
    isPlaying: true,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3838.png",
    playerTeam: "Sunrises Hyderabad",
  },
  {
    id: 35,
    playerName: "Anukul Sharma",
    from: "SH",
    price: "10.50 Cr",
    isPlaying: true,
    description: "Batsman",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3760.png",
    playerTeam: "Sunrises Hyderabad",
  },
  {
    id: 36,
    playerName: "Abdul Samad",
    from: "SH",
    price: "5.50 Cr",
    isPlaying: true,
    description: "Bowler",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/19352.png",
    playerTeam: "Sunrises Hyderabad",
  },
  {
    id: 37,
    playerName: "Nicolas Pooran",
    from: "SH",
    price: "3.50 Cr",
    isPlaying: false,
    description: "All-rounder",
    playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1703.png",
    playerTeam: "Sunrises Hyderabad",
  },
];

// localStorage.setItem("teams", teams);

// Convert the teams array to a JSON string
var teamsJson = JSON.stringify(teams);
var playersJson = JSON.stringify(players);

// Store the JSON string in the local storage
localStorage.setItem("teams", teamsJson);
localStorage.setItem("players", playersJson);

// conver the json string back to the array
localStorage.getItem("teams");
let teamsParse = JSON.parse(localStorage.getItem("teams"));
let playersParse = JSON.parse(localStorage.getItem("players"));
console.log(teamsParse);
console.log(playersParse);

let cardContainer = document.getElementById("cardContainer");

for (let i = 0; i < teamsParse.length; i++) {
  let content = `
    <div onclick="cardclick('${i}')" class = "cardContent">
      <div class = "icon">
        <img src = "${teamsParse[i].teamIcon}" alt = ${teamsParse[i].teamName}/>
      </div>
      <div class = "fullNmae">
        <p>${teamsParse[i].fullName}</p>
      </div>
    </div>
  `;
  cardContainer.innerHTML += content;
}

// search bar code goes here

var suggestArray = [];
for (var i = 0; i < teamsParse.length; i++) {
  suggestArray.push(teamsParse[i].teamName);
}
let searchBar = document.querySelector(".search-input");
let inputBox = searchBar.querySelector("input");
let suggBox = searchBar.querySelector(".autocom-box");
let icon = searchBar.querySelector(".icon");

inputBox.onkeyup = (e) => {
  if (e.keyCode == 13) {
    icon.click();
  }
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestArray.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = `<li>${data}</li>`);
    });
    searchBar.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "currentLi(this)");
    }
  } else {
    searchBar.classList.remove("active");
  }
};
function currentLi(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    window.open(`./grid.html?team=${element.textContent}`, "_self");
  };
  searchBar.classList.remove("active");
}
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

// search bar code ends here

function cardclick(res) {
  var clickedCard = teamsParse[res].teamName;
  console.log("clicked");
  console.log(clickedCard);
  window.open(`./grid.html?team=${clickedCard}`, "_self");
}

var addTeam = () => {
  window.open("./addTeam.html", "_self");
};
var addPlayer = () => {
  window.open("./addPlayer.html", "_self");
};
