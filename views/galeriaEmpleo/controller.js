angular
.module('inspinia')
    .controller('CtrlEmpleo', ['$rootScope', '$scope', '$state', '$http', '$stateParams', 'SweetAlert', function($rootScope, $scope, $state, $http, $stateParams, SweetAlert){
        $scope.loading = true;
        $http.get('php/galeria.php', {
            params:{
                iddireccion:3
            }
        }).success(function(response) {
            $scope.galeria = response;
            $scope.loading = false;
        });

        $scope.publicar = function(idgaleria,numero){
            if(numero==1){
                var texto ="¿Esta seguro que desea publicar la imagen?";
            }else{
                var texto ="¿Esta seguro que desea remover la imagen?";
            }
            SweetAlert.swal({
                title: texto,
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#559bdd",
                confirmButtonText: "Si",
                cancelButtonText: "NO",
                closeOnConfirm: true,
                closeOnCancel: true },
                            function (isConfirm) {
                if (isConfirm){
                    $http({
                        method: 'POST',
                        url: "php/galeria_publicar.php?idgaleria="+idgaleria+"&numero="+numero,
                        data: JSON.stringify($scope.valores)
                    }).success(function (data, status, headers, config) {

                        $state.go($state.current, {}, {reload: true});

                    }).error(function (data, status, headers, config) {
                        console.log("error al publicar la imagen");
                    });
                }
            });
        }

        $scope.eliminar = function(idgaleria,ruta){
            SweetAlert.swal({
                title: "¿Esta seguro que desea eliminar la imagen?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#559bdd",
                confirmButtonText: "Si",
                cancelButtonText: "NO",
                closeOnConfirm: true,
                closeOnCancel: true },
                            function (isConfirm) {
                if (isConfirm){
                    $http({
                        method: 'POST',
                        url: "php/galeria_eliminar.php?idgaleria="+idgaleria+"&ruta="+ruta,
                        data: JSON.stringify($scope.valores)
                    }).success(function (data, status, headers, config) {

                        $state.go($state.current, {}, {reload: true});

                    }).error(function (data, status, headers, config) {
                        console.log("error al eliminar la imagen");
                    });
                }
            });
        }
    }])
    .controller('CtrlEmpleoAgregar', ['$rootScope', '$scope', '$http', '$stateParams', 'SweetAlert', '$state', 'Upload', function($rootScope, $scope, $http, $stateParams, SweetAlert, $state, Upload){
        var date = new Date();

        if(!$stateParams.idgaleria){
            $scope.forma = {
                idgaleria: 0,
                idusuario: $rootScope.datos.idusuario,
                activo: 0,
                imagenes: [],
                rutas: [],
                iddireccion:3
            };
        }

        $scope.agregar = function(){
            Upload.upload({
                url:'php/galeria_agregar.php',
                data: $scope.forma,
                method: 'POST'
            }).then(function(responce){
                if(responce.data.status){
                    $state.go("galeria.galeriaEmpleo");
                }
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            });
        }
    }])
