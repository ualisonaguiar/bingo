var bingoApp = angular.module('bingoApp', ['ngRoute']);
bingoApp.value('version', '1.0');

bingoApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl : '/module/inicial/view/listagem.html',
        controller  : 'PesquisaBingoController'
    })
    .when('/cadastro', {
        templateUrl : '/module/inicial/view/cadastro.html',
        controller  : 'PesquisaBingoController'
    })
    .when('/editar/:id_bingo', {
        templateUrl : '/module/inicial/view/editar.html',
        controller  : 'PesquisaBingoController'
    })
    .when('/informacao/:id_bingo', {
        templateUrl : '/module/inicial/view/informacao-bingo.html',
        controller  : 'PesquisaBingoController'
    })
    .otherwise ({redirectTo: '/'});
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

