import React from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {

  const {categoriaId} = useParams()
  console.log(categoriaId);

  const productos = [
    {id:1, titulo:"Producto A", descripcion:"descripcion producto A", precio:1000,categoria:"A"},
    {id:2, titulo:"Producto B", descripcion:"descripcion producto B", precio:2000,categoria:"B"},
    {id:3, titulo:"Producto C", descripcion:"descripcion producto C", precio:4000,categoria:"C"},
    {id:4, titulo:"Producto A", descripcion:"descripcion producto A", precio:1000,categoria:"A"},
    {id:5, titulo:"Producto B", descripcion:"descripcion producto B", precio:3000,categoria:"B"},
    {id:6, titulo:"Producto C", descripcion:"descripcion producto C", precio:1500,categoria:"C"},
    {id:7, titulo:"Producto A", descripcion:"descripcion producto A", precio:1000,categoria:"A"},
    {id:8, titulo:"Producto B", descripcion:"descripcion producto B", precio:2500,categoria:"B"},
    {id:9, titulo:"Producto C", descripcion:"descripcion producto C", precio:3500,categoria:"C"},
  ]

  const mostrarProductos = new Promise((resolve, reject) => {

    if (productos.length > 0){
      setTimeout(()=> {
        resolve(productos)
      },3000)

    } else {
        reject("No se obtuvieron resultados")
    }
  })

  mostrarProductos
  .then((resultado)=> {
    console.log(resultado)
  })
  .catch((error) => {
    console.log(error)
  })


  const productosFiltrados= productos.filter((producto) => producto.categoria == categoriaId)
  console.log(productosFiltrados)





  return (

    <div>{
          categoriaId ? <ItemList productos={productosFiltrados}/> : <ItemList productos={productos} />
         }
    </div>
  )
}

export default ItemListContainer