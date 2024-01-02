import { useState } from 'react'
import {  Button , ButtonGroup} from '@chakra-ui/react'


const ItemCount = () => {
    const  [contador, setContador]= useState(0)
    
  
  return (
    <div>
      <ButtonGroup spacing= '2' >
      
        <Button variant='solid' colorScheme='blue' onClick={() => setContador(contador - 1)}>
        -
        </Button>
        <h3>{contador}</h3>
        <Button variant='solid' colorScheme='blue' onClick={() => setContador(contador + 1)}>
        +
        </Button>
       
        <Button variant='ghost' colorScheme='blue'>
        Agregar al carrito
        </Button>
      </ButtonGroup>



    </div>
  )
}

export default ItemCount