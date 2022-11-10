import React from 'react'
import {  HStack ,Input, Image} from '@chakra-ui/react'

function Navbar() {
  return (
    <div w='100%' bg='tomato' >
        <h1 w='100px' bg='tomato'>Navbar</h1>
        <Image src='' alt='logo'/>
        <Input type='email' placeholder='search' />
          <HStack spacing='24px' bg='red.100'>
    <p w='40px' h='40px' bg='yellow.200'>
      Categories
    </p>
    <p w='40px' h='40px' bg='tomato'>
    FlashSale
    </p>
    <p w='40px' h='40px' bg='pink.100'>
      Best Deal
    </p>
    <p>Shop by Brand</p>
    <p>Trending</p>
    <p justifyContent='center'>New Arrivals</p>
  
  </HStack>
    </div>
  

  )
}

export default Navbar