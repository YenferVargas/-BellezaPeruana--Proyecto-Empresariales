import React, { Fragment, useEffect, useContext } from 'react';
import { AllContext } from '../../../App/MyContext';

function UserMenuModal(props) {
    const { Link, Icons, s, f, lf } = useContext(AllContext);
    const icons = new Icons();
    
    const ztyle = props.zindex ? {zIndex: props.zindex} : {};

    const user = s.login?.user;

    const close = () => {
        f.upgradeLvl2('modals', 'header', 'userMenu', false);
    }
    const keysDown = e => {
        if (e.key === 'Escape') {
            e.preventDefault();
            close();
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', keysDown);
        return () => {
            document.removeEventListener('keydown', keysDown);
        }
    }, [s.modals?.header?.userMenu]);
    return (
        <div
            className="modal-info flex flex-wrap w-full justify-center items-start user-menu-modal-container"
            style={{...ztyle}}
            onClick={close}
            >
            <div 
                className={`flex flex-wrap w-full justify-center items-start modal-container modal-container-50 pt-3 pb-8 my-modal user-menu-modal`}
                style={{...s.styles.basic}}
                onClick={e => e.stopPropagation()}
                >
                {!user ? 
                <NotUser
                    Link={Link}
                    close={close}
                    lf={lf}
                    icons={icons}
                 /> : 
                <UserOptions
                    Link={Link}
                    lf={lf}
                    close={close}
                    icons={icons} />
                }
            </div>
        </div>
    )
}

const NotUser = props => {
    const { Link, icons, close, lf } = props;
    return (
        <div 
            className="flex flex-wrap w-full justify-center items-start"
            >
                <Link
                    to="login"
                    onClick={close}
                    className="flex flex-wrap w-full justify-center items-center text-icon manita mt-3"
                    >
                    <p 
                        className="flex flex-wrap w-1/2 md:w-1/4 justify-around items-start text-icon manita">
                        <span className="mr-2 icon-text">
                            {icons.doorOpen()}
                        </span>
                        <span>
                            Iniciar Sesión
                        </span>
                    </p>
                </Link>

                <Link
                    to="sing_up"
                    onClick={close}
                    className="flex flex-wrap w-full justify-center items-center text-icon manita mt-3"
                    >
                    <p 
                        className="flex flex-wrap w-1/2 md:w-1/4 justify-around items-start text-icon manita">
                        <span className="mr-2 icon-text">
                            {icons.alien8Bits()}
                        </span>
                        <span>
                            Registrarse
                        </span>
                    </p>
                </Link>
        </div>
    )
}
const UserOptions = props => {
    const { Link, icons, close, lf } = props;
    return (
        <div 
            className="flex flex-wrap w-full justify-center items-start"
            >
                <Link
                    to="/"
                    onClick={() => {
                        lf.cerrarSesion();
                        close();
                    }}
                    className="flex flex-wrap w-full justify-center items-center text-icon manita mt-3"
                    >
                    <p 
                        className="flex flex-wrap w-1/2 md:w-1/4 justify-around items-start text-icon manita">
                        <span className="mr-2 icon-text">
                            {icons.doorOpen()}
                        </span>
                        <span>
                            Cerrar sesion
                        </span>
                    </p>
                </Link>
        </div>
    )
}

export { UserMenuModal };