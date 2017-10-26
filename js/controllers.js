
angular
    .module('inspinia')
    .service("login", function($q, localStorageService) {

        this.isLogin = function(){
            if (localStorageService.get("token_cms_cultura")){
                return true;
            } else {
                return false;
            }
        };

        this.usuario = function(){
            var usuario = localStorageService.get("datos_cms_cultura");
            return usuario;
        };
    })
    .controller('MainCtrl', function($rootScope, $scope, localStorageService, $rootScope, $state) {
        $rootScope.datos = localStorageService.get('datos_cms_cultura');

        $scope.salir = function(){
            localStorageService.remove('datos_cms_cultura');
            localStorageService.remove('token_cms_cultura');
            $rootScope.datos = null;
            $state.go('login');
        };
    })

    /* LOGIN */
    .controller('indexCtrl', function($rootScope, $scope, $http, localStorageService, $state){
        if($rootScope.datos){
            $state.go('eventos.index');
        }

        $scope.forma = {
            user: "",
            pass: ""
        };

        $scope.login = function(){
            $scope.loading = true;

            $http({
                method: 'POST',
                url: "php/login.php",
                data: JSON.stringify($scope.forma)
            }).success(function (data, status, headers, config){
                $scope.loading = false;
                if (data.login){
                    localStorageService.set('datos_cms_cultura', data.datos);
                    localStorageService.set('token_cms_cultura', data.token);
                    $state.go('eventos.index');
                } else {
                    $scope.error = data.error;
                }
            }).error(function (data, status, headers, config) {
                console.log(status)
            });
        };
    })

    /* MODULO INDEX */
    .controller('Index', function($scope, localStorageService, $location){

    })


