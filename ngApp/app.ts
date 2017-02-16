namespace bandApp {

    angular.module('bandApp', ['ui.router', 'ngResource', 'ngMaterial', 'ngMessages','ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: bandApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: bandApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('next', {
                url: '/nextevent',
                templateUrl: '/ngApp/views/next.html' 
            })
            .state('furure',{
                url: '/futureevents',
                templateUrl: '/ngApp/views/future.html'
            }

            )
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
