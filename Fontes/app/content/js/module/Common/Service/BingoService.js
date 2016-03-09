/* global bingoApp */

bingoApp.service('BingoService', function ($http) {
    this.strUrl= 'http://apigility.local/bingo';

    this.salvar = function (callback, strDescricao, intBola) {
        $http({
            method: 'post',
            url: this.strUrl,
            data: {
                ds_descricao: strDescricao,
                in_quantidade_bola_sorteada : intBola
            }
        }).success(function (data) {
            return callback({status: true, data: data});
        }).error(function (data) {
            return callback({status: false, message: data.detail});
        });
    };
    
    this.getListagem = function (callback) {
        $http({
            method: 'get',
            url: this.strUrl,
        }).success(function (data) {
            return callback({status: true, data: data});
        }).error(function (data) {
            return callback({status: false, message: data.detail});
        });        
    };
});