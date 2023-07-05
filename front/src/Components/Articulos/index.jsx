import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AllContext } from '../../App/MyContext';
import { Outlet } from 'react-router-dom';

function Articulos() {
    const { ls, lf, s, f, Icons } = useContext(AllContext);
    const icons = new Icons();
    return (
        <Outlet />
    )
}

export { Articulos };
