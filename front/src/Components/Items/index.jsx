import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';
import { AddCantidadModal } from '../Modals/compra/AddCantidadModal';

import './style/index.css';

function Items() {
    const { ls, hp, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();

    const productos = s.listaProductos?.mostrar || [];

    useEffect(() => {
        f.articulos.getProductos();
        f.upgradeLvl1('shows', 'sidebar', true);
    }, []);

    return (
        <Fragment>
            <div 
                className="flex flex-wrap w-full justify-around px-4 md:px-0 md:pl-8 mt-2"
                >
            {productos.map((ele, index) => {
                return (
                    <Item
                        key={index}
                        ele={ele}
                        hp={hp}
                        f={f}
                    />
                )
            })}
            </div>
            {s.modals?.compras?.addCantidad &&
            <AddCantidadModal />
            }

        </Fragment>
    )
}

const Item = (props) => {
    const { ele, hp, f } = props;
    const addToCart = () => {
        f.upgradeLvl2('compras', 'agregando', 'item', ele);
        f.upgradeLvl2('compras', 'agregando', 'amount', 1);
        f.upgradeLvl2('modals', 'compras', 'addCantidad', true);
    }
    return (
        <div className="flex justify-center flex-wrap mt-8 px-8">
            <div className="item-container flex justify-start items-center flex-col">
                {/* ---------------------------------   BG   --------------------------------- */}
                <div 
                    className="fondo"
                    style={{backgroundImage: `url(${ele.url})`}}
                    >
                    <div className="sombra"></div>
                </div>
                {/* ---------------------------------   /BG   --------------------------------- */}

                {/* ---------------------------------   IMAGE   --------------------------------- */}
                <div className="img-item-container w-full flex justify-center m-0 mt-1">
                    <img
                        className='img-item ' 
                        src={ele.url} 
                        alt={ele.titulo}/>
                </div>
                {/* ---------------------------------   /IMAGE   --------------------------------- */}
                
                {/* ---------------------------------   NAME   --------------------------------- */}
                <p className="name-item-container w-full flex justify-between m-0 mt-1">
                    <span className='text-start pl-3 w-2/3 font-bold'>
                        {ele.titulo}
                    </span>
                    <small className='text-end pr-3 w-1/3 overflow-hidden whitespace-nowrap mr-3'>
                        {ele.categorias_str}
                    </small>
                </p>
                {/* ---------------------------------   /NAME   --------------------------------- */}

                {/* ---------------------------------   DESC   --------------------------------- */}
                <p className="name-item-container w-full flex justify-between m-0">
                    <small className='text-start pl-3 w-2/3 overflow-hidden whitespace-nowrap ml-1'>
                        {ele.descripcion}
                    </small>
                </p>
                {/* ---------------------------------   /DESC   --------------------------------- */}

                {/* ---------------------------------   PRICE   --------------------------------- */}
                <div className="flex price-item-container justify-center m-0 mt-1">
                    <p className='text-center text-[#0f0] font-bold'>
                        Price: {hp.showCurrency(ele.precio)}
                    </p>
                </div>
                {/* ---------------------------------   /PRICE   --------------------------------- */}

                {/* ---------------------------------   ACTIONS - STOCK   --------------------------------- */}
                <div className="actions-item-container w-full flex justify-between m-0 mt-1">
                    <div className="add-item-button w-2/3 justify-center flex">
                        <button 
                            className='w-full h-[25px] text-sm'
                            onClick={addToCart}>
                            Add
                        </button>
                    </div>
                    <small className='text-end p-2 w-1/3 overflow-hidden whitespace-nowrap'>
                        stock: {ele.cantidad}
                    </small>
                </div>
                {/* ---------------------------------   /ACTIONS - STOCK   --------------------------------- */}
                

            </div>
        </div>
    )
}

export { Items };
