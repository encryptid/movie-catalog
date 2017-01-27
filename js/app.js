const app = angular.module('MovieApp', []);

app.controller('InputController', function ($scope, MovieService) {
    $scope.name = '';
    $scope.date = '';
    $scope.genre = '';

    $scope.movies = MovieService.getMovie();

    $scope.newMovie = function () {
        console.log('run newMovie');
        MovieService.addMovie($scope.name, $scope.date, $scope.genre);
        $scope.name = '';
        $scope.date = '';
        $scope.genre = '';

        //MovieService.getMovie();
    };
    $scope.liked = function (id) {
        console.log('running "liked"');
        MovieService.likedMovie(id);
        console.log(MovieService.getMovie());
        //$scope.movies.;
    };
    $scope.disliked = function (id) {
        console.log('running "disliked"');
        MovieService.dislikedMovie(id);
        console.log(MovieService.getMovie());
    }

})

app.factory('MovieService', function () {
    let movies = [];

    return {
        addMovie: function (name, date, genre) {
            console.log('addMovie running');
            movies.push({
                name: name,
                date: date,
                genre: genre,
                liked: null,
                // likeMovie: function () {
                //     return this.liked = true;
                //}
            });
            console.log(movies);
        },
        getMovie: function () {
            console.log('getMovie running');
            return movies;
        },
        likedMovie: function (id) {
            console.log('likeMovie service running');
            return movies[id].liked = true
        },
        dislikedMovie: function(id) {
            console.log('dislikedMovie service running');
            return movies[id].liked = false
        },
    };
});

// window.addEventListener('load', function () {
//     console.log('ready to rock');
// });