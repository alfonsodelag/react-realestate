import React from 'react'
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';

const ImagenBackground = styled(BackgroundImage)`
  height: 600px;
`;

function Index() {

  const inicio = useInicio();
  const { nombre, contenido, imagen } = inicio[0];
  console.log("imagen", imagen)

  return (
    <Layout>
      <ImagenBackground
        tag="section"
        fluid={imagen.sharp.fluid}
        css={css`
          height: 600px;
      `}
        fadeIn="soft"
      >

        <div className={heroCSS.imagenbg}>
          <h1 className={heroCSS.titulo}>Venta de Casas y Departamentos Exclusivos</h1>
        </div>

      </ImagenBackground>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
      `}
        >

        </div>
      </main>

      <Encuentra />

      <ListadoPropiedades />

      <h1>{nombre}</h1>
      <p css={css`
        text-align: center;
      `}>{contenido}</p>
    </Layout>
  )
}

export default Index;
