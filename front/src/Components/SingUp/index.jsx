import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

function SingUp() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    const inputClass = 'flex flex-wrap justify-center w-1/2 md:w-1/4 md:ml-[6%] mt-4';
    const labelClass = 'text-start pl-4 w-full mb-1';
    const inputFieldClass = 'w-full myinput pl-4 text-black';
    const dangerStyle = 'mt-0 text-[#f00] font-bold text-start pl-4';
    const successStyle = 'mt-0 text-[#0f0] font-bold text-start pl-4';

    const submitForm = e => {
        e.preventDefault();
        const formData = s.forms?.sing_up || {};
        // nombre, correo, password, confirmPassword
        if (!(!!formData.nombre && !!formData.correo && !!formData.password && !!formData.confirmPassword)) {
            f.alertSwal({message: 'Los campos con * son obligatorios', icon: 'error'})
        } else {
            f.login.singUp();
        }
        
    }

    return (
        <Fragment>
            <div className='flex flex-wrap justify-center w-full text-[var(--my-minor)]'>
                <h2 className={`text-center w-full mt-3 font-bold text-3xl`}>
                    Sing Up
                </h2>
            </div>
            {/* nombre, apellido, correo, password, telefono */}
            <form 
                className='flex max-md:flex-col md:flex-wrap justify-around items-center md:justify-start w-full'
                onSubmit={submitForm}
                >

                {/* -------------------------------   NOMBRE   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="nombre"
                        className={`${labelClass}`}>Nombre *</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder='Nombre'
                        className={`${inputFieldClass}`}
                        value={s.forms?.sing_up?.nombre || ''}
                        onChange={e => f.upgradeLvl2('forms', 'sing_up', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /NOMBRE   ------------------------------- */}

                {/* -------------------------------   Apellido   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="apellido"
                        className={`${labelClass}`}>Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        placeholder='Apellido'
                        className={`${inputFieldClass}`}
                        value={s.forms?.sing_up?.apellido || ''}
                        onChange={e => f.upgradeLvl2('forms', 'sing_up', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Apellido   ------------------------------- */}

                {/* -------------------------------   Correo   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="correo"
                        className={`${labelClass}`}>Correo *</label>
                    <input
                        type="text"
                        name="correo"
                        id="correo"
                        placeholder='Correo'
                        className={`${inputFieldClass}`}
                        value={s.forms?.sing_up?.correo || ''}
                        onChange={e => f.upgradeLvl2('forms', 'sing_up', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Correo   ------------------------------- */}

                {/* -------------------------------   Telefono   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="telefono"
                        className={`${labelClass}`}>Telefono</label>
                    <input
                        type="text"
                        name="telefono"
                        id="telefono"
                        placeholder='Telefono'
                        className={`${inputFieldClass}`}
                        value={s.forms?.sing_up?.telefono || ''}
                        onChange={e => f.upgradeLvl2('forms', 'sing_up', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Telefono   ------------------------------- */}

                {/* -------------------------------   Password   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="password"
                        className={`${labelClass}`}>Password *</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Password'
                        className={`${inputFieldClass}`}
                        value={s.forms?.sing_up?.password || ''}
                        onChange={e => f.upgradeLvl2('forms', 'sing_up', e.target.name, e.target.value)} />
                </div>
                {/* -------------------------------   /Password   ------------------------------- */}

                {/* -------------------------------   Confirm Password   ------------------------------- */}
                <div className={`${inputClass}`}>
                    <label 
                        htmlFor="confirmPassword"
                        className={`${labelClass} ${s.forms?.sing_up?.confirmPassword !== s.forms?.sing_up?.password ? dangerStyle : (!!s.forms?.sing_up?.confirmPassword && successStyle)}`}>Confirm Password *</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder='Confirm Password'
                        className={`${inputFieldClass}`}
                        value={s.forms?.sing_up?.confirmPassword || ''}
                        onChange={e => f.upgradeLvl2('forms', 'sing_up', e.target.name, e.target.value)} />
                    
                </div>
                {/* -------------------------------   /Confirm Password   ------------------------------- */}

                {/* -------------------------------   Submit   ------------------------------- */}
                <div className={`w-full flex justify-center mt-6 text-black`}>
                    <button
                        type='submit'
                        className='w-1/2 btn bg-blue-700 hover:bg-blue-900'>
                        Sing Up
                    </button>
                </div>
                {/* -------------------------------   /Submit   ------------------------------- */}

            </form>
        </Fragment>
    )
}

export { SingUp };
