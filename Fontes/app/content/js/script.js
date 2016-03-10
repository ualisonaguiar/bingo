var bingoApp = angular.module('bingoApp', ['ngRoute']);

bingoApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {   
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
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
    .otherwise ({redirectTo: '/'});
}]);

