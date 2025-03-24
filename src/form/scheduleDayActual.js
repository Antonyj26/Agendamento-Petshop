import dayjs from "dayjs";

const dateDay = document.querySelector(".date-day");

dateDay.value = dayjs(new Date()).format("YYYY-MM-DD");

console.log(dateDay);
