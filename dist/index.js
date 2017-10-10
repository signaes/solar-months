const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const cal = year => months.map(month => {
  let day = 1, days = [];

  while (new Date(year, month, day).getMonth() === month) {
    const date = new Date(year, month, day);

    days.push({
      date,
      day,
      weekday: date.getDay()
    });

    day += 1;
  }

  return days;
});

module.exports = cal;
