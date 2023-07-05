import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../../App/MyContext';

function Table() {
    const { ls, hp, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    const registros = s.compras?.itemsAgregados || [];

    const trClass = 'trClass text-[0.8rem] font-bold bg-[#888] text-[var(--my-white)]';
    const thClass = 'thClass border-solid border-2 m-0 py-2 px-2 border border-[var(--my-minor)]';
    const tdClass = 'tdClass border-solid border-2 whitespace-nowrap py-2 px-4 text-[var(--my-minor)] border border-[var(--my-success)]';

    return (
        <Fragment>
            <div className="w-11/12 table-container">
                <div className='overflow-x overflow-x-scroll table-div'>
                    <table className='table table-auto border-collapse border rounded-2xl w-full mt-2 mb-2'>
                        <thead>
                            <tr className={`${trClass}`}>
                                {/* ---------------------   Articulo   --------------------- */}
                                <th className={`${thClass}`}>
                                    Articulo
                                </th>
                                {/* ---------------------   /Articulo   --------------------- */}

                                {/* ---------------------   Precio   --------------------- */}
                                <th className={`${thClass}`}>
                                    Precio
                                </th>
                                {/* ---------------------   /Precio   --------------------- */}

                                {/* ---------------------   Cantidad   --------------------- */}
                                <th className={`${thClass}`}>
                                    Cantidad
                                </th>
                                {/* ---------------------   /Cantidad   --------------------- */}

                                {/* ---------------------   Total   --------------------- */}
                                <th className={`${thClass}`}>
                                    Total
                                </th>
                                {/* ---------------------   /Total   --------------------- */}

                            </tr>
                        </thead>

                        <tbody>
                            {registros.map((ele, i) => {
                                return (<ShowElement
                                    key={i}
                                    ele={ele}
                                    index={i}
                                    tdClass={tdClass}
                                    hp={hp}
                                    f={f}
                                />)
                            })}
                            <tr className={`text-[0.75rem] bg-[var(--my-success)]`}>
                                {/* ---------------------   Titulo   --------------------- */}
                                <td className={`${tdClass} text-base font-bold text-[var(--my-white)]`}>
                                    Total
                                </td>
                                {/* ---------------------   /Titulo   --------------------- */}

                                {/* ---------------------   Precio   --------------------- */}
                                <td className={`${tdClass} text-end`}>
                                </td>
                                {/* ---------------------   /Precio   --------------------- */}

                                {/* ---------------------   Cantidad   --------------------- */}
                                <td className={`${tdClass} text-end`}>
                                </td>
                                {/* ---------------------   /Cantidad   --------------------- */}

                                {/* ---------------------   Total   --------------------- */}
                                <td className={`${tdClass} text-end text-base font-bold text-[var(--my-white)]`}>
                                    {hp.showCurrency(s.compras?.total)}
                                </td>
                                {/* ---------------------   /Total   --------------------- */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

const ShowElement = (props) => {
    const { ele, index, tdClass, hp, f } = props;
    ele.index = index;
    const item = ele.item || {};

    return (
        <tr className={`text-[0.75rem] ${index % 2 === 0 ? 'bg-[#0000]' : 'bg-[#8884]'} hover:bg-[#888]`}>

            {/* ---------------------   Titulo   --------------------- */}
            <td className={`${tdClass} flex justify-around`}>
                <span className='w-10/12'>
                {item.titulo}
                </span>
                <span className='1/12'>
                    <small
                        className='manita text-blue-500 underline'
                        onClick={e => {
                            e.preventDefault();
                            f.compras.deleteArticulo(index);
                        }}
                        >
                        Eliminar
                    </small>
                </span>
            </td>
            {/* ---------------------   /Titulo   --------------------- */}

            {/* ---------------------   Precio   --------------------- */}
            <td className={`${tdClass} text-end`}>
                {hp.showCurrency(item.precio)}
            </td>
            {/* ---------------------   /Precio   --------------------- */}

            {/* ---------------------   Cantidad   --------------------- */}
            <td className={`${tdClass} text-end`}>
                {hp.showNumber(ele.cantidad)}
            </td>
            {/* ---------------------   /Cantidad   --------------------- */}

            {/* ---------------------   Total   --------------------- */}
            <td className={`${tdClass} text-end`}>
                {hp.showCurrency(ele.cantidad * item.precio)}
            </td>
            {/* ---------------------   /Total   --------------------- */}

        </tr>
    )
}

export { Table };
