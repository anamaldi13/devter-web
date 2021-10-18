const DATE_UNIT = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (Timestamp) => {
  const now = Date.now();
  const elapsed = (Timestamp - now) / 1000;
  for (const [unit, secondsInUnit] of DATE_UNIT) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      /* Para saber si es horas, minutos o dias */
      const value = Math.floor(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

export default function useTimeAgo(Timestamp) {
  const { value, unit } = getDateDiffs(Timestamp);
  const rtf = new Intl.RelativeTimeFormat("es", { style: "short" });
  return rtf.format(value, unit);
}
