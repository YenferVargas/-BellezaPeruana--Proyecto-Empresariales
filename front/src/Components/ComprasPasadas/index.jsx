import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

const ComprasPasadas = () => {
    const { ls, lf, s, f, Icons, hp } = useContext(AllContext);
    const icons = new Icons();

    const compras_all = s.compras?.comprasPasadas?.all;
    const compras = s.compras?.comprasPasadas?.show;

    useEffect(() => {
        f.compras.getComprasPasadas();
    }, []);

    return (
        <Fragment>
            <div className='flex flex-wrap justify-center w-full mt-3'>
                {!!compras && compras.map((c,i) => {
                    return (
                        <div key={i} className="flex flex-col w-full justify-center px-8 mt-8">
                            <p className='w-full text-start text-xl text-green-600 fonx-bold px-6 flex flex-row justify-evenly'>
                                <span>
                                    Compra: {c.id}
                                </span>
                                <span>
                                    {hp.showDate(c.created_at)}
                                </span>
                                <span>
                                    {hp.showCurrency(c.amount)}
                                </span>
                            </p>
                            <ShowCompras 
                                data={{c, i, hp, f}} />
                        </div>

                    )
                })}
            </div>
        </Fragment>
    )
}

const ShowCompras = ({data}) => {

    const {c, i, hp, f} = data;

    const articulos = c.articulos;

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
                            {articulos.map((ele, i) => {
                                return (<ShowElement
                                    key={i}
                                    ele={ele}
                                    index={i}
                                    tdClass={tdClass}
                                    hp={hp}
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
                                    {hp.showCurrency(c.amount)}
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
    const { ele, index, tdClass, hp } = props;
    ele.index = index;
    const item = ele.articulo || {};

    return (
        <tr className={`text-[0.75rem] ${index % 2 === 0 ? 'bg-[#0000]' : 'bg-[#8884]'} hover:bg-[#888]`}>

            {/* ---------------------   Titulo   --------------------- */}
            <td className={`${tdClass} flex justify-around`}>
                {item.titulo}
            </td>
            {/* ---------------------   /Titulo   --------------------- */}

            {/* ---------------------   Precio   --------------------- */}
            <td className={`${tdClass} text-end`}>
                {hp.showCurrency(item.precio)}
            </td>
            {/* ---------------------   /Precio   --------------------- */}

            {/* ---------------------   Cantidad   --------------------- */}
            <td className={`${tdClass} text-end`}>
                {hp.showNumber(ele.count)}
            </td>
            {/* ---------------------   /Cantidad   --------------------- */}

            {/* ---------------------   Total   --------------------- */}
            <td className={`${tdClass} text-end`}>
                {hp.showCurrency(ele.count * item.precio)}
            </td>
            {/* ---------------------   /Total   --------------------- */}

        </tr>
    )
}


export { ComprasPasadas };
