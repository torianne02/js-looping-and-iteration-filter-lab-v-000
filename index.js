function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, letters) {
  let lengthOfName = letters.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === letters;
  });
}
