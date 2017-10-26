angular
.module('inspinia')
    .controller('Videos', ['$rootScope', '$scope', '$state', '$http', '$uibModal', '$stateParams', 'SweetAlert', function($rootScope, $scope, $state, $http, $uibModal, $stateParams, SweetAlert){
        $scope.loading = true;
        $http.get('php/videos.php').success(function(response) {
            $scope.videos = response;
            $scope.loading = false;
        });

        $scope.obtener = function(idvideo){
            $scope.video_principal=idvideo;
        }

        $scope.publicar = function(idvideo,numero,principal){
            if(numero==1){
                var texto ="¿Esta seguro que desea publicar el video?";
            }else{
                if(principal=='1'){
                    SweetAlert.swal("No se puede remover el video principal", "Debe seleccionar otro video como principal para poder removerlo");
                    return;
                }
                var texto ="¿Esta seguro que desea remover la publicacion del video?";
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
                        url: "php/videos_publicar.php?idvideo="+idvideo+"&numero="+numero,
                        data: JSON.stringify($scope.valores)
                    }).success(function (data, status, headers, config) {

                        $state.go($state.current, {}, {reload: true});

                    }).error(function (data, status, headers, config) {
                        console.log("error");
                    });
                }
            });
        }

        $scope.principal = function(){
            if($scope.video_principal==undefined){
                SweetAlert.swal({title:"Debe seleccionar un video",
                                 confirmButtonColor: "#559bdd"});
                return;
            }
            SweetAlert.swal({
                title: "¿Esta seguro que desea este video como el principal?",
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
                        url: "php/videos_principal.php?idvideo="+$scope.video_principal,
                        data: JSON.stringify($scope.valores)
                    }).success(function (data, status, headers, config) {

                        $state.go($state.current, {}, {reload: true});

                    }).error(function (data, status, headers, config) {
                        console.log("error ");
                    });
                }
            });
        }
    }])
    .controller('VideoNuevo', ['$rootScope', '$scope', '$http', '$stateParams',  '$uibModal', '$state', 'toaster', function($rootScope, $scope, $http, $stateParams,  $uibModal, $state, toaster){

        if(!$stateParams.idvideo){
            $scope.forma = {
                idvideo: 0,
                idusuario: $rootScope.datos.idusuario,
                titulo: "",
                url: ""
            };
        }else{
            $scope.loading = true;
            $http.get('php/video.php?idvideo='+$stateParams.idvideo).success(function(response) {
                $scope.forma = response;
                $scope.loading = false;
            });
        }


        function verToaster(texto) {
            toaster.pop({
                type: 'error',
                title: 'ERROR',
                body: texto,
                showCloseButton: false,
                timeout: 2400
            });
        }


        $scope.agregar = function(){

            var n =$scope.forma.url.search("facebook.com/");
            if(n == -1){
                verToaster("Debe ingresar la  url de un video de Facebook");
                return;
            }
            var restante = $scope.forma.url.indexOf("&");
            if(restante !=-1){
                $scope.forma.c=$scope.forma.url.substr(0,restante);
            }else{
                $scope.forma.c=$scope.forma.url;
            }


            $http({
                method: 'POST',
                url: "php/videos_agregar.php",
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined},
                data: JSON.stringify($scope.forma)
            }).success(function (data, status, headers, config) {
                if (data.error) {
                    verToaster(data.error);
                }else{
                    $state.go("videos.index");
                }
            }).error(function (data, status, headers, config) {
                console.log(status)
            });
        };

    }])
