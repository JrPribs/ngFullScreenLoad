(() => {
    'use strict';

    describe('Assets', () => {
        beforeEach(module(ApplicationConfiguration.applicationModuleName));
        describe('pxFullScreenLoad', () => {
            let $compile, scope, element, $rootScope;
            beforeEach(inject((_$compile_, _$rootScope_) => {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
                scope = _$rootScope_.$new();
                element = '<px-full-screen-load></px-full-screen-load>';
                element = $compile(element)(scope);
                scope.$digest();
                scope.$on('toggleFullScreenLoad', () => scope.toggleLoading);
                scope.$on('updateLoadingStatus', (event, status) => scope.updateLoadingStatus(status));
            }));

            it('should set isLoadingFullScreen to false', () => {
                expect(scope.isLoadingFullScreen).toBe(false);
            });

            it('should set status to null', () => {
                expect(scope.status).toEqual(null);
            });

            describe('toggleFullScreenLoad', () => {
                it('should set isLoadingFullScreen to true on toggleFullScreenLoad event', () => {
                    $rootScope.$broadcast('toggleFullScreenLoad');
                    expect(scope.isLoadingFullScreen).toBe(true);
                });
            });

            describe('updateLoadingStatus', () => {
                it('should set status to true on updateLoadingStatus event', () => {
                    $rootScope.$broadcast('updateLoadingStatus', 'test status');
                    expect(scope.status).toBe('test status');
                });
            });
        });
    });
})();
