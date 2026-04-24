const createWeekContent = (week) => ({
  week,
  baby: {
    dashboard: `Інформація про малюка на ${week} тижні вагітності.`,
    development: `Розвиток малюка на ${week} тижні вагітності.`,
  },
  mom: {
    dashboard: `Порада для мами на ${week} тижні вагітності.`,
    body: `Інформація про тіло мами на ${week} тижні вагітності.`,
  },
});

export const pregnancyWeeks = Array.from({ length: 42 }, (_, index) =>
  createWeekContent(index + 1)
);