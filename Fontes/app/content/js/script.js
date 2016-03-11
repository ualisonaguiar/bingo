var bingoApp = angular.module('bingoApp', ['ngRoute']);

bingoApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {       
    $routeProvider.when('/', {
        templateUrl : '/module/index/listagem.html',
        controller  : 'PesquisaBingoController'
    })
    .when('/cadastro', {
        templateUrl : '/module/index/cadastro.html',
        controller  : 'PesquisaBingoController'        
    })
    .when('/editar/:id_bingo', {
        templateUrl : '/module/index/editar.html',
        controller  : 'PesquisaBingoController'        
    })
    .when('/informacao/:id_bingo', {
        templateUrl : '/module/index/informacao-bingo.html',
        controller  : 'PesquisaBingoController'        
    })
    .otherwise ({redirectTo: '/'});
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });    
}]);

