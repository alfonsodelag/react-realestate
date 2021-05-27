import { graphql, useStaticQuery } from 'gatsby'

function usePropiedades() {

  const datos = useStaticQuery(graphql`
    query {
        allStrapiPropiedades {
          nodes {
            nombre
            descripcion
            id
            wc
            precio
            estacionamiento
            habitaciones
            }
          }
        }
    `)

  // console.log(datos);
  return datos.allStrapiPropiedades.nodes.map(propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    wc: propiedad.wc,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    precio: propiedad.precio,
  }))
}

export default usePropiedades;
