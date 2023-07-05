import React from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);
axios.defaults.withCredentials = true;
const link = 'http://localhost:8369/';
const miAxios = axios.create({
    baseURL: link,
});

const updateInitialState = (f, ls) => {
    let classNames = {}
    let styles = {}
    if (ls.theme === 'white') {
        classNames = {
            general: 'bg-white text-black',
            text: 'text-black',
            bg: 'bg-white',
            textReversed: 'text-white',
            bgReversed: 'bg-black',
            less: 'black',
            more: 'white',
        }
        styles = {
            border: {
                border: '1px solid #212529',
            },
            borderReversed: {
                border: '1px solid #f8f9fa',
            },
            basic: {
                backgroundColor: '#f8f9fa',
                color: '#212529',
            },
            basicReversed: {
                backgroundColor: '#212529',
                color: '#f8f9fa',
            },
            borderBottom: {
                borderBottom: '1px solid #212529',
            },
            borderBottomReversed: {
                borderBottom: '1px solid #f8f9fa',
            },
            borderTop: {
                borderTop: '1px solid #212529',
            },
            borderTopReversed: {
                borderTop: '1px solid #f8f9fa',
            }
        }
    } else if (ls.theme === 'black') {
        classNames = {
            general: 'bg-black text-white',
            text: 'text-white',
            bg: 'bg-black',
            textReversed: 'text-black',
            bgReversed: 'bg-white',
            less: 'white',
            more: 'black',
        }
        styles = {
            border: {
                border: '1px solid #f8f9fa',
            },
            borderReversed: {
                border: '1px solid #212529',
            },
            basic: {
                backgroundColor: '#212529',
                color: '#f8f9fa',
            },
            basicReversed: {
                backgroundColor: '#f8f9fa',
                color: '#212529',
            },
            borderBottom: {
                borderBottom: '1px solid #f8f9fa',
            },
            borderBottomReversed: {
                borderBottom: '1px solid #212529',
            },
            borderTop: {
                borderTop: '1px solid #f8f9fa',
            },
            borderTopReversed: {
                borderTop: '1px solid #212529',
            }
        }
        
    }
    // f.updateClassNames(classNames);
    f.upgradeLvl0('classNames', classNames);
    // f.updateStyles(styles);
    f.upgradeLvl0('styles', styles);
    // f.changeLoading(false);
    f.upgradeLvl0('loading', false);
}


function useLocalStorage(itemName, initialValue, f) {
    const [state, dispatch] = React.useReducer(reducer, initialValue);

    const {} = state;

    // Action creators
    const onSave = (newItem)=>dispatch({ type: actionTypes.save, payload: newItem});

    React.useEffect(()=>{
        setTimeout( ()=>{
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if(!localStorageItem) {
                localStorage.setItem(itemName,JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
            onSave(parsedItem);
            updateInitialState(f, parsedItem);

            // load token from cookie if exists
            let token = null;
            token = document.cookie.replace(/(?:(?:^|.*;\s*)bpt\s*=\s*([^;]*).*$)|^.*$/, "$1");
            if(token || parsedItem.logged) {
                const url = 'api/user/validate_login/';
                miAxios.get(
                    url
                ).then(response => {
                    const user = response.data.user;
                    f.upgradeLvl1('loadings', 'init', false);
                    f.upgradeLvl1('forms', 'login', {});
                    f.upgradeLvl1('login', 'user', user);
                    f.upgradeLvl1('login', 'logged', true);

                    localStorage.setItem(itemName, JSON.stringify(parsedItem));
                    onSave(parsedItem);
                }).catch(error => {
                    f.upgradeLvl1('loadings', 'init', false);
                    const message = error.response?.data?.message || '';
                    f.upgradeLvl1('login', 'user', null);
                    f.upgradeLvl1('login', 'logged', false);
                    f.upgradeLvl1('login', 'message', 'Sesion Expirada');
                    document.cookie = `bpt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
                    localStorage.setItem(itemName, JSON.stringify(parsedItem));
                    onSave(parsedItem);
                });
            } else {
                f.upgradeLvl1('loadings', 'init', false);
            }
        } catch (error) {
            console.log(error);
        }
        },1000);
    },[]);

    const saveItem = (newItem) =>{
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName,stringifiedItem);
            onSave(newItem);
        } catch (error) {
            console.log(error);
        }
    }

    return [state, saveItem];
}

const actionTypes = {
    save: 'SAVE',
}

const reducerObject = (state, payload) =>({
    [actionTypes.save]:{
        ...payload
    },
});

const reducer = (state, action) =>{
    return reducerObject(state, action.payload)[action.type] || state;
}

class localFunctions {
    constructor(ld, ls, s, f, d) {
        this.ld = ld;
        this.ls = ls;
        this.s = s;
        this.f = f;
    }

    toggleTheme = () => {
        let clone_state = {
            ...this.ls,
            theme: (this.ls.theme === 'black') ? 'white' : 'black',
        };
        this.ld(clone_state);
        updateInitialState(this.f, clone_state);
        this.f.upgradeLvl2('modals', 'themes', 'changed', true);
    }

    login = () => {
        this.f.upgradeLvl1('loadings', 'login', true);
        const endpoint = 'api/user/login/';
        const formData = this.s.forms?.login || {};
        miAxios.post(
            endpoint,
            formData
        ).then(response => {
            this.f.upgradeLvl1('loadings', 'login', false);

            const user = response.data.user;
            const token = `${user.token}`;
            delete user.token;

            this.f.upgradeLvl1('forms', 'login', {});
            this.f.upgradeLvl1('login', 'user', user);
            this.f.upgradeLvl1('login', 'logged', true);
            this.f.upgradeLvl1('stateNavigation', 'location', '/');
            this.f.upgradeLvl1('stateNavigation', 'reload', !this.s.stateNavigation?.reload);

            const date = new Date();
            date.setTime(date.getTime() + (12 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = "bpt=" + token + ";" + expires + ";path=/";

        }).catch(error => {

            this.f.upgradeLvl1('loadings', 'login', false);
            let message = error.response.data.message;
            this.f.alertSwal({
                icon: 'error',
                message: message,
            });
        })
    }

    cerrarSesion = () => {
        this.f.upgradeLvl1('login', 'user', null);
        this.f.upgradeLvl1('login', 'logged', false);
        this.f.upgradeLvl1('login', 'message', 'Sesion cerrada');
        document.cookie = `bpt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    }
}

export { useLocalStorage, localFunctions }