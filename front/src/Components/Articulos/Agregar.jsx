import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

function Agregar() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    const inputClass = 'flex flex-wrap justify-center w-1/2 md:w-1/4 mt-4 mx-4';
    const labelClass = 'text-start pl-4 w-full mb-1';
    const inputFieldClass = 'w-full myinput pl-4 text-black';
    const dangerStyle = 'mt-0 text-[#f00] font-bold text-start pl-4';
    const successStyle = 'mt-0 text-[#0f0] font-bold text-start pl-4';

    const submitForm = e => {
        e.preventDefault();
        f.articulos.crear();
    }

    return (
        <Fragment>
            <div className='flex flex-wrap justify-center w-full text-[var(--my-minor)]'>
                <h2 className={`text-center w-full mt-3 font-bold text-3xl`}>
                    Crear Articulo
                </h2>
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
                        value={s.forms?.add_articulo?.titulo || ''}
                        onChange={e => f.upgradeLvl2('forms', 'add_articulo', e.target.name, e.target.value)} />
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
                        value={s.forms?.add_articulo?.descripcion || ''}
                        onChange={e => f.upgradeLvl2('forms', 'add_articulo', e.target.name, e.target.value)} />
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
                        value={s.forms?.add_articulo?.url || ''}
                        onChange={e => f.upgradeLvl2('forms', 'add_articulo', e.target.name, e.target.value)} />
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
                        value={s.forms?.add_articulo?.precio || ''}
                        onChange={e => f.upgradeLvl2('forms', 'add_articulo', e.target.name, e.target.value)} />
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
                        value={s.forms?.add_articulo?.cantidad || ''}
                        onChange={e => f.upgradeLvl2('forms', 'add_articulo', e.target.name, e.target.value)} />
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
                        value={s.forms?.add_articulo?.categorias_str || ''}
                        onChange={e => f.upgradeLvl2('forms', 'add_articulo', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Categorias   ------------------------------- */}

                {/* -------------------------------   Submit   ------------------------------- */}
                <div className={`w-full flex justify-center mt-6 text-black`}>
                    <button
                        type='submit'
                        className='w-1/2 btn bg-blue-700 hover:bg-blue-900'>
                        Crear
                    </button>
                </div>
                {/* -------------------------------   /Submit   ------------------------------- */}

            </form>
        </Fragment>
    )
}

export { Agregar };
