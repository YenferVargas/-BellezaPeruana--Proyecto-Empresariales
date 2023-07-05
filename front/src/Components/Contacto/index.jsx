import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

import './style/index.css';

import nosotrosImg from '../../static/img/nosotros.jpg';

const Contacto = () => {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    useEffect(() => {
        f.upgradeLvl1('shows', 'sidebar', false);
        f.upgradeLvl1('mainContainer', 'sideBar', false);
    }, []);

    return (
        <Fragment>
            <div className="w-full flex flex-row justify-center contacto">
                {/* -------------------------------------------   IZQUIERDA   ------------------------------------------- */}
                <div className="flex flex-row justify-end px-8 py-12 w-7/12 ">
                    <div className="flex flex-col px-6 py-12 form-big-container w-2/3 rounded-2xl">
                        <p className='text-[var(--my-pink-dark)] font-bold text-xl'>
                            Ponerse en Contacto
                        </p>
                        <p className='font-bold text-2xl mt-2'>
                            Escribenos tu mensaje
                        </p>

                        <form 
                            onSubmit={e => {
                                e.preventDefault();
                                f.alertSwal({
                                    icon: "success",
                                    message: "Mensaje Enviado",
                                });
                            }}
                            className='w-full border border-[var(--my-minor)] mt-4 px-4 py-8 rounded-2xl'>

                            {/* ----------------------------------------   NOMBRE, ASUNTO   ---------------------------------------- */}
                            <div className="flex w-full flex-row justify-center">
                                {/* -------------------------------   Nombre   ------------------------------- */}
                                <div className={`w-1/2 px-5 flex flex-col mb-6`}>
                                    <label 
                                        htmlFor="nombre"
                                        className={`w-full px-3 text-start`}>Tu Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        id="nombre"
                                        placeholder='nombre'
                                        className={`w-full px-3 text-start rounded-lg py-2 mt-1 border-2 border-[var(--my-minor)]`}
                                        value={s.forms?.contactUs?.nombre || ''}
                                        onChange={e => f.upgradeLvl2('forms', 'contactUs', e.target.name, e.target.value)} />
                                </div>
                                {/* -------------------------------   /Nombre   ------------------------------- */}
                                {/* -------------------------------   Asunto   ------------------------------- */}
                                <div className={`w-1/2 px-5 flex flex-col mb-6`}>
                                    <label 
                                        htmlFor="asunto"
                                        className={`w-full px-3 text-start`}>Asunto</label>
                                    <input
                                        type="text"
                                        name="asunto"
                                        id="asunto"
                                        placeholder='asunto'
                                        className={`w-full px-3 text-start rounded-lg py-2 mt-1 border-2 border-[var(--my-minor)]`}
                                        value={s.forms?.contactUs?.asunto || ''}
                                        onChange={e => f.upgradeLvl2('forms', 'contactUs', e.target.name, e.target.value)} />
                                </div>
                                {/* -------------------------------   /Asunto   ------------------------------- */}
                            </div>
                            {/* ----------------------------------------   /NOMBRE, ASUNTO   ---------------------------------------- */}

                            {/* ----------------------------------------   CORREO, TELEFONO   ---------------------------------------- */}
                            <div className="flex w-full flex-row justify-center">
                                {/* -------------------------------   Correo   ------------------------------- */}
                                <div className={`w-1/2 px-5 flex flex-col mb-6`}>
                                    <label 
                                        htmlFor="correo"
                                        className={`w-full px-3 text-start`}>Su Correo</label>
                                    <input
                                        type="text"
                                        name="correo"
                                        id="correo"
                                        placeholder='correo'
                                        className={`w-full px-3 text-start rounded-lg py-2 mt-1 border-2 border-[var(--my-minor)]`}
                                        value={s.forms?.contactUs?.correo || ''}
                                        onChange={e => f.upgradeLvl2('forms', 'contactUs', e.target.name, e.target.value)} />
                                </div>
                                {/* -------------------------------   /Correo   ------------------------------- */}
                                {/* -------------------------------   Telefono   ------------------------------- */}
                                <div className={`w-1/2 px-5 flex flex-col mb-6`}>
                                    <label 
                                        htmlFor="telefono"
                                        className={`w-full px-3 text-start`}>Telefono</label>
                                    <input
                                        type="text"
                                        name="telefono"
                                        id="telefono"
                                        placeholder='telefono'
                                        className={`w-full px-3 text-start rounded-lg py-2 mt-1 border-2 border-[var(--my-minor)]`}
                                        value={s.forms?.contactUs?.telefono || ''}
                                        onChange={e => f.upgradeLvl2('forms', 'contactUs', e.target.name, e.target.value)} />
                                </div>
                                {/* -------------------------------   /Telefono   ------------------------------- */}
                            </div>
                            {/* ----------------------------------------   /CORREO, TELEFONO   ---------------------------------------- */}


                            {/* ----------------------------------------   TEXTO   ---------------------------------------- */}
                            <div className="flex w-full flex-row justify-center mt-3">
                                {/* -------------------------------   Mensaje   ------------------------------- */}
                                <div className={`w-full px-5 flex flex-col mb-5`}>
                                    <label 
                                        htmlFor="mensaje"
                                        className={`w-full px-3 text-start`}>Su Mensaje</label>
                                    <textarea
                                        name="mensaje"
                                        id="mensaje"
                                        placeholder='mensaje'
                                        className={`w-full px-3 text-start rounded-lg py-2 mt-1 border-2 border-[var(--my-minor)]`}
                                        value={s.forms?.contactUs?.mensaje || ''}
                                        onChange={e => f.upgradeLvl2('forms', 'contactUs', e.target.name, e.target.value)} />
                                </div>
                                {/* -------------------------------   /Mensaje   ------------------------------- */}
                            </div>
                            {/* ----------------------------------------   /TEXTO   ---------------------------------------- */}

                            
                            <div className="flex w-full flex-row justify-center mt-3">
                                {/* -------------------------------   Enviar   ------------------------------- */}
                                <div className={`w-full px-5 flex flex-row items-start justify-start`}>
                                    <input
                                        type="submit"
                                        value="Enviar Mensaje"
                                        className={`w-full px-3 text-center rounded-lg py-2 mt-1 cursor-pointer bg-blue-800 hover:bg-blue-600 text-white font-bold`} 
                                        />
                                </div>
                                {/* -------------------------------   /Enviar   ------------------------------- */}
                            </div>

                        </form>
                    </div>
                </div>
                {/* -------------------------------------------   /IZQUIERDA   ------------------------------------------- */}

                {/* -------------------------------------------   DERECHA   ------------------------------------------- */}
                <div className="flex flex-row justify-start px-8 py-12 w-5/12">
                    <div className="flex flex-col px-6 py-8 form-small-container w-6/12 rounded-2xl">
                        <div className="flex flex-col w-full mb-3">
                            <span className='icon-data'>
                                icon
                            </span>
                            <p className='font-bold text-lg'>
                                Llamanos ahora:
                            </p>
                            <p className='pl-6'>
                                +51 956-789-110
                            </p>
                            <p className='pl-6'>
                                +51 972-452-112
                            </p>
                        </div>

                        <div className="flex flex-col w-full mb-3">
                            <span className='icon-data'>
                                icon
                            </span>
                            <p className='font-bold text-lg'>
                                Email:
                            </p>
                            <p className='pl-6'>
                                info@ybelleza.com
                            </p>
                            <p className='pl-6'>
                                unfo@web.com
                            </p>
                        </div>

                        <div className="flex flex-col w-full mb-3">
                            <span className='icon-data'>
                                icon
                            </span>
                            <p className='font-bold text-lg'>
                                Nuestra direccion:
                            </p>
                            <p className='pl-6'>
                                62/1, Trujillo Victor Larco.
                            </p>
                        </div>

                    </div>
                </div>
                {/* -------------------------------------------   /DERECHA   ------------------------------------------- */}
            </div>
        </Fragment>
    )
}

export { Contacto };
