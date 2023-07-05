import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';
import { UserMenuModal } from '../Modals/header/UserMenuModal';
import './style/index.css'


const Header = props => {
    const { lf, Link, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();
    const { abierto } = props;

    const toggleSidebar = e => {
        if (!!e) e.preventDefault();
        // f.upgradeLvl1('sizes', 'md', false);
        // f.upgradeLvl2('modals', 'sidebar', 'show', false);
        if (!s.sizes?.md) {
            f.upgradeLvl1('mainContainer', 'sideBar', !abierto);
        } else {
            f.upgradeLvl2('modals', 'sidebar', 'show', !s.modals?.sidebar?.show);
        }
    }

    useEffect(() => {
        const agregados = s.compras?.itemsAgregados || [];
        let total = 0;
        agregados.forEach(ele => {
            total += parseFloat(ele.cantidad || 0) * parseFloat(ele.item?.precio || 0);
        });
        f.upgradeLvl1('compras', 'total', total);
    }, [
        s.compras?.itemsAgregados
    ]);

    return (
        <React.Fragment>
            <div 
                id="header-container"
                className={`flex w-full justify-start items-center text-[var(--my-minor)]`}>

                {!!s.shows?.sidebar && 
                <p className="w-2/12 toggle-menu">
                    <button 
                        className='manita icon-span'
                        onClick={toggleSidebar}
                        >
                        {icons.bars()}
                    </button>
                </p>}

                <div className="w-6/12 name-center">
                    <Link to="/" className="w-full text-center">
                        <b className="text-end big-text">Belleza </b>
                        <span className="text-start small-text text-[var(--my-minor)]">Peruana</span>
                    </Link>
                </div>

                <Link
                    to="/cart"
                    className="text-icon cart-button manita ml-6"
                    >
                    {icons.cartShopping()}
                    <span className='count-cart'>
                        {s.compras?.itemsAgregados?.length || 0}
                    </span>
                </Link>

                {!s.login?.user ?
                <Fragment>
                    <Link
                        to="/login"
                        className="text-icon manita ml-4"
                        // onClick={toggleUserMenu}
                        >
                        {/* {icons.userAlien()} */}
                        {/* {icons.userSecret()} */}
                        Ingresar
                    </Link>

                    <Link
                        to="/sing_up"
                        className="text-icon manita ml-4"
                        // onClick={toggleUserMenu}
                        >
                        {/* {icons.userAlien()} */}
                        {/* {icons.userSecret()} */}
                        Registrarse
                    </Link>
                </Fragment>
                :
                <Fragment>
                    <Link
                        to="/"
                        className="text-icon manita ml-4"
                        onClick={lf.cerrarSesion}
                        >
                        {/* {icons.userAlien()} */}
                        {/* {icons.userSecret()} */}
                        Salir
                    </Link>
                </Fragment>
                }
            </div>
            {!!s.modals?.header?.userMenu && 
            <UserMenuModal />}
        </React.Fragment>
    )
}

export { Header };
