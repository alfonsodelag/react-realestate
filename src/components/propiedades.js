import React from 'react';
import styled from '@emotion/styled';
import Layout from './layout';
import { graphql } from 'gatsby';

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%auto;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    .precio {
        font-size: 2rem;
        color: #75AB00;
    }

    .agente {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #FFF;

        p {
            margin: 0;
        }
    }
`;

export const query = graphql`
query($id: String!) {
	allStrapiPropiedades(filter: { id: { eq: $id}}) {
	  nodes {
      nombre
      estacionamiento
      descripcion
      habitaciones
      precio
      wc
      
    }
	}
}
`
function Propiedades({ data: { allStrapiPropiedades: { nodes } } }) {

    const { nombre, descripcion, estacionamiento, habitaciones, wc, precio } = nodes[0];

    return (
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <p className="precio">
                    {descripcion}
                </p>

                <Sidebar>
                    <p>${precio}</p>
                </Sidebar>
            </Contenido>
        </Layout>
    )
}

export default Propiedades
