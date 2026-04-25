export const calculateDaysLeft = (weekNumber, dueDate) => {
    const MS_IN_DAY = 1000 * 60 * 60 * 24;

    if (dueDate) {
        const daysLeft = Math.ceil((new Date(dueDate) - new Date()) / MS_IN_DAY);
        return daysLeft > 0 ? daysLeft : 0;
    }

    if (weekNumber) {
        const daysLeft = (39 - weekNumber) * 7;
        return daysLeft > 0 ? daysLeft : 0;
    }
    
    return 0;
}