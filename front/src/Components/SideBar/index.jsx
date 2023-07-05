import React from 'react';
import { AllContext } from '../../App/MyContext';

import { Fragment, useEffect } from 'react';
import './style/index.css';

const SideBarContent = props => {

    const { Link, s, f } = React.useContext(AllContext);

    const [abierto, setAbierto] = React.useState(true);

    const user = s.login?.user || null;
    const permisos = user?.permisos || [];

    const categorias = s.listaCategorias?.mostrar || [];
    const articulos = s.listaProductos?.all || [];
    const categorias_filtro = s.filtros?.categorias || [];
    const showCats = !!s.sidebar?.showCats;

    const filtrarCategoria = cat => {
        let cats = categorias_filtro;
        if (cats.includes(cat)) {
            cats = cats.filter(c => c !== cat);
        } else {
            cats.push(cat);
        }
        f.upgradeLvl1('filtros', 'categorias', [...cats]);
    }

    const filtrarItems = e => {
        let value = e.target.value;
        let items = [];
        if (!!value) {
            value = value.toLowerCase();
            items = (s.listaProductos?.all || []).filter(item => {
                const titulo = item.titulo.toLowerCase();
                const descripcion = item.descripcion.toLowerCase();
                return titulo.includes(value) || descripcion.includes(value);
            });
        } else {
            items = s.listaProductos?.all || [];
        }
        f.upgradeLvl1('listaProductos', 'mostrar', items);
    }

    React.useEffect(() => {
        const abr = ([false, true].includes(s?.mainContainer?.sideBar) ? s?.mainContainer?.sideBar : true) || !!s?.hovers?.sidebar;
        if (abr) {
            setAbierto(true);
         } else {
            setTimeout(() => {
                setAbierto(false);
            }, 200);
         }

    }, [
        s?.mainContainer?.sideBar, 
        s?.hovers?.sidebar
    ]);

    useEffect(() => {
        f.categorias.getCategorias();
    }, []);

    useEffect(() => {
        let new_articulos = [];
        if (categorias_filtro.length === 0) {
            new_articulos = articulos;
        } else {
            new_articulos = articulos.filter(art => {
                let cats = art.categorias || [];
                return cats.some(cat => categorias_filtro.includes(cat));
            });
        }
        f.upgradeLvl1('listaProductos', 'mostrar', new_articulos);
    }, [s.filtros?.categorias]);

    return (
        <Fragment>
            <p 
                className={`w-full mt-4 ${abierto ? 'text-center' : 'hidden'}`}>
                {!!s.login?.user?.nombre ?
                <span>
                    {s.login?.user?.nombre} {s.login?.user?.apellido}
                </span> :
                <span>
                    <Link to="login" className="text-[var(--my-minor)]">
                        Iniciar sesión
                    </Link>
                </span>
                }
            </p>

            <div className="w-full flex justify-center mt-2">
            <input 
                type="text"
                className="w-11/12 search-bar rounded py-1 px-3 text-black"
                placeholder="Buscar"
                onChange={filtrarItems}
                />
            </div>

            <div className="cats-filter w-full flex flex-wrap pl-3">
                <button
                    className={`w-full text-[var(--my-minor)] mt-4 ${abierto ? 'text-start' : 'hidden'}`}
                    onClick={e => {
                        e.preventDefault();
                        f.upgradeLvl1('sidebar', 'showCats', !showCats);
                    }}
                    >
                        {!!showCats ? '⬇️' : '➡️'} Categorias
                </button>
                {showCats &&
                <div className="flex w-full flex-col flex-start pl-4">
                    {categorias.map((c, i) => {
                        const incluida = categorias_filtro.includes(c);
                        return (
                        <p 
                            key={i}
                            className={`text-start ${incluida && 'text-green-700'} manita mt-1`}
                            onClick={() => {
                                filtrarCategoria(c);
                            }}
                            >
                            {incluida ? '✔️' : '❌'} {c}
                        </p>
                        )
                    })}
                </div>}
            </div>

            {permisos.includes('adm') && 
            <Fragment>
                <Link 
                    className={`w-full text-[var(--my-minor)] mt-4 pl-3 ${abierto ? 'text-start' : 'hidden'}`}
                    to="articulos/agregar"
                    >
                    Agregar Articulos
                </Link>

                <Link 
                    className={`w-full text-[var(--my-minor)] mt-4 pl-3 ${abierto ? 'text-start' : 'hidden'}`}
                    to="articulos/editar/"
                    >
                    {/* Agregar eliminar aqui mismo */}
                    Editar Articulos
                </Link>

            </Fragment>}
            {user && 
            <Fragment>
                <Link 
                    className={`w-full text-[var(--my-minor)] mt-4 pl-3 ${abierto ? 'text-start' : 'hidden'}`}
                    to="compras/anteriores/"
                    >
                    Compras Anteriores
                </Link>
            </Fragment>}

            <Link 
                className={`w-full text-[var(--my-minor)] mt-4 pl-3 ${abierto ? 'text-start' : 'hidden'}`}
                to="nosotros"
                >
                Nosotros
            </Link>
            <Link 
                className={`w-full text-[var(--my-minor)] mt-4 pl-3 ${abierto ? 'text-start' : 'hidden'}`}
                to="contacto"
                >
                Contacto
            </Link>
        </Fragment>
    )
}

const SideBar = () => {
    const { ls, Link, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();

    // console.log('categorias', categorias);
    // console.log('articulos', articulos);
    // console.log('categorias_filtro', categorias_filtro);

    // navbar abierto o escondido

    return (
        <React.Fragment>
            <div 
                className={`text-[var(--my-minor)] flex w-full flex-wrap justify-center items-start content-start`}
                id="sideBar"
                onMouseEnter={() => f.upgradeLvl1('hovers', 'sidebar', true)}
                onMouseLeave={() => f.upgradeLvl1('hovers', 'sidebar', false)}
                >
                <SideBarContent />
            </div>
        </React.Fragment>
    )
}

export { SideBar, SideBarContent };
