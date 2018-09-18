function findMatching(driver, name) {
  return driver.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
