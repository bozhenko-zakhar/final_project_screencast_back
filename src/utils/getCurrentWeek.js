export const getCurrentWeek = (user) => {
  let dueDate = new Date(user.dueDate);
  if (!user.dueDate) {
    dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 39 * 7);
  }

  const now = new Date();
  const daysLeft = Math.floor((dueDate - now) / (1000 * 60 * 60 * 24));
  const currentWeek = 40 - Math.floor(daysLeft / 7);
  return { currentWeek, daysLeft };
};
