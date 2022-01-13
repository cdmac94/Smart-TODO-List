$(() => {

  const $Tasks = $(`
  <section class="property-listings" id="property-listings">
      <p>Loading...</p>
    </section>
  `);
  window.$propertyListings = $propertyListings;

  window.propertyListings = {};

  function addTask(task) {
    $Tasks.append(task);
  }
  function clearTasks() {
    $Tasks.empty();
  }
  window.propertyListings.clearListings = clearListings;

  function addProperties(properties, isReservation = false) {
    clea();
    for (const propertyId in properties) {
      const property = properties[propertyId];
      const listing = propertyListing.createListing(property, isReservation);
      addTask(task);
    }
  }
  window.propertyListings.addProperties = addProperties;

});
