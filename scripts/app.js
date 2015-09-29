var app = angular.module("newBeginnings", ["ui.router"]);

app.config(function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
  requireBase: false
    });
    
    $stateProvider
        .state("main", {
        url: "/",
        
        templateUrl: "/templates/home.html"
    })
        .state("dogs", {
        url: "/dogs",
        templateUrl: "/templates/dogs.html"
    })
        .state("donate", {
        url: "/donate",
        templateUrl: "/templates/donate.html"
    })
        .state("volunteer", {
        url: "/volunteer",
        templateUrl: "/templates/volunteer.html"
    })
        .state("events", {
        url: "/events",
        templateUrl: "/templates/events.html"
    })
        .state("about", {
        url: "/about",
        templateUrl: "/templates/about.html"
    })
        .state("surrender", {
        url: "/owner-surrender",
        templateUrl: "/templates/surrender.html"
    });
});
