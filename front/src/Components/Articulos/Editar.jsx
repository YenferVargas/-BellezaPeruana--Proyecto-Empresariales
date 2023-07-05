import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';
import { useFetcher } from 'react-router-dom';


function Editar() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    const articulos = s.listaProductos?.all || [];

    const inputClass = 'flex flex-wrap justify-center w-1/2 md:w-1/4 mt-4 mx-4';
    const labelClass = 'text-start pl-4 w-full mb-1';
    const inputFieldClass = 'w-full myinput pl-4 text-black';
    const dangerStyle = 'mt-0 text-[#f00] font-bold text-start pl-4';
    const successStyle = 'mt-0 text-[#0f0] font-bold text-start pl-4';


    const submitForm = e => {
        e.preventDefault();
        f.articulos.editar();
    }

    const cambiarEleccion = e => {
        const { value } = e.target;
        f.upgradeLvl1('articulos', 'articuloEditar', value);
        let articulo = articulos.find(e => e.id == value);
        articulo.categorias = articulo.categorias_str;
        f.upgradeLvl1('forms', 'editar_articulo', articulo);

    }

    useEffect(() => {
        f.articulos.getProductos();
    }, []);

    return (
        <Fragment>
            <div className='flex flex-wrap justify-center w-full text-[var(--my-minor)]'>
                <h2 className={`text-center w-full mt-3 font-bold text-3xl`}>
                    Editar Articulo
                </h2>
            </div>

            <div className={`${inputClass}`}>
                <select 
                    className={`${inputFieldClass}`}
                    name="articulos" 
                    id="articulos"
                    value={s.articulos?.articuloEditar || ''}
                    onChange={cambiarEleccion}
                    >
                    <option
                        value="">
                        Eliga un articulo a editar
                    </option>
                        {articulos.map(ele => {
                            return (
                                <option
                                    value={ele.id}
                                    key= {ele.id}>
                                    {ele.titulo}
                                </option>
                            )
                        })}
                </select>
            </div>

            <form 
                className='flex max-md:flex-col md:flex-wrap justify-around items-center md:justify-around w-full'
                onSubmit={submitForm}
                >
                    {/* titulo, descripcion, url, precio, cantidad */}

                {/* -------------------------------   Titulo   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="titulo"
                        className={`${labelClass}`}>Titulo</label>
                    <input
                        type="text"
                        name="titulo"
                        id="titulo"
                        placeholder='Titulo'
                        className={`${inputFieldClass}`}
                        value={s.forms?.editar_articulo?.titulo || ''}
                        onChange={e => f.upgradeLvl2('forms', 'editar_articulo', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Titulo   ------------------------------- */}

                {/* -------------------------------   Descripcion   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="descripcion"
                        className={`${labelClass}`}>Descripcion</label>
                    <input
                        type="text"
                        name="descripcion"
                        id="descripcion"
                        placeholder='Descripcion'
                        className={`${inputFieldClass}`}
                        value={s.forms?.editar_articulo?.descripcion || ''}
                        onChange={e => f.upgradeLvl2('forms', 'editar_articulo', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Descripcion   ------------------------------- */}

                {/* -------------------------------   Url   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="url"
                        className={`${labelClass}`}>Url de la imagen</label>
                    <input
                        type="text"
                        name="url"
                        id="url"
                        placeholder='Url'
                        className={`${inputFieldClass}`}
                        value={s.forms?.editar_articulo?.url || ''}
                        onChange={e => f.upgradeLvl2('forms', 'editar_articulo', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Url   ------------------------------- */}

                {/* -------------------------------   Precio   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="precio"
                        className={`${labelClass}`}>Precio</label>
                    <input
                        type="text"
                        name="precio"
                        id="precio"
                        placeholder='Precio'
                        className={`${inputFieldClass}`}
                        value={s.forms?.editar_articulo?.precio || ''}
                        onChange={e => f.upgradeLvl2('forms', 'editar_articulo', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Precio   ------------------------------- */}

                {/* -------------------------------   Cantidad   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="cantidad"
                        className={`${labelClass}`}>Cantidad</label>
                    <input
                        type="text"
                        name="cantidad"
                        id="cantidad"
                        placeholder='Cantidad'
                        className={`${inputFieldClass}`}
                        value={s.forms?.editar_articulo?.cantidad || ''}
                        onChange={e => f.upgradeLvl2('forms', 'editar_articulo', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Cantidad   ------------------------------- */}
                
                {/* -------------------------------   Categorias   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="categorias_str"
                        className={`${labelClass}`}>Categorias</label>
                    <input
                        type="text"
                        name="categorias_str"
                        id="categorias_str"
                        placeholder='Cantidad'
                        className={`${inputFieldClass}`}
                        value={s.forms?.editar_articulo?.categorias_str || ''}
                        onChange={e => f.upgradeLvl2('forms', 'editar_articulo', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Categorias   ------------------------------- */}


                {/* -------------------------------   Submit   ------------------------------- */}
                <div className={`w-full flex justify-around mt-6 text-black`}>
                    <button
                        type='submit'
                        className='w-1/3 btn bg-blue-700 hover:bg-blue-900'>
                        Editar
                    </button>

                    <span
                        disabled={!s.forms?.editar_articulo?.id ? true : false}
                        onClick={f.articulos.eliminar}
                        className='w-1/3 btn border border-red-700 hover:bg-red-700 manita'>
                        Eliminar
                    </span>
                </div>
                {/* -------------------------------   /Submit   ------------------------------- */}

            </form>
        </Fragment>
    )
}

export { Editar };
