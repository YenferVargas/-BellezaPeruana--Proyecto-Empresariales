import React, { Fragment, useEffect, useContext } from 'react';
import { AllContext } from '../../App/MyContext';

function BaseModal(props) {
    const { ls, Icons, s, f } = React.useContext(AllContext);
    
    const ztyle = props.zindex ? {zIndex: props.zindex} : {};

    const close = () => {
        f.upgradeLvl2('modals', 'exampleBase', 'example', false);
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
    }, [s.modals?.exampleBase?.example]);
    return (
        <div
            className="modal-info flex flex-wrap w-full justify-center items-start"
            style={{...ztyle}}
            onClick={close}
            >
            <div 
                className={`flex flex-wrap w-full justify-center items-start modal-container modal-container-50 pb-5 pt-5 my-modal`}
                style={{...s.styles.basic}}
                onClick={e => e.stopPropagation()}
                >
                Content Here
                <div className="flex flex-wrap w-full justify-around">
                    And Here :3
                </div>
            </div>
        </div>
    )
}

export { BaseModal };