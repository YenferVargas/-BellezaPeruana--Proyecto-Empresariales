import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

import './style/index.css';

import nosotrosImg from '../../static/img/nosotros.jpg';

const Nosotros = () => {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    useEffect(() => {
        f.upgradeLvl1('shows', 'sidebar', false);
        f.upgradeLvl1('mainContainer', 'sideBar', false);
    }, []);
    return (
        <Fragment>
            <div className='flex flex-wrap justify-center w-full mt-3 text-[var(--my-minor)] mb-12'>

                {/* --------------------------------------   Col Izquierda   -------------------------------------- */}
                <div className="w-10/12 md:w-2/6 flex flex-col justify-start items-start px-5">
                    <img src={nosotrosImg} alt="nosotros" />

                    <h2 className='text-2xl font-bold w-full text-start mt-6'>
                        ¿Cuáles son los secretos del éxito de BellezaPeruana?
                    </h2>

                    <p className='flex flex-row w-full justify-start mt-2'>
                        <small className="flex flex-row w-3/12 justify-start">
                            <span className='text-icon'>
                                {icons.user()}
                            </span>
                            <span className='pt-2 ml-2'>
                                Por el administrador
                            </span>
                        </small>

                        <small className="flex flex-row w-3/12 justify-start">
                            <span className='text-icon'>
                                {icons.calendarDays()}
                            </span>
                            <span className='pt-2 ml-2'>
                                Dic 24, 2023
                            </span>
                        </small>

                        <small className="flex flex-row w-3/12 justify-start">
                            <span className='text-icon'>
                                {icons.comments()}
                            </span>
                            <span className='pt-2 ml-2'>
                                Comentarios (1)
                            </span>
                        </small>
                    </p>


                    <div className="flex w-full flex-col mt-6">
                        <p>
                            BellezaPeruana es una compañía líder en venta directa de cosméticos. Estamos presentes en más de 5 países, de los cuales somos el líder del mercado en más de la mitad. BellezaPeruana tiene su origen en Peru, con oficinas corporativas en Peru. Ofrecemos una amplia gama de productos de belleza de alta calidad, así como una oportunidad única para unirse a nuestra fuerza de ventas y comenzar su propio negocio.
                        </p>

                        <blockquote className='bg-gray-500 mt-3 p-5 border-l-4 italic  border-red-500'>
                            <span className='text-icon'>{icons.quoteLeft()}</span> En 1967, dos hermanos suecos y su amigo, se propusieron crear una compañía de belleza diferente, una que ofreciera nuevos y diferentes tipos de productos. Y, eso es exactamente lo que hicieron.
                        </blockquote>

                        <p className='mt-3'>
                            Para nosotros, la belleza es un estilo de vida – estar saludable, tener una piel hermosa, expresarse y divertirse. Al mismo tiempo, nuestros productos deben de ser seguros, confiables y entregar los resultados que prometen. Esta filosofía es nuestra guía para la creación de productos en los que puedes confiar y de los que te puedes enamorar.
                        </p>
                        <p className='mt-3'>
                            Nuestro negocio te ofrece la oportunidad única de formar parte de la industria de la belleza, recomendando y vendiendo nuestros productos suecos de alta calidad. Con nuestra oportunidad de negocio, puedes ganar dinero desde el primer día, construir un negocio y viajar por el mundo. ¡Únete a nuestra comunidad global de emprendedores exitosos y comienza tu propio viaje hacia el éxito!
                        </p>
                    </div>

                    <h2 className='text-2xl font-bold w-full text-start mt-6'>
                        Nuestra misión y valores
                    </h2>
                    <img src={nosotrosImg} className='mt-3' alt="#" width="950" height="460" />

                    <p className='mt-3'>
                        Nuestra misión es empoderar a las personas para que se sientan hermosas, confiadas y exitosas. Queremos brindarles a nuestros clientes y socios de ventas la oportunidad de descubrir su propio potencial y alcanzar el éxito en el mundo de la belleza.
                    </p>
                    <p className='mt-3'>
                        En BellezaPeruana, creemos en la importancia de la integridad, la honestidad y el respeto en todo lo que hacemos. Nos esforzamos por mantener los más altos estándares éticos y promover una cultura de inclusión y diversidad. Valoramos a cada individuo y reconocemos que su éxito es nuestro éxito.
                    </p>
                    <p className='mt-3'>
                        ¡Gracias por visitar BellezaPeruana y ser parte de nuestra comunidad!
                    </p>


                    <p className="mt-5 border-l-2 border-red-600 font-bold pl-4">
                        Deja un comentario
                    </p>

                    <form 
                        onSubmit={e => {
                            e.preventDefault();
                            f.alertSwal({
                                icon: "success",
                                message: "Comentario Enviado",
                            });
                        }}
                        className="comment rounded-lg border-2 border-blue-700 mt-3 flex w-full content-start flex-col p-4">
                        <div className="flex w-full flex-row justify-center">
                            {/* -------------------------------   Nombre   ------------------------------- */}
                            <div className={`w-1/2 px-5 flex flex-col`}>
                                <label 
                                    htmlFor="nombre"
                                    className={`w-full px-3 text-start`}>Su Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    placeholder='nombre'
                                    className={`w-full px-3 text-start rounded-lg py-2 mt-1 border-2 border-[var(--my-minor)]`}
                                    value={s.forms?.commentUs?.nombre || ''}
                                    onChange={e => f.upgradeLvl2('forms', 'commentUs', e.target.name, e.target.value)} />
                            </div>
                            {/* -------------------------------   /Nombre   ------------------------------- */}

                            {/* -------------------------------   Correo   ------------------------------- */}
                            <div className={`w-1/2 px-5 flex flex-col`}>
                                <label 
                                    htmlFor="correo"
                                    className={`w-full px-3 text-start`}>Su Correo Electronico</label>
                                <input
                                    type="text"
                                    name="correo"
                                    id="correo"
                                    placeholder='correo'
                                    className={`w-full px-3 text-start rounded-lg py-2 mt-1 border-2 border-[var(--my-minor)]`}
                                    value={s.forms?.commentUs?.correo || ''}
                                    onChange={e => f.upgradeLvl2('forms', 'commentUs', e.target.name, e.target.value)} />
                            </div>
                            {/* -------------------------------   /Correo   ------------------------------- */}
                        </div>

                        <div className="flex w-full flex-row justify-center mt-3">
                            {/* -------------------------------   Mensaje   ------------------------------- */}
                            <div className={`w-full px-5 flex flex-col`}>
                                <label 
                                    htmlFor="mensaje"
                                    className={`w-full px-3 text-start`}>Su Mensaje</label>
                                <textarea
                                    name="mensaje"
                                    id="mensaje"
                                    placeholder='mensaje'
                                    className={`w-full px-3 text-start rounded-lg py-2 mt-1 border-2 border-[var(--my-minor)]`}
                                    value={s.forms?.commentUs?.mensaje || ''}
                                    onChange={e => f.upgradeLvl2('forms', 'commentUs', e.target.name, e.target.value)} />
                            </div>
                            {/* -------------------------------   /Mensaje   ------------------------------- */}
                        </div>

                        <div className="flex w-full flex-row justify-center mt-3">
                            {/* -------------------------------   Enviar   ------------------------------- */}
                            <div className={`w-full px-5 flex flex-row items-start justify-start`}>
                                <input
                                    type="submit"
                                    value="Publicar Comentario"
                                    className={`w-1/3 px-3 text-center rounded-lg py-2 mt-1 cursor-pointer bg-blue-800 hover:bg-blue-600 text-white font-bold`} 
                                    />
                            </div>
                            {/* -------------------------------   /Enviar   ------------------------------- */}
                        </div>
                    </form>

                </div>
                {/* --------------------------------------   /Col Izquierda   -------------------------------------- */}

                {/* --------------------------------------   Col Derecha   -------------------------------------- */}
                <div className="w-10/12 md:w-1/3 flex flex-col justify-start items-start px-5">
                    <p className="mt-5 border-l-2 border-red-600 font-bold pl-4">
                        Noticias
                    </p>

                    <form 
                        onSubmit={e => {
                            e.preventDefault();
                            f.alertSwal({
                                icon: "success",
                                message: "Empezaras a recibir nuestras noticias",
                            })
                        }}
                        className="comment rounded-lg border-2 border-blue-700 mt-3 flex w-full content-start flex-col p-4">

                        <div className="flex w-full flex-row justify-center">
                            {/* -------------------------------   Correo Noticias   ------------------------------- */}
                            <div className={`w-1/2 px-5 flex flex-col`}>
                                <label 
                                    htmlFor="correo_noticia"
                                    className={`w-full px-3 text-center font-bold text-lg`}>Regístrese y reciba noticias últimas actualizaciones.</label>
                                <input
                                    type="text"
                                    name="correo_noticia"
                                    id="correo_noticia"
                                    placeholder='correo_noticia'
                                    className={`w-full px-3 text-start rounded-lg py-2 mt-1 border-2 border-[var(--my-minor)]`}
                                    value={s.forms?.recibirNoticias?.correo_noticia || ''}
                                    onChange={e => f.upgradeLvl2('forms', 'recibirNoticias', e.target.name, e.target.value)} />
                            </div>
                            {/* -------------------------------   /Correo Noticias   ------------------------------- */}
                        </div>

                        <div className="flex w-full flex-row justify-center mt-3">
                            {/* -------------------------------   Enviar   ------------------------------- */}
                            <div className={`w-1/2 px-5 flex flex-row items-start justify-start`}>
                                <input
                                    type="submit"
                                    value="Recibir"
                                    className={`w-full px-3 text-center rounded-lg py-2 mt-1 cursor-pointer bg-blue-800 hover:bg-blue-600 text-white font-bold`} 
                                    />
                            </div>
                            {/* -------------------------------   /Enviar   ------------------------------- */}
                        </div>
                    </form>

                </div>
                {/* --------------------------------------   /Col Derecha   -------------------------------------- */}


            </div>
        </Fragment>
    )
}

export { Nosotros };
