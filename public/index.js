$(() => {
  getAllListings().then(function( json ) {
    task_list.addProperties(json.properties);
    views_manager.show('tasks');
  });
});
