var disendorsement_div = document.createElement("div");
disendorsement_div.style.background = "#0077B5";

var disses_text_div = document.createElement("div");
disses_text_div.style.textShadow = "2px 2px 4px #000000";
disses_text_div.style.color = "white";
disses_text_div.style.fontSize = "20px";
disses_text_div.style.margin = "10px";
disses_text_div.innerHTML = "This guy rocks!";

disendorsement_div.appendChild(disses_text_div);

var profile_div = document.getElementsByClassName("profile-detail")[0];
console.log(profile_div);

var position_div = profile_div.getElementsByTagName('div')[5];
console.log(position_div);

position_div.appendChild(disendorsement_div);
