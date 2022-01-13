//utilized in Signup_form.js for registering new user with a signup form
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
}

