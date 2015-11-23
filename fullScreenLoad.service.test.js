(() => {
    'use strict';
    
    let $rootScope;
    let fullScreenLoadService;

    describe('fullScreenLoadService', () => {

        beforeEach(module(ApplicationConfiguration.applicationModuleName));

        beforeEach(inject((_$rootScope_, _fullScreenLoadService_) => {
            fullScreenLoadService = _fullScreenLoadService_;
            $rootScope = _$rootScope_;
            spyOn($rootScope, '$broadcast');
        }));

        describe('toggleLoading', () => {
            it('Should broadcast toggleFullScreenLoad', () => {
                fullScreenLoadService.toggleLoading();
                expect($rootScope.$broadcast).toHaveBeenCalledWith('toggleFullScreenLoad');
            });
        });

        describe('updateLoadingStatus', () => {
            it('description', () => {
                const status = 'test status';
                fullScreenLoadService.updateLoadingStatus(status);
                expect($rootScope.$broadcast).toHaveBeenCalledWith('updateLoadingStatus', status);
            });
        });
    });
}());
