import React from 'react';
import { AllContext } from '../../App/MyContext';
import './styles/index.css'

function Loading() {
    const { s } = React.useContext(AllContext);
    return (
        <div className="atom-spinner-container pt-5">
            <div 
                className={`atom-spinner text-[var(--my-minor)]`}
                >
                <div 
                    className="spinner-inner border-left-[var(--my-minor)]"
                    >
                    <div 
                        className="spinner-line border-left-[var(--my-minor)]"
                        ></div>
                    <div 
                        className="spinner-line border-left-[var(--my-minor)]"
                        ></div>
                    <div 
                        className="spinner-line border-left-[var(--my-minor)]"
                        ></div>
                    <div 
                        className={`spinner-circle text-[var(--my-minor)]`}
                        >
                    &#9679;
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Loading };