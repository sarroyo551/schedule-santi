let today = dayjs()
$('#currentDay').text(today.format('dddd, MMMM DD'));

// let dayWeek = today.format('[Today is] dddd')
// $('#currentDay').text(dayWeek)

//local storage??
// window.localStorage()

//possible card for each hour?
//9 - 5 only
$(function () {
  for (let i = 9; i < 18; i++) {
    let displayHour = i < 13 ? i : i - 12;
    let currentHour = dayjs().format('H')
    let timePeriod;
    let amPm = i < 12 ? 'am' : 'pm';
    if (i < currentHour) {
      timePeriod = 'past'
    } else if (i > currentHour) {
      timePeriod = 'future'
    } else {
      timePeriod = 'present'
    }
    console.log(i, displayHour, currentHour, timePeriod)

    let timeBlockDiv = $('<div>')
    timeBlockDiv.addClass(`row time-block ${timePeriod}`)
    timeBlockDiv.attr('id', `hour-${displayHour}`)

    timeBlockDiv.html(`<div class="col-2 col-md-1 hour text-center py-3">${displayHour + ' ' + amPm}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>`)

    $('#rootDiv').append(timeBlockDiv)
  }
  // Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.

    //What does `this` reference in the click listener (?)
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $('.saveBtn').click(function (e) {
      console.log(e.target.parentNode)
      alert('is this working 1')
    })
    // Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    // Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    // Add code to display the current date in the header of the page.
  });