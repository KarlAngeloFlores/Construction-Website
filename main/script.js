const plusSafety = document.getElementById("plusSafety");
const safetyContent = document.querySelector(".safety-content");
const textSafety = document.querySelector(".text-safety");
const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector(".nav-ul");
const closeMenu = document.getElementById("closeMenu");

menuButton.addEventListener("click", () => {
  if (navigation.classList.contains("open")) {
    navigation.classList.remove("open");
    closeMenu.style.display = "none";
  } else {
    navigation.classList.add("open");
    closeMenu.style.display = "block";
  }
});

closeMenu.addEventListener("click", () => {
  navigation.classList.remove("open");
  closeMenu.style.display = "none";
});

plusSafety.addEventListener("click", () => {
  const computedStyle = getComputedStyle(safetyContent);
  if (computedStyle.display === "none") {
    safetyContent.style.display = "block";
    textSafety.style.color = "red";
    plusSafety.classList.remove("fa-plus");
    plusSafety.classList.add("fa-minus");
  } else {
    safetyContent.style.display = "none";
    textSafety.style.color = "black";

    plusSafety.classList.remove("fa-minus");
    plusSafety.classList.add("fa-plus");
  }
});

const plusQuality = document.getElementById("plusContent");
const qualityContent = document.querySelector(".quality-content");
const textQuality = document.querySelector(".text-quality");

plusContent.addEventListener("click", () => {
  const computedStyle = getComputedStyle(qualityContent);
  if (computedStyle.display === "none") {
    qualityContent.style.display = "block";
    textQuality.style.color = "red";
    plusQuality.classList.remove("fa-plus");
    plusQuality.classList.add("fa-minus");
  } else {
    qualityContent.style.display = "none";
    textQuality.style.color = "black";
    plusQuality.classList.remove("fa-minus");
    plusQuality.classList.add("fa-plus");
  }
});
