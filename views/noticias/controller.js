angular
.module('inspinia')
    .controller('Noticias', ['$rootScope', '$scope', '$state', '$http', '$stateParams', 'SweetAlert', 'DTOptionsBuilder', 'DTColumnDefBuilder', function($rootScope, $scope, $state, $http, $stateParams, SweetAlert, DTOptionsBuilder, DTColumnDefBuilder){
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('bFilter', false)
            .withOption('order', [0, 'desc'])
            .withLanguage({
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        });

        $scope.DTColumnDefs = [
            DTColumnDefBuilder.newColumnDef(3).notSortable()
        ];


        $scope.loading = true;
        $http.get('php/noticias.php').success(function(response) {
            $scope.noticias = response;
            $scope.loading = false;
        });

        $scope.activar = function(idnoticia){
            SweetAlert.swal({
                title: "AVISO",
                text: "¿Estas seguro de activar la noticia?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Si",
                cancelButtonText: "NO",
                closeOnConfirm: true,
                closeOnCancel: true },
                            function (isConfirm) {
                if (isConfirm) {
                    $http.get('php/noticias_activar.php?idnoticia=' + idnoticia).success(function(response){
                        $state.go($state.current, {}, {reload: true});
                    });
                }
            });
        }

        $scope.desactivar = function(idnoticia){
            SweetAlert.swal({
                title: "AVISO",
                text: "¿Estas seguro de desactivar la noticia?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Si",
                cancelButtonText: "NO",
                closeOnConfirm: true,
                closeOnCancel: true },
                            function (isConfirm) {
                if (isConfirm) {
                    $http.get('php/noticias_desactivar.php?idnoticia=' + idnoticia).success(function(response){
                        $state.go($state.current, {}, {reload: true});
                    });
                }
            });
        }
    }])
    .controller('NoticiaNueva', ['$rootScope', '$scope', '$http', '$stateParams', 'SweetAlert', '$state', 'Upload', function($rootScope, $scope, $http, $stateParams, SweetAlert, $state, Upload){
        var date = new Date();
        $scope.agregando=false;
        if(!$stateParams.idnoticia){
            $scope.forma = {
                idnoticia: 0,
                idusuario: $rootScope.datos.idusuario,
                titulo: "",
                contenido: "",
                fecha_noticia: date,
                activo: false,
                imagenes: [],
                rutas: []
            };
        }else{
            $scope.loading = true;
            $http.get('php/noticia.php?idnoticia='+$stateParams.idnoticia).success(function(response) {
                $scope.forma = response;
                $scope.forma.idusuario = $rootScope.datos.idusuario;
            });
        }

        $scope.agregar = function(){
            $scope.agregando=true;
            $scope.forma.fecha_noticia = moment($scope.forma.fecha_noticia).toDate();
            Upload.upload({
                url:'php/noticias_agregar.php',
                data: $scope.forma,
                method: 'POST'
            }).then(function(responce){
                console.log(responce.data);
                $scope.agregando=false;
                if(responce.data.status){
                    $state.go("noticias.index");
                }
            }, function (resp) {
                console.log('Error status: ' + resp.status);
                $scope.agregando=false;
            });
        }

        $scope.eliminarImg = function(idnoticia_imagen){
            $http.get('php/noticias_imagenes_eliminar.php?idnoticia_imagen='+idnoticia_imagen).success(function(response) {
                if(response.status){
                    $state.go($state.current, {}, {reload: true});
                }
            });
        }
    }])
