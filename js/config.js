/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {

    $urlRouterProvider.otherwise("/login");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "views/login.html",
            data: { pageTitle: 'Entrar', specialClass: 'gray-bg' },
            controller: "indexCtrl",
            authenticate: false,
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-ladda',
                            files: ['js/plugins/ladda/spin.min.js', 'js/plugins/ladda/ladda.min.js', 'css/plugins/ladda/ladda-themeless.min.css','js/plugins/ladda/angular-ladda.min.js']
                        }
                    ]);
                }
            }
        })
        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
            data: { specialClass: 'skin-1' },
            authenticate: true,
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-ladda',
                            files: ['js/plugins/ladda/spin.min.js', 'js/plugins/ladda/ladda.min.js', 'css/plugins/ladda/ladda-themeless.min.css','js/plugins/ladda/angular-ladda.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                        },
                        {
                            name: 'ui.select',
                            files: ['js/plugins/ui-select/select.min.js', 'css/plugins/ui-select/select.min.css']
                        }
                    ]);
                }
            }
        })
        .state('index.index', {
            url: "/index",
            templateUrl: "views/index.html",
            controller: "Index",
            authenticate: true
        })
        .state('config', {
            abstract: true,
            url: "/config",
            data: { specialClass: 'skin-1' },
            templateUrl: "views/common/content.html",
            authenticate: true,
            permitidos:[1]
        })
        .state('config.usuarios', {
            url: "/usuarios",
            templateUrl: "views/usuarios/index.html",
            controller: "Usuarios",
            authenticate: true,
            permitidos:[1],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        }
                    ]);
                }
            }
        })
        .state('config.usuarionuevo', {
            url: "/usuarionuevo",
            templateUrl: "views/usuarios/agregar.html",
            controller: "UsuarioNuevo",
            authenticate: true,
            permitidos:[1],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.switchery',
                            files: ['css/plugins/switchery/switchery.css','js/plugins/switchery/switchery.js','js/plugins/switchery/ng-switchery.js']
                        }
                    ]);
                }
            }
        })
        .state('config.usuariosver', {
            url: "/usuariosver/:id",
            templateUrl: "views/usuarios/agregar.html",
            controller: "UsuarioNuevo",
            authenticate: true,
            permitidos:[1],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.switchery',
                            files:    ['css/plugins/switchery/switchery.css','js/plugins/switchery/switchery.js','js/plugins/switchery/ng-switchery.js']
                        }
                    ]);
                }
            }
        })
        .state('eventos', {
            abstract: true,
            url: "/eventos",
            data: { specialClass: 'skin-1' },
            templateUrl: "views/common/content.html",
            authenticate: true,
            permitidos:[1,2]
        })
        .state('eventos.index', {
            url: "/index",
            templateUrl: "views/eventos/index.html",
            controller: "Eventos",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['js/plugins/dataTables/angular-datatables.min.js']
                        }
                    ]);
                }
            }
        })
        .state('eventos.agregar', {
            url: "/agregar",
            templateUrl: "views/eventos/agregar.html",
            controller: "EventoNuevo",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })
        .state('eventos.editar', {
            url: "/editar/:idevento",
            templateUrl: "views/eventos/agregar.html",
            controller: "EventoNuevo",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        }
                    ]);
                }
            }
        })
        .state('videos', {
            abstract: true,
            url: "/videos",
            data: { specialClass: 'skin-1' },
            templateUrl: "views/common/content.html",
            authenticate: true,
            permitidos:[1,2]
        })
        .state('videos.index', {
            url: "/index",
            templateUrl: "views/videos/index.html",
            controller: "Videos",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        },
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            name: 'ui.switchery',
                            files: ['css/plugins/switchery/switchery.css','js/plugins/switchery/switchery.js','js/plugins/switchery/ng-switchery.js']
                        }
                    ]);
                }
            }
        })
        .state('videos.agregar', {
            url: "/agregar",
            templateUrl: "views/videos/agregar.html",
            controller: "VideoNuevo",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                        }
                    ]);
                }
            }
        })
        .state('videos.editar', {
            url: "/editar/:idvideo",
            templateUrl: "views/videos/agregar.html",
            controller: "VideoNuevo",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                        }
                    ]);
                }
            }
        })
        .state('galeria', {
            abstract: true,
            url: "/galeria",
            data: { specialClass: 'skin-1' },
            templateUrl: "views/common/content.html",
            authenticate: true,
            permitidos:[1,2]
        })
        .state('galeria.galeriaComercio', {
        url: "/galeriaComercio",
            templateUrl: "views/galeria/index.html",
        controller: "CtrlComercio",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        }
                    ]);
                }
            }
        })
        .state('galeria.galeriaDesarrollo', {
        url: "/galeriaDesarrollo",
        templateUrl: "views/galeriaDesarrollo/index.html",
        controller: "CtrlDesarrollo",
        authenticate: true,
        permitidos:[1,2],
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                    },
                    {
                        name: 'oitozero.ngSweetAlert',
                        files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                    }
                ]);
            }
        }
    })
        .state('galeria.galeriaEmpleo', {
        url: "/galeriaEmpleo",
        templateUrl: "views/galeriaEmpleo/index.html",
        controller: "CtrlEmpleo",
        authenticate: true,
        permitidos:[1,2],
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                    },
                    {
                        name: 'oitozero.ngSweetAlert',
                        files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                    }
                ]);
            }
        }
    })
        .state('galeria.galeriaFide', {
        url: "/galeriaFide",
        templateUrl: "views/galeriaFide/index.html",
        controller: "CtrlFide",
        authenticate: true,
        permitidos:[1,2],
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                    },
                    {
                        name: 'oitozero.ngSweetAlert',
                        files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                    }
                ]);
            }
        }
    })

        .state('galeria.galeriaIno', {
        url: "/galeriaIno",
        templateUrl: "views/galeriaIno/index.html",
        controller: "CtrlIno",
        authenticate: true,
        permitidos:[1,2],
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                    },
                    {
                        name: 'oitozero.ngSweetAlert',
                        files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                    }
                ]);
            }
        }
    })
        .state('galeria.agregar_comercio', {
            url: "/agregar_comercio",
            templateUrl: "views/galeria/agregar.html",
            controller: "CtrlComercioAgregar",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })

        .state('galeria.agregar_ino', {
        url: "/agregar_ino",
        templateUrl: "views/galeriaIno/agregar.html",
        controller: "CtrlInoAgregar",
        authenticate: true,
        permitidos:[1,2],
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                    },
                    {
                        files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                    },
                    {
                        name: 'oitozero.ngSweetAlert',
                        files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                    },
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                    }
                ]);
            }
        }
    })

        .state('galeria.agregar_empleo', {
        url: "/agregar_empleo",
        templateUrl: "views/galeriaEmpleo/agregar.html",
        controller: "CtrlEmpleoAgregar",
        authenticate: true,
        permitidos:[1,2],
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                    },
                    {
                        files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                    },
                    {
                        name: 'oitozero.ngSweetAlert',
                        files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                    },
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                    }
                ]);
            }
        }
    })
        .state('galeria.agregar_desarrollo', {
        url: "/agregar_desarrollo",
        templateUrl: "views/galeriaDesarrollo/agregar.html",
        controller: "CtrlDesarrolloAgregar",
        authenticate: true,
        permitidos:[1,2],
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                    },
                    {
                        files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                    },
                    {
                        name: 'oitozero.ngSweetAlert',
                        files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                    },
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                    }
                ]);
            }
        }
    })

        .state('galeria.agregar_fide', {
        url: "/agregar_fide",
        templateUrl: "views/galeriaFide/agregar.html",
        controller: "CtrlFideAgregar",
        authenticate: true,
        permitidos:[1,2],
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                    },
                    {
                        files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                    },
                    {
                        name: 'oitozero.ngSweetAlert',
                        files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                    },
                    {
                        name: 'datePicker',
                        files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                    }
                ]);
            }
        }
    })

        .state('slider', {
            abstract: true,
            url: "/slider",
            data: { specialClass: 'skin-1' },
            templateUrl: "views/common/content.html",
            authenticate: true,
            permitidos:[1,2]
        })
        .state('slider.index', {
            url: "/index",
            templateUrl: "views/slider/index.html",
            controller: "Slider",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        }
                    ]);
                }
            }
        })
        .state('slider.agregar', {
            url: "/agregar",
            templateUrl: "views/slider/agregar.html",
            controller: "SliderAgregar",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })
        .state('convocatorias', {
            abstract: true,
            url: "/convocatorias",
            data: { specialClass: 'skin-1' },
            templateUrl: "views/common/content.html",
            authenticate: true,
            permitidos:[1,2]
        })
        .state('convocatorias.index', {
            url: "/index",
            templateUrl: "views/convocatorias/index.html",
            controller: "Convocatorias",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        }
                    ]);
                }
            }
        })
        .state('convocatorias.agregar', {
            url: "/agregar",
            templateUrl: "views/convocatorias/agregar.html",
            controller: "ConvocatoriasAgregar",
            authenticate: true,
            permitidos:[1,2],
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            files: ['js/plugins/sweetalert/sweetalert.min.js', 'css/plugins/sweetalert/sweetalert.css']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['js/plugins/sweetalert/angular-sweetalert.min.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state, login, localStorageService, $location) {
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
            if (toState.authenticate && login.isLogin()){
                //usuario authenticado
                $rootScope.datos = localStorageService.get("datos_cms_cultura");
                $rootScope.nombre = $rootScope.datos.nombre;
                if(toState.name == "login"){
                    $state.go("eventos.index");
                }
                if(toState.permitidos){
                    if(toState.permitidos.indexOf($rootScope.datos.idtipo_usuario) == -1){
                        $state.go("eventos.index");
                        event.preventDefault();
                    }
                }
            }else if(toState.name == "login"){

            }else{
                $state.go("login");
                event.preventDefault();
            }
        });

        $rootScope.$state = $state;
    });
