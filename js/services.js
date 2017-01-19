angular.module("StarWarsApp")
.service("FilmService", ["$http", function($http) {
  this.getFilms = function() {
    return [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi"
    ];
  }

  this.getFilmDetails = function(i) {
    if (i === 1) {
      return {
        year: 1977,
        title: "A New Hope",
        plot: "bla bla bla bla blb alba"
      }
    } else {
      return {
        year: 1977,
        title: "Other film",
        plot: "yadda yadda yadda yadda"
      }
    }
  }
}]);
