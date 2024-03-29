export function returnTodayAndSystemDate(system) {
    const formatToDate = dayjs(system.lastDayMeeting);
    const systemDatePlus = dayjs(system.lastDayMeeting).add(1, "day");
    const today = dayjs();
    return [today, formatToDate, systemDatePlus];
}
