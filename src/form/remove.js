import { scheduleRemove } from "../API/schedule-remove";
import { scheduleDay } from "./scheduleDayActual";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.tagName === "SMALL") {
      const item = event.target.closest("li");

      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          await scheduleRemove({ id });

          scheduleDay();
        }
      }
    }
  });
});
