const btnRandom = document.getElementById("btn-random");
const imgProfile = document.getElementById("img-profile");
const pName = document.getElementById("p-name");
const pEmail = document.getElementById("p-email");
const pAddress = document.getElementById("p-address");
const divUserCard = document.getElementById("div-user-card");
const divLoadingCard = document.getElementById("div-loading-card");
const spanGenderIcon = document.getElementById("span-gender-icon");

callApi();

async function callApi() {
  divUserCard.style.display = "none";
  divLoadingCard.style.display = "";
  spanGenderIcon.innerText = "";

  const resp = await axios.get("https://randomuser.me/api/");
  const user = resp.data.results[0];
  imgProfile.src = user.picture.large;
  pName.innerText = `${user.name.first} ${user.name.last}`;
  if (user.gender === "male") spanGenderIcon.innerText = "👨";
  else spanGenderIcon.innerText = "👩";
  pEmail.innerText = user.email;
  pAddress.innerText = `${user.location.city} ${user.location.state} ${user.location.country} ${user.location.postcode}`;
  divLoadingCard.style.display = "none";
  divUserCard.style.display = "";
}

btnRandom.onclick = () => {
  callApi();
};
