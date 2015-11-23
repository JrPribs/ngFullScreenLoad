(() => {
    'use strict';

    function pxFullScreenLoad() {
        return {
            templateUrl: 'asset/client/views/fullScreenLoad.client.view.html',
            restrict: 'AE',
            link: link
        };

        function link(scope, element) {
            scope.isLoadingFullScreen = false;
            scope.status = null;
            scope.$on('toggleFullScreenLoad', () => toggleLoading());
            scope.$on('updateLoadingStatus', (event, status) => updateLoadingStatus(status));
            scope.toggleLoading = toggleLoading;
            scope.updateLoadingStatus = updateLoadingStatus;

            function updateLoadingStatus(status) {
                scope.status = status;
            }

            function toggleLoading() {
                scope.isLoadingFullScreen = !scope.isLoadingFullScreen;
            }
        }
    }

    angular
        .module('assets')
        .directive('pxFullScreenLoad', pxFullScreenLoad);
})();
