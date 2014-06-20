angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Featured Beers',  },
    { id: 1, title: 'Breweries Near Me', },
    { id: 2, title: 'All Beers', },
    { id: 3, title: 'All Breweries', },
    { id: 4, title: 'My Favorities', },
    { id: 5, title: 'Add a Brewery', }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
