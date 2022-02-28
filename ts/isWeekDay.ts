const isWeekDay = (date: Date) => boolean => date.getDay() % 6 !== 0;

(function call() {
    isWeekDay(new Date(2022, 3, 8)); // true
    isWeekDay(new Date(2022, 1, 1)); // false
});


