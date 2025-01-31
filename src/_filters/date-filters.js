// Stolen from https://stackoverflow.com/a/31615643
const appendSuffix = (n) => {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

const displayDateFilter = function (value) {
  // const dateObject = new Date(value); previous
  const dateObject = new Date(
    // add 12 hours
    new Date(value).setHours(new Date(value).getHours() + 12)
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWithSuffix = appendSuffix(dateObject.getDate());

  return `${dayWithSuffix} ${
    months[dateObject.getMonth()]
  } ${dateObject.getFullYear()}`;
};

const isoDateFilter = function (value) {
  const dateObject = new Date(value);

  return dateObject.toISOString().slice(0, 10);
};

module.exports = {
  displayDateFilter,
  isoDateFilter,
};
