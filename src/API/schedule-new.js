import { apiConfig } from "./api-config";

export async function scheduleNew({
  tutor,
  pet,
  phone,
  description,
  date,
  hour,
}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tutor, pet, phone, description, date, hour }),
    });

    alert("Agendamento realizado com sucesso");
  } catch (error) {
    alert("Não foi possível agendaer, Tente Novamente mais tarde");
  }
}
