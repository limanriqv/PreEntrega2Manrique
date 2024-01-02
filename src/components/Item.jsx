import React from 'react'
import { Card, CardBody, CardFooter, Image ,Stack ,Heading , Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'
import { Link } from 'react-router-dom'



function Item({id, titulo}) {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{titulo}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link to={`/producto/${id}`}>
          <Button>Ver detalle</Button>
        </Link>
      </CardFooter>
    </Card>

  )
}

export default Item