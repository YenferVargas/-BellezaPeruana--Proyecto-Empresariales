import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

const Footer = () => {
    const { ls, lf, s, f, Icons, Link } = useContext(AllContext);
    const icons = new Icons();
    
    return (
        <Fragment>
            <footer className='bg-black flex w-full flex-col py-8 mt-16'>
                {/* --------------------  Data   -------------------- */}
                <div className="flex w-full flex-row">
                    {/* -------------   Us   ------------- */}
                   <div className='flex flex-wrap pl-12 pr-4 flex-row w-1/3'>
                        <p className="w-full text-start">
                            <b className="text-end text-xl text-[var(--my-pink)]">Belleza</b>
                            <span className="text-start small-text text-white">Peruana</span>
                        </p>

                        <p className="w-full text-sm mt-2">Como una marca de belleza de peruana, creemos que cuando te ves y te sientes bien, puedes alcanzar tu máximo potencial. Y, de la mano de una comunidad global de belleza apasionada y solidaria, ¡todo es posible! Eso significa belleza desde una perspectiva peruana. </p>

                        <p className="w-full text-sm mt-4">Tienes una pregunta? Llámanos 24/7 <br/>
                        <span><a className='text-[var(--my-pink-dark)]' href="tel:123456789">+0123 456 789</a></span></p>

                    </div>
                    {/* -------------   /Us   ------------- */}

                    {/* -------------   Info   ------------- */}
                    <div className='flex flex-wrap px-4 flex-col w-1/6'>
                        <p className="w-full text-start">
                            <b className="text-xl text-white">Información</b>
                        </p>

                        <ul className='w-full mt-2'>
                            <li className='text-sm'><Link to="nosotros/" className='text-[var(--my-pink-dark)]'>Sobre nosotros</Link></li>
                            <li className='text-sm mt-3'><a className='text-[var(--my-pink-dark)]' href="#">Terminos y Condiciones</a></li>
                            <li className='text-sm mt-3'><Link to="contacto/" className='text-[var(--my-pink-dark)]'>Contactenos</Link></li>
                            <li className='text-sm mt-3'><a className='text-[var(--my-pink-dark)]' href="#">Ayuda</a></li>
                        </ul>

                    </div>
                    {/* -------------   /Info   ------------- */}

                    {/* -------------   Servicio Cliente   ------------- */}
                    <div className='flex flex-wrap px-4 flex-col w-1/6'>
                        <p className="w-full text-start">
                            <b className="text-xl text-white">Servicio al Cliente</b>
                        </p>

                        <ul className='w-full mt-2'>
                            <li className='text-sm'><a className='text-[var(--my-pink-dark)]' href="#">Metodos de pago</a></li>
                            <li className='text-sm mt-2'><a className='text-[var(--my-pink-dark)]' href="#">Devolucion de dinero</a></li>
                            <li className='text-sm mt-2'><a className='text-[var(--my-pink-dark)]' href="#">Envio</a></li>
                            <li className='text-sm mt-2'><a className='text-[var(--my-pink-dark)]' href="#">Shipping</a></li>
                            <li className='text-sm mt-2'><a className='text-[var(--my-pink-dark)]' href="#">Politica de privacidad</a></li>
                        </ul>

                    </div>
                    {/* -------------   /Servicio Cliente   ------------- */}

                    {/* -------------   Contacto   ------------- */}
                    <div className='flex flex-wrap px-4 flex-col w-1/3'>
                        <p className="w-full text-start">
                            <b className="text-xl text-white">Ponerse en contacto</b>
                        </p>

                        <ul className='w-full mt-2 flex flex-col'>
                            <li className='text-sm text-[var(--my-pink-dark)] w-full text-start'>NO. 342 - Trujillo.</li>
                            <li className='text-sm text-[var(--my-pink-dark)] w-full text-start'>012 Larco.</li>
                            <li className='text-sm text-[var(--my-pink-dark)] w-full text-start'>info@etienda.com</li>
                            <li className='text-sm text-[var(--my-pink-dark)] w-full text-start'>+01 912 345 345</li>
                        </ul>

                        <div className='flex justify-start w-full flex-row flex-wrap mt-8'>
                            <a className='w-2/12 py-4' href="https://wa.me/123456789" target="_blank">
                                <span className='text-icon'>
                                    {icons.whatsApp()}
                                </span>
                            </a>
                            <a className='w-2/12 py-4' href="https://www.instagram.com/example" target="_blank">
                                <span className='text-icon'>
                                    {icons.instagram()}
                                </span>
                            </a>
                            <a className='w-2/12 py-4' href="https://www.facebook.com/example" target="_blank">
                                <span className='text-icon'>
                                    {icons.facebook()}
                                </span>
                            </a>
                            <a className='w-2/12 py-4' href="https://www.tiktok.com/@example" target="_blank">
                                <span className='text-icon'>
                                    {icons.tiktok()}
                                </span>
                            </a>
                        </div>

                    </div>
                    {/* -------------   /Contacto   ------------- */}
                </div>
                {/* --------------------  /Data   -------------------- */}

                {/* --------------------  Copering   -------------------- */}
                <div className="flex w-full flex-row">

                </div>
                {/* --------------------  /Copering   -------------------- */}
            </footer>
        </Fragment>
    )
}

export { Footer };