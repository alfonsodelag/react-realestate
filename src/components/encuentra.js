import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from '@emotion/styled';
import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css';

const ImagenBackground = styled(BackgroundImage)`
  height: 300px;
`;

function Encuentra() {

    const { imagen } = useStaticQuery(graphql`
    query {
        imagen: file(relativePath: {eq: "encuentra.jpg"}) {
        sharp: childImageSharp {
            fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
    `)

    console.log(imagen);

    return (
        <ImagenBackground tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
            <div className={heroCSS.imagenbg}>
                <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
                <p>15 años de Experiencia</p>
            </div>
        </ImagenBackground>
    )
}

export default Encuentra
