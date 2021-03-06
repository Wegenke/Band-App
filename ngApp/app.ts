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
            })
            .state('signUp',{
                url: '/signUp',
                templateUrl: 'ngApp/views/signUp.html',
                controller: bandApp.Controllers.SignInController,
                controllerAs: 'controller'
            })
            .state('create', {
                url:'/create',
                templateUrl: '/ngApp/views/create.html',
                controller: bandApp.Controllers.CreateController,
                controllerAs: 'controller'
            })
            .state('edit', {
                url:'/edit',
                templateUrl: '/ngApp/views/edit.html',
                controller: bandApp.Controllers.EditController,
                controllerAs: 'controller'
            })
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
