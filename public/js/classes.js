// this function is called from classes.ejs
function calendar(year, month, targetDiv, calNum, arrClassDates, note) {
  // get calendar number - 1/2 for L/R
  calNum=calNum.slice(-1);
  //  get day of week name for class day
   let dayName = targetDiv.slice(-1);
  // get destination location for calendar
  const grid = document.getElementById(targetDiv);

  // get number of days in month
  const numDaysInMonth = new Date(year, month, 0).getDate();
  // create array of day numbers
  const arrDayNums = Array.from({length: numDaysInMonth}, (_, i) => i + 1)

  // create array for column headers
  const arrDaysOfWeek = ["日", "月", "火", "水","木","金","土"];

  // create calendar
  // create div element to contain calendar
  let newDiv = document.createElement("div");
  // apply class names
  let newClass = (("cal-" + calNum) + " grid");
  newDiv.className = newClass;
  //  append div
  grid.appendChild(newDiv);

  // create date for above calendar
  const calendarDate = year + "年" + month + "月";
  // create span element
  let span = document.createElement("span");
  // apply class name
  span.className = "date";
  //  append span
  newDiv.appendChild(span);
  // add text to span
  span.textContent = calendarDate;

  // create the header row and populate with days of week
  for (let i of arrDaysOfWeek) {
    let cell = document.createElement("div");
    cell.innerHTML = i;
    // apply class name
    if (i === dayName) {
      // add class 'classDay' to day of week
      cell.className = "head classDay";
    } else {
      cell.className = "head";
    }; 
    newDiv.appendChild(cell);
  }

  // get day of week number for first day of month
  let day=new Date(year, month-1, 1).getDay();
    
  // create empty divs to precede first day
  //  add blank to cell since styles can't apply to null cells
  addCells(day, newDiv, "");
  // populate remaining divs with days of the month
  for (let dayNum of arrDayNums) {
    let cell = document.createElement("div");
    // add day number to cell
    cell.innerHTML = dayNum;
    
    // check if day is in arrClassDates
    if (arrClassDates.indexOf(dayNum) >=0) {
      // add class classDate
      cell.className = "cell classDate";
    } else {
      cell.className = "cell";
    };
    newDiv.appendChild(cell);
  }

  // add empty cells to fill out calendar grid
  // number of cells used is days in month + any empty cells for padding at start of month
  let cellsUsed = numDaysInMonth + day;
  // count how many cells needed
  let numRows;
  if (cellsUsed>35 && cellsUsed<42){
    numCells=(42 - cellsUsed)
    // number of rows used
    numRows=6;
  } else if (cellsUsed<=35){
    numCells=(35 - cellsUsed)
    // count number of rows used
    numRows=5;
  }
  addCells(numCells, newDiv, "");
  
  let span2 = document.createElement("span");
  newDiv.appendChild(span2);
  if (numRows==5){
    // add class to note so note will position correctly on calendars
    // with only 5 rows of cells
    span2.className = "note noteUp";
  } else {
    span2.className = "note";
  }
  
  span2.textContent = note;

}; // end calendar function

function addCells (numCells, grid, val) {
  for (let i=0; i<numCells; i++ ) {
    let cell = document.createElement("div");
      // add blank to empty div
      cell.innerHTML = val;
      // apply class name
      cell.className = "cell";
      
      grid.appendChild(cell);
  };
};

