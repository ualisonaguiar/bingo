/* global bingoApp */

bingoApp.controller('PesquisaBingoController', function ($scope, $location, BingoService, flashMessage, $routeParams) {
    $scope.numero = 50;
    $scope.booDisableButton = false;
    $scope.init = function() {
        $scope.getListagem();
        if ($routeParams.id_bingo !== undefined) {
            var callback = function (mixResult) {
                if (mixResult.status === true) {
                    var dataBingo = mixResult.data;
                    $scope.id_bingo = dataBingo.id_bingo;
                    $scope.descricao = dataBingo.ds_descricao;
                    $scope.numero = dataBingo.in_quantidade_bola_sorteada;
                    $scope.situacao = dataBingo.situacao;
                    $scope.booDisableButton = (($scope.situacao !== '') ? false : true);
                }
            };
            BingoService.getInformation(callback, $routeParams.id_bingo);
        }
    };

    $scope.salvar = function () {
        if (!$scope.cadastro.$valid) {
            return false;
        }
        var callback = function (mixResult) {
            if (mixResult.status === true) {
                flashMessage.success('Bingo cadastrado com sucesso.');
                $location.path('/');
            }
        };
        var arrData = {
            ds_descricao: $scope.descricao,
            in_quantidade_bola_sorteada : $scope.numero,
            id_bingo : $scope.id_bingo
        };
        BingoService.salvar(callback, arrData);
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

    $scope.excluir = function(bingo) {
        if (confirm("Você deseja realmente excluir este bingo?")) {
            var callback = function (mixResult) {
                if (mixResult.status == true) {
                    flashMessage.success('Bingo excluído com sucesso.');
                    $scope.getListagem();
                }
            }
            BingoService.excluir(callback, bingo.id_bingo);
        }
    };
    $scope.init();
});