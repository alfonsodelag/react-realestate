import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

function useFiltro() {

    // const resultado = useStaticQuery(graphql`
    //     query {
    //         allStrapiCategorias {
    //             nodes {
    //                 nombre
    //                 id
    //             }
    //         }
    //     }
    // `)

    const FiltroUI = () => (
        <form>
            <select>
                <option value="">-- Filtrar --</option>
            </select>
        </form>
    )

    return {
        FiltroUI
    }
}

export default useFiltro
