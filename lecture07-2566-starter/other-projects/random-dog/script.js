const btnRandom = document.getElementById("btn-random");
const imgDog = document.getElementById("img-dog");

btnRandom.onclick = async () => {
  btnRandom.innerText = "Loading ...";
  btnRandom.disabled = true;
  const resp = await axios.get("https://dog.ceo/api/breeds/image/random");
  imgDog.src = resp.data.message;
};

imgDog.onload = () => {
  btnRandom.innerText = "More Please !!";
  btnRandom.disabled = false;

  imgDog.className = "animate__animated animate__headShake";
  setTimeout(() => {
    imgDog.className = "";
  }, 1000);
};
