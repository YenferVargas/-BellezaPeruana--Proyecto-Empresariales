import React, { Fragment, useEffect, useContext } from 'react';
import { AllContext } from '../../../App/MyContext';
import { SideBarContent } from '../../SideBar';

import './style/index.css';

function ModalSidebar(props) {
    const { ls, Icons, s, f } = React.useContext(AllContext);
    const ztyle = props.zindex ? {zIndex: props.zindex} : {};
    const show = s.modals?.sidebar?.show;

    const close = () => {
        f.upgradeLvl2('modals', 'sidebar', 'show', false);
    }
    const keysDown = e => {
        if (e.key === 'Escape') {
            e.preventDefault();
            close();
        }
    }
    React.useEffect(() => {
        document.addEventListener('keydown', keysDown);
        return () => {
            document.removeEventListener('keydown', keysDown);
        }
    }, [s.modals?.sidebar?.show]);
    return (
        <div
            className={`modal-info modal-sidebar-container flex flex-wrap w-full justify-start items-start ${show ? 'show-modal' : 'hide-modal'}`}
            onClick={close}
            >
            <div 
                className={`sidebar-container-md`}
                onClick={e => e.stopPropagation()}
                >
                <div className="flex flex-wrap w-full justify-around">
                    <SideBarContent />
                </div>
            </div>
        </div>
    )
}

export { ModalSidebar };