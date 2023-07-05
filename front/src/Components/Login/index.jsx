import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

function Login() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    const inputClass = 'flex flex-wrap justify-center w-1/2 md:w-1/4 mt-4';
    const labelClass = 'text-start pl-4 w-full mb-1';
    const inputFieldClass = 'w-full myinput pl-4 text-black';
    const dangerStyle = 'mt-0 text-[#f00] font-bold text-start pl-4';
    const successStyle = 'mt-0 text-[#0f0] font-bold text-start pl-4';

    const submitForm = e => {
        e.preventDefault();
        lf.login();
    }

    useEffect(() => {
        const ele = document.getElementById('correo');
        if (ele) ele.focus();
    }, []);

    return (
        <Fragment>
            <div className='flex flex-wrap justify-center w-full text-[var(--my-minor)]'>
                <h2 className={`text-center w-full mt-3 font-bold text-3xl`}>
                    Login
                </h2>
            </div>
            {/* nombre, apellido, correo, password, telefono */}
            <form 
                className='flex max-md:flex-col md:flex-wrap justify-around items-center md:justify-around w-full'
                onSubmit={submitForm}
                >

                {/* -------------------------------   Correo   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="correo"
                        className={`${labelClass}`}>Correo</label>
                    <input
                        type="text"
                        name="correo"
                        id="correo"
                        placeholder='Correo'
                        className={`${inputFieldClass}`}
                        value={s.forms?.login?.correo || ''}
                        onChange={e => f.upgradeLvl2('forms', 'login', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Correo   ------------------------------- */}

                {/* -------------------------------   Password   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="password"
                        className={`${labelClass}`}>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Password'
                        className={`${inputFieldClass}`}
                        value={s.forms?.login?.password || ''}
                        onChange={e => f.upgradeLvl2('forms', 'login', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Password   ------------------------------- */}

                {/* -------------------------------   Submit   ------------------------------- */}
                <div className={`w-full flex justify-center mt-6 text-black`}>
                    <button
                        type='submit'
                        className='w-1/2 btn bg-blue-700 hover:bg-blue-900'>
                        Entrar
                    </button>
                </div>
                {/* -------------------------------   /Submit   ------------------------------- */}

            </form>
        </Fragment>
    )
}

export { Login };
