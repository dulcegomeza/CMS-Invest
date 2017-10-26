angular
    .module('inspinia')
    .controller('Usuarios', ['$rootScope', '$location', '$scope', '$http', '$state', 'SweetAlert', function($rootScope, $location, $scope, $http, $state, SweetAlert){
        $scope.loading = true;
        $http.get('php/usuarios.php').success(function(response) {
            $scope.usuarios = response;
            $scope.loading = false;
        });

        $scope.desactivar = function (index) {
            SweetAlert.swal({
                title: "Desactivar Usuario",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Si",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },function (isConfirm) {
                if (isConfirm) {
                    $http.get('php/usuarios_borrar.php?id='+index).success(function(response) {
                        $state.go($state.current, {}, {reload: true});
                    });
                }
            });
        }
        $scope.activar = function (index) {
          SweetAlert.swal({
                  title: "Activar Usuario",
                  text: "",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#DD6B55",
                  confirmButtonText: "Si",
                  cancelButtonText: "No",
                  closeOnConfirm: true,
                  closeOnCancel: true },
              function (isConfirm) {
                  if (isConfirm) {
                    $http.get('php/usuarios_activar.php?id='+index).success(function(response) {
                        $state.go($state.current, {}, {reload: true});
                    });
                  }
              });
        }
    }])
    .controller('UsuarioNuevo', ['$rootScope', '$scope', '$location', '$http', '$stateParams', function($rootScope, $scope, $location, $http, $stateParams){
        $http.get('php/usuarios_tipos.php').success(function(response) {
            $scope.tipos = response;
        });
        var datosCorreo = "";
        $scope.errorCorreo = false;
        $scope.errorCorreoCant = false;
        if (!$stateParams.id){
            $scope.forma = {
                idusuario: 0,
                idtipo_usuario:0,
                nombre: "",
                correo: "",
                password: "",
                activo:false
            };
        } else {
            $scope.loading = true;
            $http.get('php/usuario.php?id='+$stateParams.id).success(function(response) {
                $scope.forma = response;
                datosCorreo = response.correo;
                $scope.loading = false;
            });
        }

        $scope.agregar = function(){
           $scope.loading = true;
            $http({
                method: 'POST',
                url: "php/usuarios_agregar.php",
                data: JSON.stringify($scope.forma)
            }).success(function (data, status, headers, config) {
                $scope.loading = false;
                top.location.href='#/config/usuarios';
            }).error(function (data, status, headers, config) {
                console.log(status)
            });
        };

        $scope.verificarCorreo = function(){
          if(datosCorreo != ""){
              if($scope.forma.correo == datosCorreo){
                  $scope.errorCorreo = false;
                  $scope.errorCorreoCant = false;
                  return;
              }
          }
            if(!$scope.forma.correo){
              $scope.errorCorreoCant = true;
              return;
          }else{
              $scope.errorCorreoCant = false;
              expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              if(!expr.test($scope.forma.correo)){
                  $scope.errorCorreoCant = true;
              }
              else{
                  $http({
                      method: 'GET',
                      url: "php/correo.php?correo="+$scope.forma.correo,
                      data: JSON.stringify($scope.forma)
                  }).success(function (data, status, headers, config) {
                      $scope.errorCorreo = data.correo;
                  }).error(function (data, status, headers, config) {
                      console.log(status);
                  });
              }
          }
        }
    }])
