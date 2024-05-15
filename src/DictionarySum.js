function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[date.getDay()];
  }
  
  function getNextDayOfWeek(dateString, dayOfWeek) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(dateString);
    let daysToAdd = daysOfWeek.indexOf(dayOfWeek) - date.getDay();
    if (daysToAdd <= 0) daysToAdd += 7;
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().substring(0, 10);
  }
  
  function getPrevDayOfWeek(dateString, dayOfWeek) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(dateString);
    let daysToSubtract = date.getDay() - daysOfWeek.indexOf(dayOfWeek);
    if (daysToSubtract <= 0) daysToSubtract += 7;
    date.setDate(date.getDate() - daysToSubtract);
    return date.toISOString().substring(0, 10);
  }
  
  function getMeanValue(prevValue, nextValue) {
    return (prevValue + nextValue) / 2;
  }
  
  function groupByDayOfWeek(inputDictionary) {
    const outputDictionary = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
    const daysOfWeek = Object.keys(outputDictionary);
  
    const inputDates = Object.keys(inputDictionary).sort();
    const firstDate = inputDates[0];
    const lastDate = inputDates[inputDates.length - 1];
  
    let prevDate = null;
    let nextDate = getNextDayOfWeek(firstDate, 'Mon');
    let nextValue = inputDictionary[firstDate];
  
    for (let dayOfWeek of daysOfWeek) {
      let value = 0;
  
      if (inputDictionary.hasOwnProperty(nextDate)) {
        value = inputDictionary[nextDate];
        prevDate = nextDate;
        nextDate = getNextDayOfWeek(nextDate, 'Mon');
        nextValue = inputDictionary[nextDate];
      } else {
        if (prevDate === null) {
          prevDate = getPrevDayOfWeek(nextDate, 'Mon');
          nextValue = inputDictionary[firstDate];
        }
  
        if (nextDate > lastDate) {
          value = getMeanValue(inputDictionary[prevDate], nextValue);
          prevDate = nextDate;
          nextDate = getNextDayOfWeek(nextDate, 'Mon');
          nextValue = inputDictionary[lastDate];
        } else {
          while (!inputDictionary.hasOwnProperty(nextDate)) {
            nextDate = getNextDayOfWeek(nextDate, 'Mon');
          }
          value = getMeanValue(inputDictionary[prevDate], inputDictionary[nextDate]);
          prevDate = nextDate;
          nextDate = getNextDayOfWeek(nextDate, 'Mon');
          nextValue = inputDictionary[nextDate];
        }
      }
  
      outputDictionary[dayOfWeek] = value;
    }
  
    return outputDictionary;
  }
  

  // Test cases
const inputDictionary1 = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2
};

console.log(createWeekdayDictionary(inputDictionary1));
// Expected output: {'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8}