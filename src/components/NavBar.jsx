import React from 'react'
import CartWidget from './CartWidget'
import {Image, Flex, Spacer, Box, Menu,MenuButton,MenuList,MenuItem,Button} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <Flex>
            <Link to="/">
                <Box p='4' bg='red.400'>
                    La previa
                </Box>
            </Link>
            
            <Spacer />

            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Categorías
                </MenuButton>
                <MenuList>
                    <Link to={"/categoria/A"}>
                        <MenuItem>Categoria a</MenuItem>
                    </Link>

                    <Link to={"/categoria/B"}>
                        <MenuItem>Categoria b</MenuItem>
                    </Link>

                    <Link to={"/categoria/C"}>
                        <MenuItem>Categoria c</MenuItem>
                    </Link>
                   
                </MenuList>
            </Menu>



            <Link to="/cart">
                <Box p='4' bg='green.400'>
                    <CartWidget/>
                </Box>
            </Link>
        </Flex>
  
    </div>
  )
}

export default NavBar