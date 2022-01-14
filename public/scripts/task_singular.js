$(() => {
  window.task = {};
  let selectedTask = {};
  function createTaskList(input) {
    return `
    <article class="task">
        <section class="task__preview-image">
          <img src="${task.thumbnail_photo_url}" alt="house">
        </section>
        <section class="task__details">
          <h3 class="task__title">${task.title}</h3>
          <ul class="task__details">
            <li>number_of_bedrooms: ${property.number_of_bedrooms}</li>
            <li>number_of_bathrooms: ${property.number_of_bathrooms}</li>
            <li>parking_spaces: ${property.parking_spaces}</li>
          </ul>
          ${isReservation && !myListing ?
        `<p>${moment(property.start_date).format('ll')} - ${moment(property.end_date).format('ll')}</p>`
        : ``}
        </section>
      </article>
    `
  }

  // Pass data in this property listings page to four things
  // 1)

  window.task.createTaskList = createTaskList;


  $('body').on('submit', '#reso', function (event) {
    event.preventDefault();
    const propID = event.target[0].value;
    $('body').data('propID', propID)
    views_manager.show('makeReso')
    console.log($('body').data())
  })


});
