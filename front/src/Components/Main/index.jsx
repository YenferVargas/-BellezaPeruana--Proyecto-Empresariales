import React from 'react';
import { AllContext } from '../../App/MyContext';

import { Test } from '../Test';
import { Items } from '../Items';
import { SingUp } from '../SingUp';
import { Login } from '../Login';
import { Nosotros } from '../Nosotros';
import { Contacto } from '../Contacto';
import { Separador } from '../Separador';
import { Cart } from '../Cart';
import { ComprasPasadas } from '../ComprasPasadas';
import { Articulos } from '../Articulos';
import { Agregar as ArtAgregar } from '../Articulos/Agregar';
import { Editar as ArtEditar } from '../Articulos/Editar';

import { Footer } from '../Footer';

import './style/index.css';

import { Route, Routes, Navigate } from 'react-router-dom';

const Main = () => {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    const titulo = s?.header?.titulo;

    return (
        <React.Fragment>
            <div className='flex w-col justify-between items-between content-between flex-wrap main-content'>

                <div className="flex flex-row flex-wrap w-full justify-start items-start">
                    <Routes>
                        {/* -----------   Home   ----------- */}
                        <Route
                            path="/"
                            element={<Items />}
                        />
                        {/* -----------   /Home   ----------- */}

                        {/* -----------   SingUp   ----------- */}
                        <Route
                            path="sing_up"
                            element={<SingUp />}
                        />
                        {/* -----------   /SingUp   ----------- */}

                        {/* -----------   Login   ----------- */}
                        <Route
                            path="login"
                            element={<Login />}
                        />
                        {/* -----------   /Login   ----------- */}

                        {/* -----------   Login   ----------- */}
                        <Route
                            path="cart"
                            element={<Cart />}
                        />
                        {/* -----------   /Login   ----------- */}

                        {/* -----------   Cart   ----------- */}
                        <Route
                            path="cart"
                            element={
                                <Cart />
                            }
                        />
                        {/* -----------   /Cart   ----------- */}

                        {/* -----------   Articulos   ----------- */}
                        <Route
                            path="articulos"
                            element={<Articulos />}>
                            <Route
                                path="agregar"
                                element={<ArtAgregar />}/>

                            <Route
                                path="editar/"
                                element={<ArtEditar />}/>
                        </Route>
                        {/* -----------   /Articulos   ----------- */}

                        {/* -----------   Nosotros   ----------- */}
                        <Route
                            path="nosotros"
                            element={<Nosotros />}
                        />
                        {/* -----------   /Nosotros   ----------- */}

                        {/* -----------   Contacto   ----------- */}
                        <Route
                            path="contacto"
                            element={<Contacto />}
                        />
                        {/* -----------   /Contacto   ----------- */}

                        {/* -----------   ComprasPasadas   ----------- */}
                        <Route
                            path="compras/anteriores/"
                            element={<ComprasPasadas />}
                        />
                        {/* -----------   /ComprasPasadas   ----------- */}

                        {/* -----------   Test   ----------- */}
                        <Route
                            path="test"
                            element={<Test />}
                        />
                        {/* -----------   /Test   ----------- */}

                        {/* -----------   404   ----------- */}
                        <Route path="*" element={<div className='text-red-700 text-4xl text-center mt-16 font-bold w-full'>404 Not Found</div>} />
                        {/* -----------   /404   ----------- */}
                    </Routes>
                </div>

                <div className="flex flex-row flex-wrap w-full justify-start items-start">
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export { Main };
