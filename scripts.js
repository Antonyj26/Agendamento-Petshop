const ContainerButtonNewSchedule = document.querySelector(
  ".button-new-schedule"
);
const buttonNewSchedule = document.querySelector(".button-new-schedule button");
const formDisplay = document.querySelector(".container-form");

buttonNewSchedule.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    formDisplay.style.display === "none" ||
    formDisplay.style.display === ""
  ) {
    formDisplay.style.display = "flex";
    ContainerButtonNewSchedule.style.display = "none";
  } else {
    formDisplay.style.display = "none";
    ContainerButtonNewSchedule.style.display = "flex";
  }
});
