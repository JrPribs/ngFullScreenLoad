(() => {
    'use strict';

    function fullScreenLoadService($rootScope) {
        return {
            toggleLoading() {
                $rootScope.$broadcast('toggleFullScreenLoad');
            },
            updateLoadingStatus(status) {
                $rootScope.$broadcast('updateLoadingStatus', status);
            }
        };
    }

    angular
        .module('assets')
        .service('fullScreenLoadService', fullScreenLoadService);
}());
