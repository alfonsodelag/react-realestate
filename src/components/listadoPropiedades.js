import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import listadoPropiedadesCSS from '../css/listadopropiedades.module.css';
import useFiltro from '../hooks/useFiltro';

function ListadoPropiedades() {

    const resultado = usePropiedades();
    const [propiedades, guardarPropiedades] = useState([]);

    // Filtrado de propiedades
    const { FiltroUI } = useFiltro()

    useEffect(() => {
        guardarPropiedades(resultado);
    }, [])

    console.log(propiedades);

    return (
        <>
            <h2 css={css`
            margin-top: 5rem;
        `}>Nuestras Propiedades</h2>

            {FiltroUI()}

            <ul className={listadoPropiedadesCSS.propiedad}>
                {propiedades.map(propiedad => (
                    <PropiedadPreview
                        key={propiedad.name}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
    )
}

export default ListadoPropiedades
