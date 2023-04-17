let today = dayjs()
$('#currentDay').text(today.format('dddd, MMMM DD'));

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

    let valueFromStorage = localStorage.getItem(`hour-${displayHour}`)

    console.log(displayHour, valueFromStorage)
    let timeBlockDiv = $('<div>')
    timeBlockDiv.addClass(`row time-block ${timePeriod}`)
    timeBlockDiv.attr('id', `hour-${displayHour}`)

    timeBlockDiv.html(`<div class="col-2 col-md-1 hour text-center py-3">${displayHour + ' ' + amPm}</div>
    <textarea class="col-8 col-md-10 description" rows="3">${valueFromStorage ? valueFromStorage : ''}</textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>`)

    $('#rootDiv').append(timeBlockDiv)
  }
    $('.saveBtn').click(function (e) {
      console.log(e.target.parentNode)
      const clickedDivId = e.target.parentNode.id
      const userInput = $(`#${clickedDivId} > textarea`).val()
      localStorage.setItem(clickedDivId, userInput)
    })
  });