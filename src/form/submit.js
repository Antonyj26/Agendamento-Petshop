import dayjs from "dayjs";
import { scheduleNew } from "../API/schedule-new";
// Capturando os valores dos inputs

const form = document.querySelector(".form");
const tutorName = document.getElementById("tutor");
const inputPet = document.getElementById("pet");
const inputPhone = document.getElementById("phone");
const textareaDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const inputHour = document.getElementById("hour");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

inputDate.min = inputToday;

inputDate.addEventListener("change", () => {
  const selectedDate = dayjs(inputDate.value);
  const today = dayjs();
  const options = inputHour.querySelectorAll("option");

  options.forEach((option) => {
    const optionTime = dayjs(`${inputDate.value} ${option.value}`);

    if (selectedDate.isSame(today, "day") && optionTime.isBefore(today)) {
      option.disabled = true;
    } else {
      option.disabled = false;
    }
  });
});

form.onsubmit = (event) => {
  const phone = inputPhone.value.trim();
  const description = textareaDescription.value.trim();
  const date = inputDate.value;
  const hour = inputHour.value;
  const pet = inputPet.value.trim();
  const tutor = tutorName.value.trim();

  if (!phone || !description || !date || !hour || !pet || !tutor) {
    return alert("Preencha todos os campos");
  }

  if (phone.length < 8) {
    return alert(
      "O telefone deve ter pelo menos 8 dígitos ex:(fixo: 0000000 cel: 00900000000) "
    );
  }

  scheduleNew({ tutor, pet, phone, description, date, hour });
};
