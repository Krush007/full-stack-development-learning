const catBtn = document.getElementById("catBtn");
const catImage = document.getElementById("catImage");
const loader = document.getElementById("loader");

catBtn.addEventListener("click", getRandomCat);

function getRandomCat() {
  loader.classList.remove("hidden");

  fetch("https://api.thecatapi.com/v1/images/search")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      catImage.src = data[0].url;
      loader.classList.add("hidden");
    })
    .catch(function(error) {
      console.log("Error:", error);
      alert("Failed to load cat image!");
      loader.classList.add("hidden");
    });
}