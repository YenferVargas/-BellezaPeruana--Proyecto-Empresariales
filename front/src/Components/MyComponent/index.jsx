import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';

const MyComponent = () => {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();
    return (
        <Fragment>
            <div className='flex flex-wrap justify-center w-full'>
            MyComponent
            </div>
        </Fragment>
    )
}

export { MyComponent };
