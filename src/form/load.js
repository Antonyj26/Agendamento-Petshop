import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export async function loadSchedules({ dailySchedules }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailySchedules.forEach((schedule) => {
      const article = document.createElement("article");
      const item = document.createElement("li");
      const tutorName = document.createElement("i");
      const petName = document.createElement("b");
      const descriptionName = document.createElement("span");
      const hourTime = document.createElement("strong");

      item.setAttribute("data-id", schedule.id);

      tutorName.textContent = schedule.tutor;
      petName.textContent = schedule.pet;
      descriptionName.textContent = schedule.description;

      article.appendChild(petName);
      article.appendChild(tutorName);
      item.append(hourTime, article, descriptionName);

      hourTime.textContent = schedule.hour;

      if (hour >= 6 && hour < 12) {
        periodMorning.appendChild(item);
      } else if (hourTime > 12 && hourTime <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Não foi possível exibir os agendamentos");
  }
}
