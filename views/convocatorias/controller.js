angular
.module('inspinia')
    .controller('Convocatorias', ['$rootScope', '$scope', '$state', '$http', '$stateParams', 'SweetAlert', function($rootScope, $scope, $state, $http, $stateParams, SweetAlert){
        $scope.loading = true;
        $http.get('php/convocatorias.php').success(function(response) {
            $scope.convocatorias = response;
            $scope.loading = false;
        });

        $scope.publicar = function(idconvocatoria,numero){
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
                        url: "php/convocatoria_publicar.php?idconvocatoria="+idconvocatoria+"&numero="+numero,
                        data: JSON.stringify($scope.valores)
                    }).success(function (data, status, headers, config) {

                        $state.go($state.current, {}, {reload: true});

                    }).error(function (data, status, headers, config) {
                        console.log("error al publicar la imagen");
                    });
                }
            });
        }

        $scope.eliminar = function(idconvocatoria,ruta){
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
                        url: "php/convocatoria_eliminar.php?idconvocatoria="+idconvocatoria+"&ruta="+ruta,
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
    .controller('ConvocatoriasAgregar', ['$rootScope', '$scope', '$http', '$stateParams', 'SweetAlert', '$state', 'Upload', function($rootScope, $scope, $http, $stateParams, SweetAlert, $state, Upload){
        var date = new Date();

        if(!$stateParams.id){
            $scope.forma = {
                idconvocatoria: 0,
                idusuario: $rootScope.datos.idusuario,
                activo: 0,
                imagenes: [],
                rutas: []
            };
        }

        $scope.agregar = function(){
            Upload.upload({
                url:'php/convocatoria_agregar.php',
                data: $scope.forma,
                method: 'POST'
            }).then(function(responce){
                console.log(responce.data);
                if(responce.data.status){
                    $state.go("convocatorias.index");
                }
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            });
        }
    }])
