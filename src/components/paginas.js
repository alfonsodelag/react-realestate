import React from 'react';
import styled from '@emotion/styled';
import Layout from './layout';
import { graphql } from 'gatsby';
import ListadoPropiedades from './listadoPropiedades';

const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%auto;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

export const query = graphql`
    query($id: String!){
        allStrapiPaginas(filter: {id: {eq: $id}}){
        nodes {
            nombre
        }
        }
    }
`
function Propiedades({ data: { allStrapiPaginas: { nodes } } }) {

    const { nombre, contenido } = nodes[0];

    return (
        <Layout>
            <main>
                <h1>{nombre}</h1>
                <ContenidoPagina>
                    <p>{contenido}</p>
                </ContenidoPagina>
            </main>

            {nombre === "Propiedades" && (
                <ListadoPropiedades />
            )}

        </Layout>
    )
}

export default Propiedades
