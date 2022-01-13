$(() => {
  window.header = {};

  const $pageHeader = $('#page-header');
  let currentUser = null;
  function updateHeader(user) {
    currentUser = user;
    $pageHeader.find("#page-header__user-links").remove();
    let userLinks;

    if (!user) {
      userLinks = `
      <nav id="page-header__user-links" class="page-header__user-links">
      <div>
      */ Logo/ title
      </div>
        <ul>
          <li class="login_button">Log In</li>
          <li class="sign-up_button">Sign Up</li>
        </ul>
      </nav>
      `
    } else {
      userLinks = `
      <nav id="page-header__user-links" class="page-header__user-links">
        <ul>
          <div>
          */ Logo/ title
          </div>
          <li class="create_task_button">Create Task</li>
          <li class="my_task_button" id="all">All Tasks</li>
          <li class="my_task_button" id="to_eat">To Eat</li>
          <li class="my_task_button" id="to_watch">To Watch</li>
          <li class="my_task_button" id="to_read">To Read</li>
          <li class="my_task_button" id="to_buy">To Buy</li>

          <li class="logout_button">Log Out</li>
        </ul>
      </nav>
      `
    }

    $pageHeader.append(userLinks);
  }

  window.header.update = updateHeader;

  getMyDetails()
    .then(function (json) {
      updateHeader(json.user);
    });

  $("header").on("click", '#all', function () {
    taks_list.clearListings();
    getAllTasks()
      .then(function (json) {
        propertyListings.addProperties(json.reservations, true);
        views_manager.show('task');
      })
      .catch(error => console.error(error));
  });

  $("header").on("click", '#to_buy', function () {
    task_list.clearListings();
    getBuyList(user.id)
      .then(function (json) {
        propertyListings.addProperties(json.reservations, true);
        views_manager.show('listings');
      })
      .catch(error => console.error(error));
  });

  $("header").on("click", '#to_eat', function () {
    task_list.clearListings();
    getEatList()
      .then(function (json) {
        propertyListings.addProperties(json.reservations, true);
        views_manager.show('listings');
      })
      .catch(error => console.error(error));
  });

  $("header").on("click", '#to_watch', function () {
    task_list.clearListings();
    getWatchList()
      .then(function (json) {
        propertyListings.addProperties(json.reservations, true);
        views_manager.show('listings');
      })
      .catch(error => console.error(error));
  });

  $("header").on("click", '#to_read', function () {
    task_list.clearListings();
    getReadList()
      .then(function (json) {
        propertyListings.addProperties(json.reservations, true);
        views_manager.show('listings');
      })
      .catch(error => console.error(error));
  });

  $("header").on('click', '.login_button', () => {
    app.show('logIn');
  });
  $("header").on('click', '.sign-up_button', () => {
    app.show('signUp');
  });
  $("header").on('click', '.logout_button', () => {
    logOut().then(() => {
      header.update(null);
    });
  });

  $('header').on('click', '.new_task_button', function () {
    views_manager.show('newTask');
  });

});
