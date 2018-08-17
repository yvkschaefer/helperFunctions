function howFast(startingLine, endLine, timeInHours) {
  let totalLinesCovered = endLine - startingLine
  console.log({totalLinesCovered})
  const linesInTotal = 19546; //get this for real as it does change all the time all the time
  let percentageDone = (totalLinesCovered/linesInTotal) * 100

  let rate = 100 / percentageDone
  let totalTimeToFinish = rate * timeInHours
  let daysToFinish = totalTimeToFinish / 7
  return daysToFinish
}

console.log('days to finish ', howFast(0, 759, 3));