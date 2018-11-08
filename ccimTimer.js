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

const forms = [
  {
    name: 'fs',
    lines: 2511,
    done: true
  },{
    name: 'db',
    lines: 3287,
    done: true
  },{
    name: 'ps',
    lines: 510,
    done: true
  },{
    name: 'al',
    lines: 551,
    done: true
  },{
    name: 'mh',
    lines: 913,
    done: true
  },{
    name: 'cha',
    lines: 4538,
    done: true
  },{
    name: 'hc',
    lines: 6875,
    done: true
  },{
    name: 'ca',
    lines: 1898,
    done: true
  }
]


function howManyLines(startLine, endLine) {
  return endLine - startLine
}

function howManyLinesTotal(arr) {
  return arr.map((ele) => ele.lines).reduce((acc, counter) => acc + counter, 0)
}

function howManyLinesDone(arr) {
  return arr.filter((ele) => ele.done).map((ele) => ele.lines).reduce((acc, counter) => acc + counter, 0)
}

function percentageDone(arr) {
  const linesDone = arr.filter((ele) => ele.done).map((ele) => ele.lines).reduce((acc, counter) => acc + counter, 0)
  const linesTotal = arr.map((ele) => ele.lines).reduce((acc, counter) => acc + counter, 0)
  return ((linesDone / linesTotal) * 100).toFixed(2)
}

// console.log('lines total today ', howManyLines(712, 3287))

console.log('lines done', howManyLinesDone(forms))
console.log('total lines', howManyLinesTotal(forms))
console.log('percentage done', percentageDone(forms))

// day one Friday FS fs-form.json line 0 - 759, 3 hours
// day two Monday FS fs-form.json line 759 - line 2011 >> 1252 lines
// day 3 Tuesday FS fs-form.json line 2011 - 2519 //508
//               DB db-form-json line 0 - 130 //130
// day 3 Tuesday                                          638
// day 4 Wednesday start 4:10pm (one hour) --> 130 - 712 //582
// day 5 Thursday DB db-form.json line 712 - 3287 (until 1245pm, morning session) //2575
//                PS ps-form.json line 0 - 510 //32% done in total
// day 6 Friday MH mh-form.json line 0 - 913     start 1pm
//              AL al-form.json line 0 - 551
//              CHA cha-form.json line 0 - 324 only 3 hours work this day //41% done
// day 7 Monday CHA cha-form.json line 324 - line 4109 -- lost a few hours 1pm - 311pm was spent on that one little bug
// day 8 Tuesday CHA cha-form.json line 4109 - 4538 --> 62% done
//               HC hc-form.json line 0 - 737 --> 66% done
// day 9 Wednesday HC hc-form.json line 737 - 6875
//                 CA ca-form.json line 0 - 258 --> 92% done
// day 10 Thursday CA ca-form.json line 258 - 1898 //2pm
