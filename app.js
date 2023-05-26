const toggleButton = document.getElementById("toggleButton");
const additionalText = document.getElementById("additionalText");

toggleButton.addEventListener("click", function () {
  additionalText.style.opacity = "0";
  additionalText.style.display = "block";

  setTimeout(function () {
    additionalText.style.opacity = "1";
  }, 100); // Adjust the duration as needed

  toggleButton.style.display = "none";
});
