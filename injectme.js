var disendorsement_div = document.createElement("div");
disendorsement_div.style.background = "pink";
disendorsement_div.innerHTML = "This guy sucks!";

var profile_div = document.getElementsByClassName("profile-detail")[0];
console.log(profile_div);
console.log(profile_div[5]);
//profile_div[5].parentNode.insertBefore(disendorsement_div, profile_div[5].nextSibling);
