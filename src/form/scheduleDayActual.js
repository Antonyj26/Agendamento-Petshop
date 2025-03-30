import dayjs from "dayjs";
import { scheduleFetchByDay } from "../API/schedule-Fetch-By-Day";
import { loadSchedules } from "./load.js";

export const dateDay = document.querySelector(".date-day");

dateDay.value = dayjs(new Date()).format("YYYY-MM-DD");
dateDay.addEventListener("change", scheduleDay);

export async function scheduleDay() {
  const date = dateDay.value;

  const dailySchedules = await scheduleFetchByDay({ date });

  loadSchedules({ dailySchedules });
}

scheduleDay();
