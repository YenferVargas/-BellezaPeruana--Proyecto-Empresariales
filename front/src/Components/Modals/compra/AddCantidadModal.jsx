import React, { Fragment, useEffect, useContext } from 'react';
import { AllContext } from '../../../App/MyContext';
import './style/addCantidad.css'

function AddCantidadModal(props) {
    const { hp, Icons, s, f } = React.useContext(AllContext);
    const icons = new Icons();
    
    const ztyle = props.zindex ? {zIndex: props.zindex} : {};
    const ele = s.compras?.agregando || {};
    const item = ele.item || {};
    const cantidad = parseFloat(ele?.cantidad || 0);

    const close = e => {
        if (!!e) e.preventDefault();
        f.upgradeLvl1('compras', 'agregando', null);
        f.upgradeLvl2('modals', 'compras', 'addCantidad', false);
    }

    const add = e => {
        if (!!e) e.preventDefault();
        const id = item.id;
        if (cantidad <= 0) {
            return;
        }
        let added = s.compras?.itemsAgregados || [];
        let encontrado = false;
        added = added.map((ele, index) => {
            if (ele.item.id === id) {
                ele.cantidad += cantidad;
                encontrado = true;
            }
            return ele;
        });
        if (encontrado) {
            f.upgradeLvl1('compras', 'itemsAgregados', added);
        } else {
            added.push(ele);
            f.upgradeLvl1('compras', 'itemsAgregados', added);
        }
        close();

    }
    const keysDown = e => {
        if (e.key === 'Escape') {
            close(e);
        } else if (e.key === 'Enter') {
            add(e);
        }
    }
    React.useEffect(() => {
        document.addEventListener('keydown', keysDown);
        return () => {
            document.removeEventListener('keydown', keysDown);
        }
    }, [
        s.modals,
        s.compras,
    ]);

    useEffect(() => {
        let input;
        while (!input) {
            input = document.querySelector('#ele-cantidad');
        }
        input.focus();
        input.select();
    }, []);
    return (
        <div
            className="modal-info flex flex-wrap w-full justify-center items-start add-cantidad-modal-container"
            style={{...ztyle}}
            onClick={close}
            >
            <div 
                className={`flex flex-wrap w-full justify-center items-start modal-container modal-container-80 my-modal add-cantidad-modal py-12`}
                style={{...s.styles.basic}}
                onClick={e => e.stopPropagation()}
                >
                <div className="w-10/12 md:w-5/12 flex flex-col justify-start items-center ele-data">
                    <div className="w-full justify-center flex">
                        <img 
                            src={item.url} 
                            alt={item.titulo}
                            className="ele-img"
                            />
                    </div>
                    <div className="w-8/12 mt-1 ele-name">
                        <h2 className="text-start text-2xl font-bold">{item.titulo}</h2>
                    </div>
                    <div className="w-8/12 mt-1 ele-price">
                        <h3 className="text-end text-xl font-bold">{hp.showCurrency(item.precio)}</h3>
                    </div>
                </div>

                <div className="w-10/12 md:w-5/12 flex flex-col justify-center items-start ele-cantidad">
                    <div className="w-9/12 mt-1 ele-desc">
                        <h3 className="text-start">{item.descripcion}</h3>
                    </div>
                    <div className="w-full flex flex-wrap justify-center mt-4">
                        <h2 className="text-center text-xl mt-4">Cantidad</h2>
                    </div>

                    <div className="w-full flex flex-wrap justify-center mt-4">
                        <div className='px-8'>
                            <button
                                className="h-[40px] w-[40px]"
                                onClick={() => {
                                    let cantidad = s.compras?.agregando?.cantidad || 0;
                                    if (cantidad < 1) {
                                        return;
                                    }
                                    f.upgradeLvl2('compras', 'agregando', 'cantidad', cantidad - 1)
                                }}
                                >
                                {icons.circleMinus()}
                            </button>
                        </div>
                        <div className='w-1/2'>
                            <input 
                                type="text" 
                                name="cantidad" 
                                id="ele-cantidad"
                                className="text-center rounded-md text-black w-full h-[40px] text-xl"
                                value={s.compras?.agregando?.cantidad || 0}
                                onChange={e => {
                                    let cantidad = parseFloat(e.target.value);
                                    if (isNaN(cantidad)) {
                                        cantidad = 0;
                                    } else if (cantidad > (item.cantidad || 0)) {
                                        cantidad = item.cantidad || 0;
                                    } else if (cantidad < 0) {
                                        cantidad = 0;
                                    }
                                    f.upgradeLvl2('compras', 'agregando', 'cantidad', cantidad);
                                }}
                                    />
                        </div>
                        <div className='px-8'>
                            <button
                                className="h-[40px] w-[40px]"
                                onClick={() => {
                                    let cantidad = s.compras?.agregando?.cantidad || 0;
                                    if (cantidad > (item.cantidad || 0)) {
                                        return;
                                    }
                                    f.upgradeLvl2('compras', 'agregando', 'cantidad', cantidad + 1)
                                }}
                                >
                                {icons.circlePlus()}
                            </button>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-around mt-8">
                        <p
                            className="text-start text-2xl mt-4"
                            >
                            Total
                        </p>
                        <p
                            className="text-end text-2xl mt-4 text-[var(--my-success)] font-bold"
                            >
                            {hp.showCurrency((item.precio || 0) * (s.compras?.agregando?.cantidad || 0))}
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-wrap justify-around mt-8">
                    <button
                        className="w-8/12 md:w-4/12 btn border border-[var(--my-danger)] hover:bg-[var(--my-success) hover:border-[var(--my-success)]] text-xl font-bold"
                        onClick={close}
                        >
                        Cancelar
                    </button>
                    <button
                        className={`w-8/12 md:w-4/12 btn ${cantidad > 0 ? 'bg-[var(--my-success)]' : 'border border-[#888] text-[#888] mouse-block'} text-xl font-bold`}
                        disabled={cantidad <= 0}
                        onClick={add}
                        >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}

export { AddCantidadModal };