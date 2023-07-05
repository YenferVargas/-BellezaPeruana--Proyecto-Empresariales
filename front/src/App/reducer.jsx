import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);
axios.defaults.withCredentials = true;
const link = 'http://localhost:8369/';
const miAxios = axios.create({
    baseURL: link,
});


const actionTypes = {
    levels: {
        upgradeLvl0: 'LVL0_UPGRADE',
        setLvl0: 'LVL0_SET',
        upgradeLvl1: 'LVL1_UPGRADE',
        setLvl1: 'LVL1_SET',
        upgradeLvl2: 'LVL2_UPGRADE',
        setLvl2: 'LVL2_SET',
        upgradeLvl3: 'LVL3_UPGRADE',
        setLvl3: 'LVL3_SET',
        upgradeLvl4: 'LVL4_UPGRADE',
        setLvl4: 'LVL4_SET',
        upgradeLvl5: 'LVL5_UPGRADE',
        setLvl5: 'LVL5_SET',
    }
}

const reducerObject =  (state, actionTypes, payload = null) => ({
    // ------------------------------------------------------------------ //
    // ---------------------------   LEVELS   --------------------------- //
    // ------------------------------------------------------------------ // 
    [actionTypes.levels.upgradeLvl0]: {
        ...state,
        ...payload?.value,
    },
    [actionTypes.levels.setLvl0]: payload?.value,


    [actionTypes.levels.upgradeLvl1]: {
        ...state,
        [payload?.lvl1]: {
            ...state[payload?.lvl1],
            ...payload?.value,
        },
    },
    [actionTypes.levels.setLvl1]: {
        ...state,
        [payload?.lvl1]: payload?.value,
    },

    [actionTypes.levels.upgradeLvl2]: {
        ...state,
        [payload?.lvl1]: {
            ...state[payload?.lvl1] || {},
            [payload?.lvl2]: {
                ...state[payload?.lvl1]?.[payload?.lvl2] || {},
                ...payload?.value,
            }
        }
    },
    [actionTypes.levels.setLvl2]: {
        ...state,
        [payload?.lvl1]: {
            ...state[payload?.lvl1] || {},
            [payload?.lvl2]: payload?.value,
        }
    },

    [actionTypes.levels.upgradeLvl3]: {
        ...state,
        [payload?.lvl1]: {
            ...state[payload?.lvl1] || {},
            [payload?.lvl2]: {
                ...state[payload?.lvl1]?.[payload?.lvl2] || {},
                [payload?.lvl3]: {
                    ...state[payload?.lvl1]?.[payload?.lvl2]?.[payload?.lvl3] || {},
                    ...payload?.value,
                }
            }
        }
    },
    [actionTypes.levels.setLvl3]: {
        ...state,
        [payload?.lvl1]: {
            ...state[payload?.lvl1] || {},
            [payload?.lvl2]: {
                ...state[payload?.lvl1]?.[payload?.lvl2] || {},
                [payload?.lvl3]: payload?.value,
            }
        }
    },

    [actionTypes.levels.upgradeLvl4]: {
        ...state,
        [payload?.lvl1]: {
            ...state[payload?.lvl1] || {},
            [payload?.lvl2]: {
                ...state[payload?.lvl1]?.[payload?.lvl2] || {},
                [payload?.lvl3]: {
                    ...state[payload?.lvl1]?.[payload?.lvl2]?.[payload?.lvl3] || {},
                    [payload?.lvl4]: {
                        ...state[payload?.lvl1]?.[payload?.lvl2]?.[payload?.lvl3]?.[payload?.lvl4] || {},
                        ...payload?.value,
                    }
                }
            }
        }
    },
    [actionTypes.levels.setLvl4]: {
        ...state,
        [payload?.lvl1]: {
            ...state[payload?.lvl1] || {},
            [payload?.lvl2]: {
                ...state[payload?.lvl1]?.[payload?.lvl2] || {},
                [payload?.lvl3]: {
                    ...state[payload?.lvl1]?.[payload?.lvl2]?.[payload?.lvl3] || {},
                    [payload?.lvl4]: payload?.value,
                }
            }
        }
    },

    [actionTypes.levels.upgradeLvl5]: {
        ...state,
        [payload?.lvl1]: {
            ...state[payload?.lvl1] || {},
            [payload?.lvl2]: {
                ...state[payload?.lvl1]?.[payload?.lvl2] || {},
                [payload?.lvl3]: {
                    ...state[payload?.lvl1]?.[payload?.lvl2]?.[payload?.lvl3] || {},
                    [payload?.lvl4]: {
                        ...state[payload?.lvl1]?.[payload?.lvl2]?.[payload?.lvl3]?.[payload?.lvl4] || {},
                        [payload?.lvl5]: {
                            ...state[payload?.lvl1]?.[payload?.lvl2]?.[payload?.lvl3]?.[payload?.lvl4]?.[payload?.lvl5] || {},
                            ...payload?.value,
                        }
                    }
                }
            }
        }
    },
    [actionTypes.levels.setLvl5]: {
        ...state,
        [payload?.lvl1]: {
            ...state[payload?.lvl1] || {},
            [payload?.lvl2]: {
                ...state[payload?.lvl1]?.[payload?.lvl2] || {},
                [payload?.lvl3]: {
                    ...state[payload?.lvl1]?.[payload?.lvl2]?.[payload?.lvl3] || {},
                    [payload?.lvl4]: {
                        ...state[payload?.lvl1]?.[payload?.lvl2]?.[payload?.lvl3]?.[payload?.lvl4] || {},
                        [payload?.lvl5]: payload?.value,
                    }
                }
            }
        }
    },
    
})

const reducer = (state, action) => {
    const type = action.type;
    const payload = action.payload || null;

    if (reducerObject(state, actionTypes, payload)[type]) {
        return reducerObject(state, actionTypes, payload)[type];
    }
    return state;
}

class functions {
    constructor(d, s) {
        this.d = d;
        this.s = s;
    }

    helloWorld = () => {
        const url = 'api/hello_world/'
        miAxios.get(
            url
        ).then(response => {
            this.upgradeLvl1('main','message',response.data.message);
        }).catch(error => {
            console.log(error);
        })
    }

    validateRunMode = () => {
        if (link.includes('local') && link.includes('host') && link.includes(':')) {
            this.upgradeLvl0('prod_mode', false);
        } else {
            this.upgradeLvl0('prod_mode', true);
        }
    }

    alertSwal = props => {
        const { icon, message } = props;
        MySwal.fire({
            icon: icon,
            title: message,
        });
    }

    login = {
        singUp: (props) => {
            this.upgradeLvl1('loadings', 'singUp', true);
            const endpoint = 'api/user/guardar_usuario/';
            const formData = this.s.forms?.sing_up || {};
            miAxios.post(
                endpoint,
                formData
            ).then(response => {
                this.upgradeLvl1('loadings', 'singUp', false);
                let message = response.data.message;
                this.alertSwal({
                    icon: 'success',
                    message: message,
                });
                this.upgradeLvl1('forms', 'sing_up', {});
                this.upgradeLvl1('stateNavigation', 'location', '/');
                this.upgradeLvl1('stateNavigation', 'reload', !this.s.stateNavigation?.reload);
            }).catch(error => {
                this.upgradeLvl1('loadings', 'singUp', false);
                let message = error.response.data.message;
                this.alertSwal({
                    icon: 'error',
                    message: message,
                });
            });
        },
    }

    articulos = {
        crear: () => {
            const endpoint = 'api/articulos/create/';
            const data = this.s?.forms?.add_articulo || {};
            miAxios.post(
                endpoint,
                data
            ).then(response => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Articulo creado',
                });
                this.upgradeLvl1('stateNavigation', 'location', '/');
                this.upgradeLvl1('stateNavigation', 'reload', !this.s.stateNavigation?.reload);
            }).catch(error => {
                MySwal.fire({
                    icon: 'error',
                    title: 'Error al crear articulo',
                });
            });
        },
        editar: () => {
            const data = this.s?.forms?.editar_articulo || {};
            const id = data.id;
            const endpoint = `api/articulos/${id}/update/`;
            miAxios.post(
                endpoint,
                data
            ).then(response => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Articulo editado',
                });
                this.upgradeLvl1('stateNavigation', 'location', '/');
                this.upgradeLvl1('stateNavigation', 'reload', !this.s.stateNavigation?.reload);
            }).catch(error => {
                MySwal.fire({
                    icon: 'error',
                    title: 'Error al editar articulo',
                });
            });
        },
        eliminar: () => {
            const data = this.s?.forms?.editar_articulo || {};
            const id = data.id;
            const endpoint = `api/articulos/${id}/delete/`;
            miAxios.get(
                endpoint
            ).then(response => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Articulo eliminado',
                });
                this.upgradeLvl1('stateNavigation', 'location', '/');
                this.upgradeLvl1('stateNavigation', 'reload', !this.s.stateNavigation?.reload);
            }).catch(error => {
                MySwal.fire({
                    icon: 'error',
                    title: 'Error al eliminar articulo',
                });
            });
        },
        getProductos: () => {
            const endpoint = 'api/articulos/';
            miAxios.get(
                endpoint
            ).then(response => {
                const productos = response.data;
                this.upgradeLvl1('listaProductos', 'all', productos);
                this.upgradeLvl1('listaProductos', 'mostrar', productos);
                this.categorias.getCategorias();
            });
        }
    }

    categorias = {
        getCategorias: () => {
            const endpoint = 'api/categorias/';
            miAxios.get(
                endpoint
            ).then(response => {
                const categorias = response.data;
                this.upgradeLvl1('listaCategorias', 'all', categorias);
                this.upgradeLvl1('listaCategorias', 'mostrar', categorias);
                // this.upgradeLvl1('filtros', 'categorias', categorias);
            })
            
        }
    }

    compras = {
        deleteArticulo: index => {
            const registros = this.s.compras?.itemsAgregados || [];
            let newRegistros = registros.filter((item, i) => i !== index);
            this.upgradeLvl1('compras', 'itemsAgregados', [...newRegistros]);
        },
        cobrar: () => {
            const user = this.s.login?.user
            if (!user?.id) {
                MySwal.fire({
                    icon: 'error',
                    title: 'Porfavor Inicie Sesion para poder continuar con la compra',
                });
                return;
            }
            const endpoint = 'api/compras/save_compra/';
            const registros = this.s.compras?.itemsAgregados || [];

            miAxios.post(
                endpoint,
                {registros}
            )
            .then(response => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Compra realizada',
                });
                this.upgradeLvl1('stateNavigation', 'location', '/');
                this.upgradeLvl1('stateNavigation', 'reload', !this.s.stateNavigation?.reload);
                this.upgradeLvl1('compras', 'itemsAgregados', null);
            })
            .catch(error => {
                const message = error.response.data.message;
                MySwal.fire({
                    icon: 'error',
                    title: message,
                });
            });
        },
        getComprasPasadas: () => {
            const endPoint = 'api/compras/get_compras_pasadas/';
            miAxios.get(endPoint)
            .then(response => {
                const compras = response.data.compras;
                this.upgradeLvl2('compras', 'comprasPasadas', 'all', compras);
                this.upgradeLvl2('compras', 'comprasPasadas', 'show', compras);
            })
            .catch(error => {
                const message = error.response.data.message;
                document.url = '/';
                MySwal.fire({
                    icon: 'error',
                    title: message,
                });

                this.upgradeLvl1('stateNavigation', 'location', '/');
                this.upgradeLvl1('stateNavigation', 'reload', !this.s.stateNavigation?.reload);
            });
        }
    }

    // ------------------------------------------------------------------ //
    // ---------------------------   LEVELS   --------------------------- //
    // ------------------------------------------------------------------ //

    upgradeLvl0 = (field_name, value) => {
        const data = {
            value: {[field_name]: value},
        }
        this.d({ type: actionTypes.levels.upgradeLvl0, payload: data });
    }

    setLvl0 = (value) => {
        const data = {
            value: value,
        }
        this.d({ type: actionTypes.levels.setLvl0, payload: data });
    }

    resetLvl0 = () => {
        const data = {
            value: {},
        }
        this.d({ type: actionTypes.levels.setLvl0, payload: data });
    }

    upgradeLvl1 = (name1, field_name, value) => {
        const data = {
            lvl1: name1,
            value: {[field_name]: value},
        }
        this.d({ type: actionTypes.levels.upgradeLvl1, payload: data });
    }

    setLvl1 = (name1, value) => {
        const data = {
            lvl1: name1,
            value: value,
        }
        this.d({ type: actionTypes.levels.setLvl1, payload: data });
    }

    resetLvl1 = (name) => {
        const data = {
            lvl1: name,
            value: {},
        }
        this.d({ type: actionTypes.levels.setLvl1, payload: data });
    }

    upgradeLvl2 = (name1, name2, field_name, value) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            value: {[field_name]: value},
        }
        this.d({ type: actionTypes.levels.upgradeLvl2, payload: data });
    }

    setLvl2 = (name1, name2, value) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            value: value,
        }
        this.d({ type: actionTypes.levels.setLvl2, payload: data });
    }

    resetLvl2 = (name1, name2) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            value: {},
        }
        this.d({ type: actionTypes.levels.setLvl2, payload: data });
    }

    upgradeLvl3 = (name1, name2, name3, field_name, value) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            lvl3: name3,
            value: {[field_name]: value},
        }
        this.d({ type: actionTypes.levels.upgradeLvl3, payload: data });
    }

    setLvl3 = (name1, name2, name3, value) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            lvl3: name3,
            value: value,
        }
        this.d({ type: actionTypes.levels.setLvl3, payload: data });
    }

    resetLvl3 = (name1, name2, name3) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            lvl3: name3,
            value: {},
        }
        this.d({ type: actionTypes.levels.setLvl3, payload: data });
    }

    upgradeLvl4 = (name1, name2, name3, name4, field_name, value) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            lvl3: name3,
            lvl4: name4,
            value: {[field_name]: value},
        }
        this.d({ type: actionTypes.levels.upgradeLvl4, payload: data });
    }

    setLvl4 = (name1, name2, name3, name4, value) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            lvl3: name3,
            lvl4: name4,
            value: value,
        }
        this.d({ type: actionTypes.levels.setLvl4, payload: data });
    }

    resetLvl4 = (name1, name2, name3, name4) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            lvl3: name3,
            lvl4: name4,
            value: {},
        }
        this.d({ type: actionTypes.levels.setLvl4, payload: data });
    }

    upgradeLvl5 = (name1, name2, name3, name4, name5, field_name, value) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            lvl3: name3,
            lvl4: name4,
            lvl5: name5,
            value: {[field_name]: value},
        }
        this.d({ type: actionTypes.levels.upgradeLvl5, payload: data });
    }

    setLvl5 = (name1, name2, name3, name4, name5, value) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            lvl3: name3,
            lvl4: name4,
            lvl5: name5,
            value: value,
        }
        this.d({ type: actionTypes.levels.setLvl5, payload: data });
    }

    resetLvl5 = (name1, name2, name3, name4, name5) => {
        const data = {
            lvl1: name1,
            lvl2: name2,
            lvl3: name3,
            lvl4: name4,
            lvl5: name5,
            value: {},
        }
        this.d({ type: actionTypes.levels.setLvl5, payload: data });
    }

}

export { reducer, actionTypes, functions };