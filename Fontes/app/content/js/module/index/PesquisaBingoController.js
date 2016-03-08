bingoApp.controller('PesquisaBingoController', function ($scope) {
    $scope.numero = 0;
    $scope.salvar = function() {
        if (!$scope.cadastro.$valid) {
            return false;
        }
        console.log('ssa');
    }
});