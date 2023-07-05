import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';
import { Table } from './Table';

function Cart() {
    const { ls, lf, s, f, Icons, hp } = useContext(AllContext);
    const icons = new Icons();
    const total = s.compras?.total || 0;
    return (
        <Fragment>
            <div className='flex flex-wrap justify-center w-full'>
                <p
                    className='text-2xl font-bold text-center w-full mt-4 text-[var(--my-minor)]'
                    >
                    Carrito de Compras
                </p>
                <Table />
                {total > 0 &&
                <div className='flex justify-center w-full mt-4'>
                    <button
                        className='btn bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-1/3'
                        onClick={e => {
                            e.preventDefault();
                            f.compras.cobrar();
                        }}
                        >
                        Pagar {hp.showCurrency(total)}
                    </button>
                </div>}
            </div>
        </Fragment>
    )
}

export { Cart };
