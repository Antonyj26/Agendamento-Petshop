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

inputDate.value = inputToday;
inputDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();

  const phone = inputPhone.value.trim();
  const description = textareaDescription.value.trim();
  const date = inputDate.value;
  const hour = inputHour.value;
  const pet = inputPet.value.trim();
  const tutor = tutorName.value.trim();

  if (!phone || !description || !date || !hour || !pet || !tutor) {
    return alert("Preencha todos os campos");
  }

  if (phone.length !== 11) {
    return alert("O telefone deve ter 11 dígitos (ex: 00900000000)");
  }

  scheduleNew({ tutor, pet, phone, description, date, hour });
};
