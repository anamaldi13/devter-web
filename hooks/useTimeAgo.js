import { useEffect, useState } from "react";

const DATE_UNIT = [
  ["month", 86400 * 31],
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
  const [timeago, setTimeago] = useState(() => getDateDiffs(Timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(Timestamp);
      setTimeago(newTimeAgo);
    }, 5000);
    return () => clearInterval(interval);
  }, [Timestamp]);

  const rtf = new Intl.RelativeTimeFormat("es", { style: "long" });
  const { value, unit } = timeago;
  return rtf.format(value, unit);
}
