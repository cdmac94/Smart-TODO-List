$(() => {



  const $newTaskForm = $(`
  <form action="/api/additem" method="post" id="new_task_form" class="new_task_form">
      <div class="new_task_form__field-wrapper">
        <label for="new_task_form__title">New Task</label>
        <input type="text" name="task" placeholder="New Task" id="new_task_form">
      </div>

        <div class="new_task_form__field-wrapper">
            <button>ADD</button>
        </div>

    </form>
  `);

  window.$newTaskForm = $newTaskForm;

  $newTaskorm.on('submit', function (event) {
    event.preventDefault();

    views_manager.show('none');

    const data = $(this).serialize();
    addTask(data)
    .then(() => {
      views_manager.show('tasklist');
    })
    .catch((error) => {
      console.error(error);
      views_manager.show('listings');
    })
  });

});
