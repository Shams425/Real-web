//show/hide the program content
const showReading = document.querySelector(".reading");
const showVideos = document.querySelector(".video");

showReading.addEventListener("click", () => {
  if (showReading.classList.contains("active")) return;

  showReading.classList.add("active");
  showVideos.classList.remove("active");

  document
    .querySelector(`#${showReading.getAttribute("data-target")}`)
    .classList.add("active");
  document
    .querySelector(`#${showVideos.getAttribute("data-target")}`)
    .classList.remove("active");
});

showVideos.addEventListener("click", () => {
  if (showVideos.classList.contains("active")) return;

  showReading.classList.remove("active");
  showVideos.classList.add("active");

  document
    .querySelector(`#${showReading.getAttribute("data-target")}`)
    .classList.remove("active");
  document
    .querySelector(`#${showVideos.getAttribute("data-target")}`)
    .classList.add("active");
});
