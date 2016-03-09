var bingoApp = angular.module('bingoApp', ['ngRoute']);

bingoApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'module/index/listagem.html',
        controller  : 'PesquisaBingoController'
    })
    .when('/inicial', {
        templateUrl : 'module/index/listagem.html',
        controller  : 'PesquisaBingoController'
    })
    .when('/cadastro', {
        templateUrl : 'module/index/cadastro.html',
        controller  : 'PesquisaBingoController'        
    });
});
