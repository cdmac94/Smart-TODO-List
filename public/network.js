

/*$(() => {
  $(function () {
    const $email = $('#email');
    const $password = $('#password');
    $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/api/users',
    data: '/api/users',
    success: function(users) {
      console.log(users);
      $.each(users, function(i, item) {
          console.log(users)
          });
    },
    error: function() {
      alert('error, user not found!')
    }
     });
     $('#userInfo').on('click', function() {
      const login = {
        email: $email.val(),
        password: $password.val()
      };
      $.ajax({
        type:'POST',
        url: 'api/users',
        data: login,
        success: function(newLogin) {
        }
      })
     });
    })
    */


/*       */
//Index/home page
//EAT
//GET data for "To Eat"
$(() => {
  $(function () {
    const $email = $('#email');
    const $password = $('#password');
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8080/api/users',
      data: '/api/users',
      success: function (users) {
        console.log(users);
        $.each(users, function (i, item) {
          console.log(users)
        });
      },
      error: function () {
        alert('error, user not found!')
      }
    });

    $('#userInfo').on('click', function () {
      const login = {
        email: $email.val(),
        password: $password.val()
      };
      $.ajax({
        type: 'POST',
        url: 'api/users',
        data: login,
        success: function (newLogin) {
        }
      })
    });
  })
//PUT for COMPLETE for "To Eat"

//PUT for COMPLETE for "To Eat"

//WATCH
//GET data for "To WATCH"

//PUT for COMPLETE for "To WATCH"

//PUT for COMPLETE for "To WATCH"


//WATCH
//GET data for "To READ"

//PUT for COMPLETE for "To READ"

//PUT for COMPLETE for "To READ"

//BUY
//GET data for "To BUY"

//PUT for COMPLETE for "To BUY"

//PUT for COMPLETE for "To BUY"

/*       */
//LOGIN PAGE
//POST email & password of user



/*       */
//NEW TASK PAGE
//POST  -> name, email, password, of new user.







//utilized in Signup_form.js for registering new user with a signup form
/*
function getMyDetails() {
  console.log("getMyDetails");
  return $.ajax({
    url: "/api/users/me",
  });
}

//utilized in header.js for logout for user with a log-out icon/button
//Jasper - done (need checking)
function logOut() {
  return $.ajax({
    method: "POST",
    url: "/api/logout/",
  })
}

//utilized in login_form.js for login for user
//Jasper - done (need checking)
function logIn(data) {
  return $.ajax({
    method: "POST",
    url: "/api/login/",
    data
  });
}

//utilized in signUp_form.js for signing up new user
//Jasper - done (need checking)
function signUp(data) {
  return $.ajax({
    method: "POST",
    url: "/api/users/newUser",
    data
  });
}


//related to helper functions in routes folder
function getAllTasks(params) {
  let url = "/api/users/:id";
  if (params) {
    url += "?" + params;
  }
  return $.ajax({
    url,
  });
}
//related to helper functions in routes folder
function getAllReservations() {
  let url = "/api/reservations";
  return $.ajax({
    url,
  });
}

//related to new_task
const submitProperty = function(data) {
  return $.ajax({
    method: "POST",
    url: "/api/task",
    data,
  });
*/

