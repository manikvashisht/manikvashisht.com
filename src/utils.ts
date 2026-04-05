export const getYearsOfExperience = () => {
    const startDate = new Date('2011-07-01');
    const currentDate = new Date();
    const diffInMs = currentDate.getTime() - startDate.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));
};
