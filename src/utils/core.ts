import dayjs from "dayjs";

const adjustDateTimeForTimezone = (dateString) => {
  if (!dateString) return new Date();
  const dateUTC = dayjs.utc(dateString);
  const dateInUTCMinus = dateUTC.tz("America/Sao_Paulo");

  return dayjs(dateInUTCMinus.format());
};

const handleChange = (data, setData, value, field) => {
  const d = data;
  d[field].value = value;
  setData(() => ({
    ...d,
  }));
};

const calculateDuration = (startDate, type) => {
  const today = dayjs().startOf("day");
  const startUtc = dayjs.utc(startDate);

  switch (type) {
    case "days":
      return dayjs.duration(today - startUtc).asDays();

    case "hours":
      return dayjs.duration(today - startUtc).asHours();

    default:
      return dayjs.duration(today - startUtc).asMinutes();
  }
};

const getUser = () => {
  const session = localStorage.getItem("session");
  if (session) {
    try {
      const parsedSession = JSON.parse(session);
      if (parsedSession && parsedSession.user) {
        return parsedSession.user;
      }
    } catch (error) {
      console.error("Erro ao fazer parse do session:", error);
    }
  }

  return {};
};

export { handleChange, adjustDateTimeForTimezone, calculateDuration, getUser };
