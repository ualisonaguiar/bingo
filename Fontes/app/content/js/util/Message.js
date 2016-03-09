/* global bingoApp */

bingoApp.factory('flashMessage', function ($rootScope) {
    var alertService = {};
    $rootScope.alerts = [];
    
    alertService.success = function(strMessage) {
        this.add('success', strMessage);
    };
    
    alertService.info = function(strMessage) {
        this.add('info', strMessage);
    };
    
    alertService.warning = function(strMessage) {
        this.add('warning', strMessage);
    };
    
    alertService.error = function(strMessage) {
        this.add('danger', strMessage);
    };
    
    alertService.add = function (type, strMessage) {
        $rootScope.alerts.push({'type': type, 'msg': strMessage});
    };

    alertService.closeAlert = function (index) {
        alert(index);
    };
    return alertService;
});