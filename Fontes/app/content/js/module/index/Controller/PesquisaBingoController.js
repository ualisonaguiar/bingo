/* global bingoApp */

bingoApp.controller('PesquisaBingoController', function ($scope, $location, BingoService, flashMessage) {
    $scope.numero = 50;
    $scope.salvar = function () {
        if (!$scope.cadastro.$valid) {
            return false;
        }
        var callback = function (mixResult) {
            if (mixResult.status === true) {
                flashMessage.success('Bingo cadastrado com sucesso.')
                $location.path('/inicial');
            }
        }
        BingoService.salvar(callback, $scope.descricao, $scope.numero);
    };
    
    $scope.getListagem = function() {
        var callback = function (mixResult) {
            var arrBingo = mixResult.data._embedded.bingo;
            if (arrBingo.length !== 0) {
                $scope.booOcultaGrid = false;
                $scope.arrBingo = arrBingo;
            }
        }
        $scope.booOcultaGrid = true;
        BingoService.getListagem(callback);
    };
    
    
    $scope.getListagem();
});