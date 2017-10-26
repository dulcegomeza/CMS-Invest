angular
.module('inspinia')
    .controller('Eventos', ['$rootScope', '$scope', '$state', '$http', '$stateParams', 'SweetAlert', 'DTOptionsBuilder', 'DTColumnDefBuilder', function($rootScope, $scope, $state, $http, $stateParams, SweetAlert, DTOptionsBuilder, DTColumnDefBuilder){
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
            DTColumnDefBuilder.newColumnDef(5).notSortable()
        ];
        $scope.loading = true;
        $http.get('php/eventos.php').success(function(response) {
            $scope.eventos = response;
            $scope.loading = false;
        });

        $scope.obtener = function(idevento){
            $scope.evento_principal=idevento;
        }

        $scope.publicar = function(idevento,numero,principal){
            if(numero==1){
                var texto ="¿Esta seguro que desea publicar el evento?";
            }else{
                if(principal=='1'){
                    SweetAlert.swal("No se puede remover el evento principal", "Debe seleccionar otro evento como principal para poder removerlo");
                    return;
                }
                var texto ="¿Esta seguro que desea remover la publicacion del evento?";
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
                        url: "php/eventos_publicar.php?idevento="+idevento+"&numero="+numero,
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
            if($scope.evento_principal==undefined){
                SweetAlert.swal({title: "Debe seleccionar un evento",
                                confirmButtonColor: "#559bdd"});
                return;
            }
            SweetAlert.swal({
                title: "¿Esta seguro que desea este evento como el principal?",
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
                        url: "php/eventos_principal.php?idevento="+$scope.evento_principal,
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
    .controller('EventoNuevo', ['$rootScope', '$scope', '$http', '$stateParams', 'SweetAlert', '$state', 'Upload', function($rootScope, $scope, $http, $stateParams, SweetAlert, $state, Upload){
        $scope.center = {
            lat: 27.469592089206223,
            lng: -99.50154304504395,
            zoom: 15
        };

        $scope.controls = {
            fullscreen: {
                position: 'topleft'
            }
        };

        $scope.color = "#099f31";

        $scope.makiMarkerIcon = {
            type: 'makiMarker',
            icon: 'embassy',
            color: $scope.color,
            size: "l",
            accessToken: 'pk.eyJ1IjoiZGFzdGVyeSIsImEiOiJjajB2ZGoyc3UwMDE4MzJtcGtyemw1bXo3In0.aAiUO1_cexQiW--jFws_9A'
        };

        $scope.options = {
            floor: 0,
            ceil: 100,
            showTicks: 10,
            showTicksValues: true,
            keyboardSupport: true,
            translate: function(value, sliderId, label) {
                switch (label) {
                    case 'model':
                        return value + '%';
                    case 'high':
                        return value + '%';
                    default:
                        return value + '%';
                }
            }
        };

        $scope.events = {};

        $scope.markers = new Array();

        $scope.$on("leafletDirectiveMap.click", function(event, args){
            var leafEvent = args.leafletEvent;
            $scope.markers = new Array();
            $scope.markers.push({
                lat: leafEvent.latlng.lat,
                lng: leafEvent.latlng.lng,
                icon: $scope.makiMarkerIcon,
                message: leafEvent.latlng.lat + ", " + leafEvent.latlng.lng,
            });
            $scope.forma.latitud = leafEvent.latlng.lat;
            $scope.forma.longitud = leafEvent.latlng.lng;
        });

        $scope.layers = {
            baselayers: {
                googleRoadmap: {
                    name: 'Vista 1',
                    layerType: 'ROADMAP',
                    type: 'google'
                },
                googleHybrid: {
                    name: 'Vista 2',
                    layerType: 'HYBRID',
                    type: 'google'
                }
            }
        };


        var date = new Date();

        if(!$stateParams.idevento){
            $scope.forma = {
                idevento: 0,
                idusuario: $rootScope.datos.idusuario,
                nombre: "",
                tipo_evento: "Publico",
                lugar: "",
                detalles: "",
                latitud: 0,
                longitud: 0,
                fecha_evento: date,
                activo: true,
                imagenes: [],
                rutas: []
            };
        }else{
            $scope.loading = true;
            $http.get('php/evento.php?idevento='+$stateParams.idevento).success(function(response) {
                $scope.forma = response;
                $scope.forma.idusuario = $rootScope.datos.idusuario;
                $scope.center = {
                    lat: $scope.forma.latitud,
                    lng: $scope.forma.longitud,
                    zoom: 15
                };
                $scope.markers = new Array();
                $scope.markers.push({
                    lat: $scope.forma.latitud,
                    lng: $scope.forma.longitud,
                    icon: $scope.makiMarkerIcon,
                    message: $scope.forma.latitud + ", " + $scope.forma.longitud,
                });
                $scope.loading = false;
            });
        }

        $scope.ver = function(){
            console.log($scope.forma);
        }

        $scope.agregar = function(){
            $scope.forma.fecha_evento = moment($scope.forma.fecha_evento).toDate();
            Upload.upload({
                url:'php/eventos_agregar.php',
                data: $scope.forma,
                method: 'POST'
            }).then(function(responce){
                if(responce.data.status){
                    $state.go("eventos.index");
                }
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            });
        }

        $scope.eliminarImg = function(idevento_imagen){
            $http.get('php/eventos_imagenes_eliminar.php?idevento_imagen='+idevento_imagen).success(function(response) {
                if(response.status){
                    $state.go($state.current, {}, {reload: true});
                }
            });
        }

    }])
