import createHttpError from "http-errors";

const DAYS_IN_WEEK = 7;
const FULL_PREGNANCY_DAYS = 280;

export const normalizePregnancyWeek = (week) => {
  const normalizedWeek = Number(week);

  if (
    !Number.isInteger(normalizedWeek) ||
    normalizedWeek < 1 ||
    normalizedWeek > 42
  ) {
    throw createHttpError(400, "Pregnancy week must be an integer from 1 to 42");
  }

  return normalizedWeek;
};

export const parseDate = (date) => {
  if (!date) return null;

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    throw createHttpError(400, "Invalid date format. Use YYYY-MM-DD");
  }

  return parsedDate;
};

export const differenceInDays = (startDate, endDate) => {
  const millisecondsInDay = 1000 * 60 * 60 * 24;

  return Math.ceil((endDate - startDate) / millisecondsInDay);
};

export const getDaysToBirth = ({ dueDate, conceptionDate, pregnancyWeek }) => {
  const today = new Date();

  const parsedDueDate = parseDate(dueDate);
  const parsedConceptionDate = parseDate(conceptionDate);

  if (parsedDueDate) {
    return Math.max(differenceInDays(today, parsedDueDate), 0);
  }

  if (parsedConceptionDate) {
    const calculatedDueDate = new Date(parsedConceptionDate);
    calculatedDueDate.setDate(calculatedDueDate.getDate() + FULL_PREGNANCY_DAYS);

    return Math.max(differenceInDays(today, calculatedDueDate), 0);
  }

  return Math.max((40 - pregnancyWeek) * DAYS_IN_WEEK, 0);
};