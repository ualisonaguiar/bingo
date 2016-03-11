/* global bingoApp */

bingoApp.service('BingoService', function ($http) {
    this.strUrl= 'http://apigility.local/bingo';

    this.salvar = function (callback, arrData) {
        $http({
            method: 'post',
            url: this.strUrl,
            data: arrData
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
    
    this.excluir = function(callback, intIdBingo) {
        $http({
            method: 'delete',
            url: this.strUrl + '/' + intIdBingo,
        }).success(function (data) {
            return callback({status: true, data: data});
        }).error(function (data) {
            return callback({status: false, message: data.detail});
        });
    };
    
    this.getInformation = function(callback, intIdBingo) {
        $http({
            method: 'get',
            url: this.strUrl + '/' + intIdBingo,
        }).success(function (data) {
            return callback({status: true, data: data});
        }).error(function (data) {
            return callback({status: false, message: data.detail});
        });        
    };    
});